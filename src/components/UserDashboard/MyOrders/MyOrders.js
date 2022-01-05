import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import useFirebase from '../../../hooks/useFirebase';
import "./MyOrder.css";
import Axios from "axios";
import axios from 'axios';

const MyOrders = () => {
    const { user } = useFirebase();
    const [myBookings, setMyBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/booking/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyBookings(data)
                setLoading(false);
            })

    }, [user.email]);
    // RAZORPAY CREATED BY CHANDAN
    const handlePay = (order) => {
        const strAmount = order.amount;
        const amount = parseInt(strAmount)
        console.log(typeof amount);
        const orderData = {
            "amount": amount * 100,
            "currency": "USD",
        }
        axios.post('http://localhost:5000/orderPay', orderData)
            .then(res => {
                const response = res;
                const {data} = response;
                const options = {
                    key: process.env.RAZOR_PAY_TEST_KEY,
                    name: "WaterPark",
                    amount: data.amount,
                    description: "Payment",
                    order_id: data.id,
                    handler: async (response) => {
                        try {
                            const paymentId = response.razorpay_payment_id;
                            const url = `http://localhost:5000/capture/${paymentId}`;
                            const captureResponse = await Axios.post(url, {});
                            console.log(captureResponse.data);
                            window.location.reload();
                        } catch (err) {
                            console.log(err);
                        }
                    },
                    theme: {
                        color: "#00ffee",
                    },
                };
                console.log(options);
                const rzp1 = new window.Razorpay(options);
                rzp1.open();
            })
    }
    
    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Are you sure you want to delete!",
            icon: "warning",
            buttons: [true, "Yes"],
            dangerMode: true,
        }).then(wantDelete => {
            if (wantDelete) {
                const loadingId = toast.loading("Deleting...");
                const url = `http://localhost:5000/booking/${id}`
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        toast.success('Deleted', {
                            id: loadingId,
                        });
                        if (data.deletedCount > 0) {
                            const remaining = myBookings.filter(booking => booking?._id !== id)
                            setMyBookings(remaining);
                            return swal("Successfully Delete!", "Your order has been successfully deleted.", "success");
                        }
                    })
                    .catch(err => {
                        toast.dismiss(loading);
                        swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true })
                    })
            }
        })
    }
    return (
        <div>
            <div className="cardHeader">
                <h2>Recent Orders</h2>
                <Link to="" className="view-all-btn">View All</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Package Name</td>
                        <td>Email</td>
                        <td>Booking Date</td>
                        <td>Status</td>
                        <td>Cancel Order</td>
                    </tr>
                </thead>
                {loading ? <Spinner animation="border" variant="danger" /> :
                    myBookings.map(order => (
                        <tbody>
                            <tr>
                                <td>{order.name}</td>
                                <td>{order.packageName}</td>
                                <td>{order.email.slice(0, 8)}...</td>
                                <td>{order.bookingDate}</td>
                                <td>
                                    <span className={order.status === "Pending" ? "status pending" : order.status === "On going" ? "status inprogress" : order.status === "Done" ? "status delivered" : null}>{order.status}</span>
                                    <Button onClick={() => handlePay(order)} variant="outline-success" className='white-space-off'>Pay Now</Button>
                                </td>
                                <td>
                                    <Button onClick={() => handleDelete(order._id)} variant="danger bg-danger m-1" className='white-space-off'>Cancel</Button>
                                </td>
                            </tr>

                        </tbody>
                    ))}
            </table>
            <Toaster />
        </div>
    );
};

export default MyOrders;
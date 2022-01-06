import React from 'react';
import Axios from "axios";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Col, Row, Button } from 'react-bootstrap';

const Payment = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const userAmount = data.amount;
        const order = {
            "_id": "61d5dd6c6a3b5df12fc645f2",
            "packageName": "The Roller Coaster",
            "name": "CHANDAN MANDI",
            "email": "itscoderchandan@gmail.com",
            "phone": "897589899",
            "bookingDate": "2020-02-12",
            "packageId": "61d438ab5df33ae454c86317",
            "amount": userAmount,
            "status": "Pending",
            "orderTime": "05/01/2022"
        };
        const strAmount = order.amount;
        const amount = parseInt(strAmount)
        const orderData = {
            "amount": amount * 100,
            "currency": "USD",
            receipt: "receipt#1",
            notes: {
                key1: "value3",
                key2: "value2"
            }
        }
        axios.post('http://localhost:5000/createOrder', orderData)
            .then(res => {
                const response = res;
                const { data } = response;
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
                const rzp1 = new window.Razorpay(options);
                rzp1.open();
            })

    }
    return (
        <div>
            <h2 className='mb-5'>Pay Using Razorpay...</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-main" style={{ borderRadius: "15px", maxWidth: '85rem' }}>
                    <Row>
                        <Col md={12} xs={12} className="pr-md-4">
                            <Row>
                                <Col md={6} xs={12}>
                                    <label>Only 2 digit Number Enter Like- "15"</label>
                                    <input
                                        className="our-form-input"
                                        type="number"
                                        {...register("amount", { required: true, min: 1, max: 99 })}
                                        defaultValue="" />
                                    {errors.amount && "Enter Currect Amount"}
                                </Col>
                                <Col md={6} xs={12}>
                                    <div className="text-center mt-5">
                                        <Button type="submit" className="btn-main" style={{ padding: ".68rem 2rem" }}>
                                            Pay Now
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <div className="paymentgateway-img" style={{ width: "100%" }}>
                                <img src="https://i.ibb.co/ZLZ4xKY/razorpay.png" className='img-fluid' alt="" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </form>
        </div>
    );
};

export default Payment;
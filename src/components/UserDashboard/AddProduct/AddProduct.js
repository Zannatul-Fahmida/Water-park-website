import axios from 'axios';
import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import swal from 'sweetalert';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const loading = toast.loading("Loading.....")
        axios.post('https://safe-crag-22535.herokuapp.com/availableCars', data)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Added', {
                        id: loading,
                      });
                    reset();
                    return swal("Successfully Added!", "Your car has been successfully added.", "success");
                }
            })
    }
    return (
        <div>
            <h2>Add a Car Details</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-main" style={{ borderRadius: "15px", maxWidth: '85rem' }}>
                    <Row>
                        <Col style={{ width: '550px', margin: '0 auto' }} md={12} xs={12} className="pr-md-4">
                            <Row>
                                <Col md={6} sm={12}>
                                    <label>Car Name</label>
                                    <input
                                        className="our-form-input"
                                        type="text"
                                        defaultValue=""
                                        {...register("name", { required: true })}
                                        placeholder="Car Name"
                                    />
                                </Col>
                                <Col md={6} sm={12}>
                                    <label>Mileage</label>
                                    <input
                                        type="text"
                                        className="our-form-input"
                                        defaultValue=""
                                        {...register("mileage", { required: true })}
                                        placeholder="Car Mileage"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} sm={12}>
                                    <label>Car Price</label>
                                    <input
                                        className="our-form-input"
                                        type="text"
                                        defaultValue=""
                                        {...register("price", { required: true })}
                                        placeholder="Car Price"
                                    />
                                </Col>
                                <Col md={6} sm={12}>
                                    <label>Car Image</label>
                                    <input
                                        className="our-form-input"
                                        type="text"
                                        defaultValue=""
                                        {...register("img", { required: true })}
                                        placeholder="Put Car Image Link"
                                    />
                                </Col>
                            </Row>
                            <label>Car Details</label>
                            <textarea
                                type="textarea"
                                style={{ height: '150px' }}
                                className="our-form-input"
                                defaultValue=""
                                {...register("details", { required: true })}
                                placeholder="Type Car Details"
                            />
                            <br />
                            {/* <Button type="submit">Send</Button> */}
                        </Col>
                    </Row>
                </div>

                <div className="text-center mt-4">
                    <Button type="submit" className="btn-main" style={{ padding: ".68rem 2rem" }}>
                        Submit
                    </Button>
                </div>
                <Toaster />
            </form>
        </div>
    );
};

export default AddProduct;
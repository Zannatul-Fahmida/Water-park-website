import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addNewRide } from '../../../redux/slices/BookingSlice';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    const onSubmit = data => {
        dispatch(addNewRide(data))
        reset();
    }
    return (
        <div>
            <h2>Add a Ride Details</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-main" style={{ borderRadius: "15px", maxWidth: '85rem' }}>
                <Row>
                        <Col style={{ width: '550px', margin: '0 auto' }} md={12} xs={12} className="pr-md-4">
                            <Row>
                                <Col md={6} sm={12}>
                                    <label>Ride Name</label>
                                    <input
                                        className="our-form-input"
                                        type="text"
                                        {...register("name", { required: true })}
                                        placeholder="Ride Name"
                                    />
                                </Col>
                                <Col md={6} sm={12}>
                                    <label>Ride Code</label>
                                    <input
                                        type="text"
                                        className="our-form-input"
                                        {...register("code", { required: true })}
                                        placeholder="Ride Code"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} sm={12}>
                                    <label>Ride Price</label>
                                    <input
                                        className="our-form-input"
                                        type="text"
                                        {...register("price", { required: true })}
                                        placeholder="ride Price"
                                    />
                                </Col>
                                <Col md={6} sm={12}>
                                    <label>Ride Image</label>
                                    <input
                                        className="our-form-input"
                                        type="text"
                                        {...register("img", { required: true })}
                                        placeholder="Put Ride Image Link"
                                    />
                                </Col>
                            </Row>
                            <label>Ride Details</label>
                            <textarea
                                type="textarea"
                                style={{ height: '150px' }}
                                className="our-form-input"
                                {...register("description")}
                                placeholder="Type Ride Details"
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
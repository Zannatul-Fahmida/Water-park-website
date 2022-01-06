import React, { useState } from 'react';
import { Col, Row, Button, FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

const MakeAdmin = () => {
    // const [success, setSuccess] = useState('');
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    toast.success('Made admin')
                }
                else {
                    toast.error('Please Enter Valid Email')
                }
            })
    }
    return (
        <div className="d-flex justify-content-center flex-column">
            <h2 className="mb-4">Make An Admin Page</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-main" style={{ borderRadius: "15px", maxWidth: '85rem' }}>
                    <Row>
                        <Col style={{ width: '550px', margin: '0 auto' }} md={12} xs={12} className="pr-md-4">
                            <Row>
                                <Col xs={12}>
                                    <FloatingLabel className="mb-2" controlId="floatingPassword" label="Admin Email">
                                        <Form.Control 
                                        className="our-form-input"
                                        type="email" 
                                        {...register("email", { required: true })}
                                        placeholder="Type Email Address" 
                                        />
                                    </FloatingLabel>
                                </Col>
                                <Col xs={12}>
                                    <div className="text-center mt-3">
                                        <Button type="submit" className="btn-main" style={{ padding: ".68rem 2rem" }}>
                                            Submit
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </div>
            </form>
            <Toaster />
        </div>
    );
};

export default MakeAdmin;
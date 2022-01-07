import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { postPackageBooking } from '../../../redux/slices/BookingSlice';
// import { postPackageBooking } from '../../redux/slices/BookingSlice';
import './Banner.css';
import Fade from 'react-reveal/Fade';
import useAuth from "../../../hooks/useAuth";

const Banner = () => {
    const {user} = useAuth();
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.status = "Pending";
        data.phone = "8918308609";
        console.log(data);
        dispatch(postPackageBooking(data))
        reset();
    };
    return (
        <div className='banner-main text-white'>
            <div className="banner-overlay">
                <div className="container">
                    <div className="row">
                        <Fade left>
                            <div className="col-lg-6">
                                <div className="banner-content text-center text-md-start">
                                    <h6>Welcome To WaterKingdom</h6>
                                    <h1>THE GREATEST WATER AND AMUSEMENT PARK IN THE WORLD</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>

                                    <span className='banner-video d-flex align-items-center' >
                                        <a className='animation-button' target="_blank" href="https://www.youtube.com/watch?v=KXT2w0dCsYc&ab_channel=AddieMaePlays"><i class="far fa-play-circle"></i> </a>
                                        <h5 className='ms-3'>Watch Intro</h5>
                                    </span>
                                </div>
                            </div>
                        </Fade>
                        <div className="col-lg-2"></div>
                        <Fade right>
                            <div className="col-lg-4">
                                <div className="book-form text-white " data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input
                                            {...register("name", { required: true })}
                                            className="p-3 my-2 w-100 book-form-input"
                                            placeholder='name'
                                        />
                                        <input
                                            {...register("email", { required: true })}
                                            className="p-3 my-2 w-100 book-form-input"
                                            defaultValue={user.email}
                                            placeholder='email'
                                        />
                                        <input
                                            {...register("packageName", { required: true })}
                                            className="p-3 my-2 w-100 book-form-input"
                                            value='Family Package'
                                            readOnly
                                        />
                                        <input
                                            {...register("amount", { required: true })}
                                            className="p-3 my-2 w-100 book-form-input"
                                            placeholder='$50'
                                            value="50"
                                            readOnly
                                        />
                                        <input
                                            {...register("bookingDate", { required: true })}
                                            type="date"
                                            className="p-3 my-2 w-100 book-form-input"
                                        />
                                        <br />
                                        <textarea
                                            {...register("comments")}
                                            placeholder="comments"
                                            className="p-3 my-2 w-100 book-form-input"
                                        />
                                        <br />

                                        {errors.exampleRequired && <span>This field is required</span>}

                                        <input
                                            type="submit"
                                            value="Booking"
                                            className="btn btn-info w-50 text-white"
                                        />
                                    </form>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;
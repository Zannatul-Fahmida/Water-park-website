import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './ReviewCard.css';

const ReviewCard = ({ item }) => {
    return (
        <div className="py-5">
            <div className="box">
                <div className="imgBox">
                    <img src="https://lh3.googleusercontent.com/ogw/ADea4I5r3I8B9WmmurWPFz3ir_5IYTbcOeBF3SONGQwVXA=s83-c-mo" alt="" />
                </div>
                <p>{item.comment}</p>
                <Rating
                    emptySymbol="far fa-star star-color"
                    fullSymbol="fas fa-star star-color"
                    initialRating={item.rating}
                    readonly>RAte</Rating>
                <h4>{item.name} <br /> <span>{item.address || 'Dhaka, Bangladesh'}</span></h4>
            </div>
        </div>
    );
};

export default ReviewCard;
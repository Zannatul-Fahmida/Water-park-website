import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import swal from "sweetalert";

export const fetchReviews = createAsyncThunk(
    'reviews/fetchReviews',
    async () => {
        const response = await fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
        return response;
    }
)
export const postPackageBooking = createAsyncThunk(
    "booking/postPackageBooking",
    async(data) => {
        const loading = toast.loading("Loading...");
        const response = await axios.post("http://localhost:5000/packageBooking", data)
        .then(res => {
            if(res.data.insertedId){
                toast.dismiss(loading);
                swal("Booking Successful!", "Your Booking has been successfully completed.", "success");
            }
        })
        return response;
    }
)
const bookingSlice = createSlice({
    name: "bookings",
    initialState: {
        bookingList: [],
        reviews: [],
    },
    reducers: {
        addToBookingList: (state, action) => {
            state.bookingList.push(action.payload)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchReviews.fulfilled, (state, action) => {
            state.reviews = action.payload;
        });
        builder.addCase(postPackageBooking.fulfilled, (state, action) => {
            state.bookingList.push(action.payload);
        });
    }
})

export const { addToBookingList } = bookingSlice.actions;
export default bookingSlice.reducer;
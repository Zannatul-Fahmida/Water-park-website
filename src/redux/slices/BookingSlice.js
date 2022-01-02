import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchReviews = createAsyncThunk(
    'reviews/fetchReviews',
    async () => {
        const response = await fetch("https://safe-crag-22535.herokuapp.com/review")
            .then((res) => res.json())
            console.log(response);
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
        })
    }
})

export const { addToBookingList } = bookingSlice.actions;
export default bookingSlice.reducer;
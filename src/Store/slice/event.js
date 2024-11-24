import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Post Event
export const eventpost = createAsyncThunk(
    'event/post-event',

    async (eventPostDate, { rejectWithValue }) => {
        try {
            const request = await axios.post(`https://asana-backend.vercel.app/api/event/add-event`, eventPostDate, {
                header: { 'Content-Type': 'multipart/form-data' }
            })
            return request.data;
        }
        catch (error) {
            throw rejectWithValue(error.message ? error.request.data : error.message);
        }
    }
)

//Get Event 
export const eventget = createAsyncThunk(
    'event/get-event',

    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://asana-backend.vercel.app/api/event/get-event`)
            return response.data;
        }
        catch (error) {
            throw rejectWithValue(error.message ? error.response.data : error.message);
        }
    }
)


export const eventgetbyid = createAsyncThunk(
    'event/get-event/id',

    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://asana-backend.vercel.app/api/event/get-event-by-id/${id}`)
            return response.data;
        }
        catch (error) {
            throw rejectWithValue(error.message ? error.response.data : error.message);
        }
    }
)


export const eventUpdateById = createAsyncThunk(
    'event/update-event/id',

    async ({id, formData}, { rejectWithValue }) => {
        try {
            const response = await axios.put(`https://asana-backend.vercel.app/api/event/update-event/${id}`, formData, {
                header: { 'Content-Type': 'multipart/form-data' }
            })
            return response.data;
        }
        catch (error) {
            throw rejectWithValue(error.message ? error.response.data : error.message);
        }
    }
)

const eventSlice = createSlice({
    name: 'event-container',
    initialState: {
        isLoading: false,
        isError: false,
        status: "idle",
        data: []
    },

    extraReducers: (builder) => {

        // Post/Create Event 
        builder.addCase(eventpost.pending, (state) => {
            state.isLoading = true;
            state.status = 'loading';
            state.isError = false;
        })

        builder.addCase(eventpost.fulfilled, (state, action) => {
            state.isLoading = true;
            state.status = 'success';
            state.data = action.payload;
            console.log('data', action.payload)
            state.isError = false;
        })

        builder.addCase(eventpost.rejected, (state, action) => {
            state.isLoading = true;
            state.status = 'failed';
            state.data = action.payload;
            state.isError = true;
        })

        // Get/Fetch Events
        builder.addCase(eventget.pending, (state) => {
            state.isLoading = true;
            state.status = 'loading';
            state.isError = false;
        })

        builder.addCase(eventget.fulfilled, (state, action) => {
            state.isLoading = true;
            state.status = 'success';
            state.data = action.payload;
            state.isError = false;
        })

        builder.addCase(eventget.rejected, (state, action) => {
            state.isLoading = true;
            state.status = 'failed';
            state.data = action.payload;
            state.isError = true;
        })


        // Get-by-id/Fetch Events
        builder.addCase(eventgetbyid.pending, (state) => {
            state.isLoading = true;
            state.status = 'loading';
            state.isError = false;
        })

        builder.addCase(eventgetbyid.fulfilled, (state, action) => {
            state.isLoading = true;
            state.status = 'success';
            state.data = action.payload;
            state.isError = false;
        })

        builder.addCase(eventgetbyid.rejected, (state, action) => {
            state.isLoading = true;
            state.status = 'failed';
            state.data = action.payload;
            state.isError = true;
        })

        // Update-by-id/Fetch Events
        builder.addCase(eventUpdateById.pending, (state) => {
            state.isLoading = true;
            state.status = 'loading';
            state.isError = false;
        })

        builder.addCase(eventUpdateById.fulfilled, (state, action) => {
            state.isLoading = true;
            state.status = 'success';
            state.data = action.payload;
            state.isError = false;
        })

        builder.addCase(eventUpdateById.rejected, (state, action) => {
            state.isLoading = true;
            state.status = 'failed';
            state.data = action.payload;
            state.isError = true;
        })

    }
})


export default eventSlice.reducer
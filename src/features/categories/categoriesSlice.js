import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { BASE_URL } from "../../utils/constants";
import axios from "axios";

export const getCategories = createAsyncThunk(
    'categories/getCategories', 
    async (_, thunkAPI)=> {
      try{
        const res = await axios(`${BASE_URL}/categories`);
        return res.data;
      }catch(err){
        console.log(err);
        return thunkAPI.rejectWithValue(err);
      }
    }
);

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        list: [],
        idLoading: false,
    }, 

    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state, { payload }) => {
            state.idLoading = true;
        });
        builder.addCase(getCategories.fulfilled, (state, { payload }) => {
            state.list = payload;
            state.idLoading = false;
        });
        builder.addCase(getCategories.rejected, (state, { payload }) => {
            state.idLoading = false;
        });
  },

});

export default categoriesSlice.reducer;
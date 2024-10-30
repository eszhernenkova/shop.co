import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { BASE_URL } from "../../utils/constants";
import axios from "axios";

export const getProducts = createAsyncThunk(
    'products/getProducts', 
    async (_, thunkAPI)=> {
      try{
        const res = await axios(`${BASE_URL}`);
        return res.data;
      }catch(err){
        console.log(err);
        return thunkAPI.rejectWithValue(err);
      }
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list: [],
        // filtered: [],
        // related: [], 
        idLoading: false,
    }, 

    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.idLoading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, { payload }) => {
            state.list = payload;
            state.idLoading = false;
        });
        builder.addCase(getProducts.rejected, (state) => {
            state.idLoading = false;
        });
  },

});

export default productsSlice.reducer;
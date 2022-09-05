import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    p1name: "Player 1", 
    initialState: 
    {p1name:"Player 1"},
    reducers:{
        GetP1Name : (state , action) => {
            
        }
    }

})

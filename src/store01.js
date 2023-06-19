import { configureStore, createSlice } from "@reduxjs/toolkit";


let counter = createSlice({
  name:'counter',
  initialState:1,
  reducers:{
    changeCouter(state){
      return state += 1;
    }
  }
})

export let {changeCouter} = counter.actions

let cart = createSlice({
  name:'cart',
  initialState:[
    {id:0, name:'peopel1'},
    {id:1, name:'peopel2'},
    {id:2, name:'peopel3'},
  ]
})

export default configureStore({
  reducer:{
    counter:counter.reducer,
    cart:cart.reducer
  }
})
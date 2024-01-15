import {createSlice} from '@reduxjs/toolkit'

const initialState={
    arr:[
        {_id:1,topic:"jave"},
        {_id:2,topic:"c#"},
        {_id:3,topic:"python"}
    ]

}
export const testSlice=createSlice({
    name:"test",
    initialState,
    reducers: {addToArr : (state, action)=> 
        {
            state.arr.push({
                ...action.payload,
            _id :state.arr[state.arr.length - 1]._id + 1
            })
        },removeFromArr:(state,action)=>{
            let index=state.arr.findIndex(item=>item._id==action.payload)
            state.arr.splice(index,1)
        }

    }
})
export const {addToArr,removeFromArr}=testSlice.actions;
export default testSlice.reducer;
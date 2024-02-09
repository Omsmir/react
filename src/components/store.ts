import { configureStore ,createSlice} from "@reduxjs/toolkit";


const initialState = {value:{username: ""}}

 const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        logout: (state) => {
            state.value = initialState.value
    },
        login: (state,action) => {
            state.value = action.payload
        }
    },
   
})

export const {login,logout} = userSlice.actions

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})
import {configureStore}  from'@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice'
import userReducer from "../features/user/userSlice"
import iceCreamReducer from '../features/icecream/iceCreamSlice'

//import {reduxLogger} from "redux-logger"
//const logger = reduxLogger.createLogger()
const store = configureStore({
    reducer:{
        cake:cakeReducer,
        iceCream:iceCreamReducer,
        user:userReducer
    },
//    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
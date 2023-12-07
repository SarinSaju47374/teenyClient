import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

 
import userReducer from "./userSlice"; //importing the reducer
 

  
const userPersistConfig = {
    key : "student",
    storage
}
 
 
const persistedUserReducer = persistReducer(userPersistConfig,userReducer)
 

const store = configureStore({
    reducer:{     //something similar to combine reducers 
        'user': persistedUserReducer
    }
})

export const persistor = persistStore(store);

export default store;
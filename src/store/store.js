import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import itemReducer from './slices/item-slice';
import reviewReducer from './slices/review-slice';
import userReducer from './slices/user-slice';
import authReducer from './slices/auth-slice';
import dormReducer from './slices/dorm-slice';
const persistConfig = {
    key: "serviceRental",
    version: 1.1,
    storage,
    blacklist : ['review']
};

export const rootReducer = combineReducers({
    
    auth:authReducer,
    item:itemReducer,
    review: reviewReducer,
    user:userReducer,
    dorm : dormReducer
   
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
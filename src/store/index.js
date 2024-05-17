import { configureStore } from '@reduxjs/toolkit'
import reducer from './task.slice'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}
export default configureStore({
    reducer: {
        taskInfo: reducer
    }
})
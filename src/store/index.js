import { configureStore } from '@reduxjs/toolkit'
import reducer from './task.slice'
export default configureStore({
    reducer: {
        taskInfo: reducer
    }
})
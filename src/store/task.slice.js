import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    taskList: [],
    task: {}
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        setTask: (state, { payload }) => {
            state.taskList = payload
        }
    }
})

const { actions, reducer } = taskSlice
export const { setTask } = actions
export default reducer
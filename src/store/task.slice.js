import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    taskList: [],
    task: {}
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        setTaskList: (state, { payload }) => {
            state.taskList = payload
        },
        setTask: (state, { payload }) => {
            state.task = payload
        }
    }
})

const { actions, reducer } = taskSlice
export const { setTaskList, setTask } = actions
export default reducer
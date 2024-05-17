import { toast } from "react-toastify"
import { addTask, getTasks } from "../axios/taskAxios"
import { setTask } from "./task.slice"

export const addTaskAction = (data) => async () => {
    const pending = addTask(data)
    toast.promise(pending, {
        pending: "Pleasw wait"
    })
}

export const getTasksAction = () => async (dispatch) => {
    const pending = getTasks()
    toast.promise(pending, {
        pending: "Pleasw wait"
    })
    const { status, tasks } = await pending

    if (status === "success") {
        dispatch(setTask(tasks))
    }
}
import { toast } from "react-toastify"
import { addTask, getATask, getTasks } from "../axios/taskAxios"
import { setTask, setTaskList } from "./task.slice"

export const addTaskAction = (data) => async () => {
    const pending = addTask(data)
    toast.promise(pending, {
        pending: "Pleasw wait"
    })
}

export const getTasksAction = (data) => async (dispatch) => {
    const pending = getTasks(data)
    toast.promise(pending, {
        pending: "Pleasw wait"
    })
    const { status, tasks } = await pending

    if (status === "success") {
        dispatch(setTaskList(tasks))
    }
}

export const getATaskAction = (_id) => async (dispatch) => {
    const pending = getATask(_id)
    toast.promise(pending, {
        pending: "Pleasw wait"
    })
    const { status, tasks } = await pending

    if (status === "success") {
        dispatch(setTask(tasks))
    }
}
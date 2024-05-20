import { toast } from "react-toastify"
import { addTask, deleteATask, getATask, getTasks, updateATask } from "../axios/taskAxios"
import { setTask, setTaskList } from "./task.slice"
import { localStoragEmail } from "../components/Form"

export const addTaskAction = (data) => async (dispatch) => {
    const pending = addTask(data)
    const { status, message } = await pending;
    if (status === "success") {
        dispatch(getTasksAction({ email: data.email }));
        return toast[status](message);
    }
    toast(message);
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

export const updateATaskAction = (_id, data) => async (dispatch) => {
    const pending = updateATask(_id, data)
    toast.promise(pending, {
        pending: "Pleasw wait"
    })
    const { status, tasks } = await pending

    if (status === "success") {
        dispatch(setTask(tasks))
    }
}

export const deleteATaskAction = (_id) => async (dispatch) => {
    const pending = deleteATask(_id)
    toast.promise(pending, {
        pending: "Pleasw wait... \n deleting task..."
    })
    const { status } = await pending

    if (status === "success") {
        dispatch(getTasksAction(localStoragEmail))
    }
}
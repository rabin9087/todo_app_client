import { toast } from "react-toastify"
import { addTask } from "../axios/taskAxios"
import { setTask } from "./task.slice"

export const addTaskAction = (data) => async (dispatch) => {

    const pending = addTask(data)
    toast.promise(pending, {
        pending: "Pleasw wait"
    })
}
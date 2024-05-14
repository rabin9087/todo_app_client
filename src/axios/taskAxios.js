import { axiosProcesser, rootAPI } from "./axios"
const taskApi = rootAPI + "/task"

export const addTask = (data) => {
    console.log(data)
    return axiosProcesser({
        method: "post",
        url: taskApi,
        data
    })

}
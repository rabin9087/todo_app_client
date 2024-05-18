import { axiosProcesser, rootAPI } from "./axios"
const taskApi = rootAPI + "/task"

export const addTask = (data) => {
    return axiosProcesser({
        method: "post",
        url: taskApi,
        data
    })
}

export const getTasks = (data) => {
    return axiosProcesser({
        method: "get",
        url: data ? taskApi + "/" + data : taskApi,

    })
}

export const getATask = (_id) => {
    return axiosProcesser({
        method: "get",
        url: taskApi + "/edit/" + _id,
    })
}

export const updateATask = (_id, data) => {
    return axiosProcesser({
        method: "patch",
        url: taskApi + "/" + _id,
        data
    })
}

export const deleteATask = (_id) => {
    return axiosProcesser({
        method: "delete",
        url: taskApi + "/" + _id,
    })
}
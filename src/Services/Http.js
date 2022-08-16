import axios from "axios";

async function axios_API(method, url, data, option) {

    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token")

    switch (method) {
        case "post":
            return axios.post(url, data, option);

        case "get":
            return axios.get(url, option, data)

        case "delete":
            return axios.delete(url, data, option)
    }
}

export default {

    post: (url, data = [], option = {}) => {
        return axios_API("post", url, data, option)
    },

    get: (url, data = [], option = {}) => {
        return axios_API("get", url, data, option)
    },

    delete: (url, data = [], option = {}) => {
        return axios_API("delete", url, data, option)
    }
    
}
import Http from "./Http";
import baseUrl from "../Config/baseUrl";

export default {
    // student page mate
    logIn_API(data) {
        return new Promise((resolve, reject) => {
            Http.post(baseUrl + "/api/login", data)

                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                })
        })
    },
    logout_API(){
        return new Promise((resolve,reject)=>{
            Http.get(baseUrl + "/api/logout")
            .then(function(res){
                return resolve(res)
            })
            .catch(function(err){
                return reject(err)
            })
        })
    },
    register_API(data) {
        return new Promise((resolve, reject) => {
            Http.post(baseUrl + "/api/register", data)
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                })
        })
    },

    get_call() {
        return new Promise((resolve, reject) => {
            Http.get(baseUrl + "/api/student")
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                })
        })
    },
    student_registor(data) {
        return new Promise((resolve, reject) => {
            Http.post(baseUrl + "/api/student/add", data)
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                })
        })
    },
    student_delete(id) {
        return new Promise((resolve, reject) => {
            Http.delete(baseUrl + "/api/student/delete/" + id)
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                })
        })
    },
    student_get_update(id) {
        return new Promise((resolve, reject) => {
            Http.get(baseUrl + "/api/student/edit/" + id)
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                })
        })
    },
    student_update(id, data) {
        return new Promise((resolve, reject) => {
            Http.post(baseUrl + "/api/student/update/" + id, data)
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                })
        })
    },
    getaccesstoken(data) {
        return new Promise((resolve, reject) => {
            Http.get("https://www.universal-tutorial.com/api/getaccesstoken", [], data)

                .then(function (res) {
                    return resolve(res)
                })
                .catch(function (ere) {
                    return reject(ere)
                })
        })
    },
    countries_API(data) {
        return new Promise((resolve, reject) => {
            Http.get("https://www.universal-tutorial.com/api/countries/", [], data)

                .then(function (res) {
                    return resolve(res)
                })
                .catch(function (ere) {
                    return reject(ere)
                })
        })
    },
    states_API(id, data) {
        return new Promise((resolve, reject) => {
            Http.get("https://www.universal-tutorial.com/api/states/" + id, [], data)
                .then(function (res) {
                    return resolve(res)
                })
                .catch(function (ere) {
                    return reject(ere)
                })
        })
    },
    city_API(id, data) {
        return new Promise((resolve, reject) => {
            Http.get("https://www.universal-tutorial.com/api/cities/" + id, [], data)
                .then(function (res) {
                    return resolve(res)
                })
                .catch(function (ere) {
                    return reject(ere)
                })
        })
    },

    // User page start
    user_get_API() {
        return new Promise((resolve, reject) => {
            Http.get(baseUrl + "/api/user")
                .then(function (res) {
                    return resolve(res)
                })
                .catch(function (ere) {
                    return reject(ere)
                })
        })
    },
    userRegister_API(data) {
        return new Promise((resolve, reject) => {
            Http.post(baseUrl + "/api/user/add", data)
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (ere) {
                    return reject(ere)
                })
        })
    },
    user_delete(id) {
        return new Promise((resolve, reject) => {
            Http.delete(baseUrl + "/api/user/delete/" + id)
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                })
        })
    },
    user_show_edit(id) {
        return new Promise((resolve, reject) => {
            Http.get(baseUrl + "/api/user/show/" + id)
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                })
        })
    },
    user_update(id, data) {
        return new Promise((resolve, reject) => {
            Http.post(baseUrl + "/api/user/update/" + id, data)
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                })
        })
    },

    // Role page start
    role_ger_API() {
        return new Promise((resolve, reject) => {
            Http.get(baseUrl + "/api/role")
                .then(function (ers) {
                    return resolve(ers)
                })
                .catch(function (err) {
                    return reject(err)
                })
        })
    },
    role_register_API(data) {
        return new Promise((resolve, reject) => {
            Http.post(baseUrl + "/api/role/add", data)
                .then(function (res) {
                    return resolve(res)
                })
                .catch(function (err) {
                    return reject(err)
                })
        })
    },
    permision_get_API() {
        return new Promise((resolve, reject) => {
            Http.get(baseUrl + "/api/permission")
                .then(function (ers) {
                    return resolve(ers)
                })
                .catch(function (err) {
                    return reject(err)
                })
        })
    },
    role_delete_API(id) {
        return new Promise((resolve, reject) => {
            Http.delete(baseUrl + "/api/role/delete/" + id)
                .then(function (res) {
                    return resolve(res)
                })
                .catch(function (err) {
                    return reject(err)
                })
        })
    },
    role_show_edit(id) {
        return new Promise((resolve, reject) => {
            Http.get(baseUrl + "/api/role/edit/" + id)
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                })
        })
    },
    role_update(id, data) {
        return new Promise((resolve, reject) => {
            Http.post(baseUrl + "/api/role/update/" + id, data)
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                })
        })
    },

    // Permision page start
    permision_get_API() {
        return new Promise((resolve, reject) => {
            Http.get(baseUrl + "/api/permission")
                .then(function (ers) {
                    return resolve(ers)
                })
                .catch(function (err) {
                    return reject(err)
                })
        })
    },
    permision_register_API(data) {
        return new Promise((resolve, reject) => {
            Http.post(baseUrl + "/api/permission/add", data)
                .then(function (res) {
                    return resolve(res)
                })
                .catch(function (err) {
                    return reject(err)
                })
        })
    },
    permision_delete_API(id) {
        return new Promise((resolve, reject) => {
            Http.delete(baseUrl + "/api/permission/delete/" + id)
                .then(function (res) {
                    return resolve(res)
                })
                .catch(function (err) {
                    return reject(err)
                })
        })
    },
    permision_show_edit(id) {
        return new Promise((resolve, reject) => {
            Http.get(baseUrl + "/api/permission/edit/" + id)
                .then(function (res) {
                    return resolve(res)
                })
                .catch(function (err) {
                    return reject(err)
                })
        })
    },
    permision_update_API(id, data) {
        return new Promise((resolve, reject) => {
            Http.post(baseUrl + "/api/permission/update/" + id, data)
            .then(function(res){
                return resolve(res)
            })
            .catch(function(err){
                return reject(err)
            })
        })
    }
}




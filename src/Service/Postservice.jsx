import Http from "./Http";
import baseUrl from "../Config/baseUrl";

export default {
  logIn_API(data) {
    return new Promise((resolve, reject) => {
      Http.post(baseUrl + "/api/login", data)
        .then(function (res) {
          return resolve(res.data);
        })
        .catch(function (err) {
          return reject(err);
        });
    });
  },
  get_call() {
    return new Promise((resolve, reject) => {
      Http.get(baseUrl + "/api/student")
        .then(function (res) {
          return resolve(res);
        })
        .catch(function (ere) {
          return reject(ere);
        });
    });
  },
  student_register(data) {
    return new Promise((resolve, reject) => {
      Http.post(baseUrl + "/api/student/add", data)
        .then(function (res) {
          return resolve(res.data);
        })
        .catch(function (ere) {
          return reject(ere);
        });
    });
  },
};

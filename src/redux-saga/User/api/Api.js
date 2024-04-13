import axios from "axios";
import { DELETE_USER, GET_USER, POST_USER, UPDATE_USER, base_url } from "../../Constant";


// get-user
function get_user(action) {
    return axios.get(base_url + GET_USER).then((res) => {
        let data = res.data;
        let status = res.status;
        return { data, status }
    })
}

// post-user
function post_user(action) {
    console.log(action);
    return axios.post(base_url + POST_USER, action.payload).then((res) => {
        let data = res.data;
        let status = res.status;
        return { data, status }
    })
}

// delete-user
function delete_user(action) {
    return axios.delete(base_url + DELETE_USER + action.payload).then((res) => {
        let data = res.data;
        let status = res.status;
        return { data, status }
    })
}

// update-user
function update_user(action) {
    return axios.put(base_url + UPDATE_USER + action.payload.id, action.payload).then((res) => {
        let data = res.data;
        let status = res.status;
        return { data, status }
    })
}

export { get_user, post_user, delete_user, update_user }
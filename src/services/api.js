import axios from "axios";

const API_URL =
    "https://script.google.com/macros/s/AKfycby_q1XNSCH43H8CKR2T_lgVtoJEucyQf5S53rvzixoLwNwZ4x461QPaFor_lP6xJ7tI/exec";



export const getPosts = async () => {

    const response = await axios.get(API_URL);

    return response.data;
};



export const addPost = async (data) => {

    const response = await axios.post(
        API_URL,

        JSON.stringify(data),

        {
            headers: {
                "Content-Type": "text/plain;charset=utf-8",
            },
        }
    );

    return response.data;
};
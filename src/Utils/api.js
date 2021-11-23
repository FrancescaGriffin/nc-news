import axios from "axios";

const newsApi = axios.create({
    baseURL: 'https://firstnews.herokuapp.com/api',
});

export const getTopicsForHomepage = () => {
    return newsApi.get('/topics').then((response) => {
        // console.log(response.data.topics, "the response")
        return response.data.topics
    }).catch((error)=>{
        console.log(error, "the error")
    })
}
import axios from "axios";

const newsApi = axios.create({
    baseURL: 'https://firstnews.herokuapp.com/api',
});

export const getTopicsForHomepage = () => {
    return newsApi.get('/topics').then((response) => {
        // console.log(response.data.topics, "the response")
        return response.data.topics
    }).catch((error)=>{
        console.log(error, "the error for get topics")
    })
};

export const getAllArticles = (filterTopic) => {
    return newsApi
            .get('/articles', {
                params: { topic: filterTopic }
            })
            .then((response)=>{
        // console.log(response.data)
        return response.data
    }).catch((error)=>{
        console.log(error, "the error of get all articles")
    })
};

export const getArticleById = ( id ) => {
    return newsApi.get(`/articles/${id}`).then((response)=>{
        // console.log(response.data.article, "in api")
        return response.data.article
    })
}
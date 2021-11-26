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

export const getAllArticles = (filterTopic, sortby, orderby) => {
    return newsApi
            .get('/articles', {
                params: { topic: filterTopic, sort_by: sortby, order: orderby},
            })
            .then((response)=>{
        console.log(response.data, "<-- here")
        return response.data
    }).catch((error)=>{
        console.dir(error, "the error of get all articles")
    })
};

export const getArticleById = ( id ) => {
    return newsApi.get(`/articles/${id}`).then((response)=>{
        // console.log(response.data.article, "in api")
        return response.data.article
    })
};

export const getCommentsForArticle = (id) => {
    return newsApi.get(`/articles/${id}/comments`).then((response)=>{
        // console.log(response.data.comments)
        return response.data.comments
    })
};

export const votesForArticle = (id, newVote) => {
    return newsApi.patch(`/articles/${id}`, { inc_votes: newVote }).then((response)=>{
        // console.log(response.data)
        return response.data
    })
};

export const getAllUsers = () => {
    return newsApi.get(`/users`).then((response)=>{
        // console.log(response)
        return response.data.users
    })
};

export const postNewComment = (id, newComment) => {
    return newsApi.post(`/articles/${id}/comments`, newComment).then((response)=>{
        console.log(response.data.newComment)
        return response.data.newComment
    })
}

export const deleteComment = (id) => {
    return newsApi.delete(`/comments/${id}`).then((response)=>{
        console.log(response.data)
        return response.data
    })
};
import axios from 'axios';

export default{
    user:{
        login:(credentials) => axios.post('backend/auth', {credentials})
            .then(res => res.data.user),

        signup: (user) => axios.post('backend/users',{user})
            .then(res => res.data.user)
    },
    thread:{
        createThread:(details) => axios.post('backend/threads',{details})
            .then(res => res.data.thread),
        editThread:(details) => axios.put(`/backend/threads/${details.threadId}`,{details})
            .then(res => res.data.thread),
        deleteThread:(threadId) => axios.delete(`/backend/threads/${threadId}`)
            .then(res => res.data.message),
    },
    comment:{
        createComment:(details) => axios.post('/backend/comments',{details})
            .then(res => res.data.comment),
        editComment:(details) => axios.put(`/backend/comments/${details.commentId}`,{details})
            .then(res => res.data.comment),
        deleteComment:(commentId) => axios.delete(`/backend/comments/${commentId}`)
            .then(res => res.data.message),
    }
}
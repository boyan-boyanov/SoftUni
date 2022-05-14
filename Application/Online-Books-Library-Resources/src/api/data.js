import * as api from './api.js';

const login = api.login;
const register = api.register;
const logout = api.logout;

async function createItem(data) {
    return api.post('/data/books', data);
}

async function getAllItems() {
    return api.get('/data/books?sortBy=_createdOn%20desc');
}

async function getItemById(id) {
    return api.get('/data/books/' + id);
}

async function editItem(id, data) {
    return api.put('/data/books/' + id, data);
}

async function deleteItem(id) {
    return api.del('/data/books/' + id);
}

async function getUsersItems(userId) {
    return api.get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function likeItem(bookId){
    return api.post('/data/likes', {
        bookId
    });
}

export async function getLikesByItemId(bookId){
    return api.get(`/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`)
}

export async function getMyLikeByItemId(bookId, userId){
    return api.get(`/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}

export {
    login,
    register,
    logout,
    createItem,
    getAllItems,
    getItemById,
    editItem,
    deleteItem,
    getUsersItems
}
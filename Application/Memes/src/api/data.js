import * as api from './api.js';

const login = api.login;
const register = api.register;
const logout = api.logout;

async function createItem(data) {
    return api.post('/data/memes', data);
}

async function getAllItems() {
    return api.get('/data/memes?sortBy=_createdOn%20desc');
}

async function getItemById(id) {
    return api.get('/data/memes/' + id);
}

async function editItem(id, data) {
    return api.put('/data/memes/' + id, data);
}

async function deleteItem(id) {
    return api.del('/data/memes/' + id);
}

async function getUsersItems(userId) {
    return api.get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
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
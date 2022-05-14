import * as api from './api.js';

const login = api.login;
const register = api.register;
const logout = api.logout;

async function createGame(data) {
    return api.post('/data/games', data);
}

async function getAllGames() {
    return api.get('/data/games?sortBy=_createdOn%20desc&distinct=category');
}

async function getGameById(id) {
    return api.get('/data/games/' + id);
}

async function editGame(id, data) {
    return api.put('/data/games/' + id, data);
}

async function deleteGame(id) {
    return api.del('/data/games/' + id);
}

async function getGameComments(gameId) {
    return api.get(`/data/comments?where=gameId%3D%22${gameId}%22`);
}

export async function commentGame(gameId, comment) {
    return api.post('/data/comments', {
        gameId,
        comment
    });
}

export async function listedGames() {
    return api.get(`/data/games?sortBy=_createdOn%20desc`)
}

export async function getMyLikeByBookid(bookId, userId) {
    return api.get(`/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}

export {
    login,
    register,
    logout,
    createGame,
    getAllGames,
    getGameById,
    editGame,
    deleteGame,
    getGameComments,
}
import axios from 'axios'


let initialState = {
    user: []
};


const CREATE_USER = 'CREATE_USER';
const SET_USER = 'SET_USER';

export function login(username) {
    console.log('redux login username', username)
    const setUser = axios.get(`http://localhost:3005/api/get/user/${username}`)
        .then(res => {
            console.log('login redux result', res)
            return res.data
        })

    return {
        type: SET_USER,
        payload: setUser

    }
}

export function createUser(username, password) {
    console.log('user got to reducer', username, password)
    const newUser = axios.post('http://localhost:3005/api/post/user', { username, password })
        .then(res => {
            console.log('res', res)
            return res.data
        })
    console.log('new user', newUser)

    return {
        type: CREATE_USER,
        payload: newUser
    }
}


export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_USER + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        case SET_USER + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })

        default:
            return state;
    }
}
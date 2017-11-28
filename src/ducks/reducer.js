import axios from 'axios'


let initialState = {
    user: [],
    name: "",
    desc: "",
    imgUrl: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    loanAmount: "",
    monthlyMortgage: "",
    desiredRent: "",
};


const CREATE_USER = 'CREATE_USER';
const SET_USER = 'SET_USER';
const WIZARD1 = 'WIZARD1';
const WIZARD2 = 'WIZARD2';
const WIZARD3 = 'WIZARD3';
const WIZARD4 = 'WIZARD4';
const WIZARD5 = 'WIZARD5';

export function wizard5_input(state) {
    console.log('redux wizard5 inputs', state)
    return {
        type: WIZARD5,
        payload: state.desiredRent
    }
}

    export function wizard4_input(state) {
        console.log('redux wizard4 inputs', state)
        return {
            type: WIZARD4,
            payload: {
                loanAmount: state.amount,
                monthlyMortgage: state.mortgage
            }
        }
    }

    export function wizard3_input(state) {
        console.log('redux wizard3 inputs', state)
        const { img } = state
        return {
            type: WIZARD3,
            payload: img
        }
    }

    export function wizard2_input(state) {
        console.log('redux wizard2 inputs', state)
        const wiz2 = state

        return {
            type: WIZARD2,
            payload: {
                address: wiz2.address,
                city: wiz2.city,
                state: wiz2.state,
                zip: wiz2.zip
            }
        }
    }

    export function wizard1_input(wiz1_state) {
        console.log('redux wizard1 inputs', wiz1_state)
        const wiz1 = wiz1_state

        return {
            type: WIZARD1,
            payload: {
                name: wiz1.name,
                desc: wiz1.desc
            }
        }
    }


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
            case WIZARD1:
                return Object.assign({}, state, { name: action.payload.name, desc: action.payload.desc })
            case WIZARD2:
                return Object.assign({}, state, {
                    address: action.payload.address, city: action.payload.city,
                    state: action.payload.state, zip: action.payload.zip
                })
            case WIZARD3:
                return Object.assign({}, state, { imgUrl: action.payload })
            case WIZARD4:
                return Object.assign({}, state, { loanAmount: action.payload.loanAmount, monthlyMortgage: action.payload.monthlyMortgage })
            case WIZARD5:
                return Object.assign({}, state, {desiredRent: action.payload})

            default:
                return state;
        }
    }
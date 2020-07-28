import { LOG_STATE, ADD_TO_CAR } from './actions'

const INITIAL_STATE = []


export default function reducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case LOG_STATE:
            return console.log(state)
        case ADD_TO_CAR:
            return [...state, {...action.item}]
        default:
            return state
    }
}
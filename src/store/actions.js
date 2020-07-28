export const LOG_STATE = 'LOG_STATE'
export const logState = () => {
    return {
        type: LOG_STATE,
    }
}

export const ADD_TO_CAR = 'ADD_TO_CAR'
export const addToCar = item => {
    return {
        type: ADD_TO_CAR,
        item
    }
}
import { combineReducers } from 'redux'

const defaultState = {
    notes: [],
    instructors: []
}

function notesReducer(currentState = defaultState.notes, action) {
    switch (action.type) {
        case "add note":
            return [...currentState, action.payload]
        case "add_notes_from_fetch":
            return action.payload
        default:
            return currentState
    }
}
function instructorsReducer(currentState = defaultState.instructors, action) {
    switch (action.type) {
        case "add instructor":
            return [...currentState, action.payload]
        case "add_instructors_from_fetch":
            return action.payload
        default:
            return currentState
    }
}


const rootReducer = combineReducers({
    notes: notesReducer,
    instructors: instructorsReducer,
})


export default rootReducer
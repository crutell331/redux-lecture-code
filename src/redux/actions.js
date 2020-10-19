export const addNote = (noteObj) => ({ type: "add note", payload: noteObj })


export const getNotes = () => {
    console.log("first dispatch invoked")
    return function (dispatch, getState) {

        console.log("nested function invoked get state: ", getState())
        fetch("http://localhost:3000/notes")
            .then(resp => resp.json())
            // How do we send data to our reducer function????????????????????
            // By using dispatch 
            .then(data => dispatch({ type: "add_notes_from_fetch", payload: data }))

    }
}
export const getInstructors = () => {
    return function (dispatch) {
        fetch("http://localhost:3000/instructors")
            .then(resp => resp.json())
            // How do we send data to our reducer function????????????????????
            // By using dispatch 
            .then(data => dispatch({ type: "add_instructors_from_fetch", payload: data }))

    }
}


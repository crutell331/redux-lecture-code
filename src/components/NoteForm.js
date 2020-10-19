import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../redux/actions'
class NoteForm extends React.Component {
    state = {
        content: ""
    }

    changeHandler = (e) => {
        this.setState({ content: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text-area" value={this.state.content} onChange={this.changeHandler} />
                <input type="submit" value="add note" />
            </form>
        )
    }
}

const mdp = (dispatch) => {
    return { submitHandler: (noteObj) => dispatch(addNote(noteObj)) }

}




export default connect(null, mdp)(NoteForm)
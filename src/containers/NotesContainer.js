import React from 'react'
import { connect } from 'react-redux'
import Note from '../components/Note'
import NoteForm from '../components/NoteForm'
import { getNotes } from '../redux/actions'

class NotesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchNotes()
    }

    renderNotes = () => {
        return this.props.notes.map((note) => <Note key={note.id} note={note} />)
    }

    render() {
        return (
            <>
                <NoteForm />
                <ul>
                    {this.renderNotes()}
                </ul>
            </>
        )
    }
}

const msp = (state) => {
    return { notes: state.notes }
}

const mdp = (dispatch) => {
    return { fetchNotes: () => dispatch(getNotes()) }
}

export default connect(msp, mdp)(NotesContainer)
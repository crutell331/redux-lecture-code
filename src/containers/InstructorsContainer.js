import React from 'react'
import { connect } from 'react-redux'
import { getInstructors } from '../redux/actions'
import Instructor from '../components/Instructor'
class InstructorContainer extends React.Component {

    componentDidMount() {
        this.props.fetchInstructors()
    }

    renderInstructors() {
        return this.props.instructors.map(instructor => <Instructor key={instructor.id} instructor={instructor} />)
    }

    render() {
        return (
            <>
                <h2>Instructors:</h2>
                <ul>
                    {this.renderInstructors()}
                </ul>
            </>
        )
    }

}

const msp = (state) => {
    return { instructors: state.instructors }
}
const mdp = (dispatch) => {
    return { fetchInstructors: () => dispatch(getInstructors()) }
}


export default connect(msp, mdp)(InstructorContainer)
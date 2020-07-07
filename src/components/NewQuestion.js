import React from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class NewQuestion extends React.Component {

    state = {
        q1: '',
        q2: ''
    }

    handleOnQ1Change(e) {
        e.preventDefault();
        const text = e.target.value;
        this.setState(() => ({
            q1: text
        }));
    }

    handleOnQ2Change(e) {
        e.preventDefault();
        const text = e.target.value;
        this.setState(() => ({
            q2: text
        }));
    }

    handleOnSubmit() {
        // const { dispatch } = this.props;
        // dispatch(setAuthedUser(id))
    }

    render() {
        return (
            <div>
                <h3>Create New Question</h3>
                <h5>Would you rather...</h5>
                <form onSubmit={this.handleOnSubmit}>
                    <input value={this.state.q1} onChange={this.handleOnQ1Change} />
                    <p>Or</p>
                    <input value={this.state.q2} onChange={this.handleOnQ2Change} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect()(NewQuestion);
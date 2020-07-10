import React from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import { withRouter } from 'react-router-dom';

class NewQuestion extends React.Component {

    state = {
        q1: '',
        q2: ''
    }

    handleOnQ1Change = (e) => {
        const text = e.target.value;
        this.setState(() => ({
            q1: text
        }));
    }

    handleOnQ2Change = (e) => {
        const text = e.target.value;
        this.setState(() => ({
            q2: text
        }));
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(handleAddQuestion(this.state.q1, this.state.q2));
        this.setState(() => ({
            q1: '',
            q2: ''
        }));
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="main-component">
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

export default withRouter(connect()(NewQuestion));
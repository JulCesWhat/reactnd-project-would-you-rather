import React from 'react';
import { connect } from 'react-redux';

class Question extends React.Component {

    render() {
        const { question } = this.props;
        return (
            <div>
                <p>{question.author}</p>
            </div>
        )
    }
}

function mapStateToProps({ questions }, { id }) {
    const question = questions[id];
    return {
        question
    };
}

export default connect(mapStateToProps)(Question);
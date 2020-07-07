import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Question extends React.Component {

    render() {
        const { question, id } = this.props;
        return (
            <Link to={`/questions/${id}`}>
                <div>
                    <p>{question.author}</p>
                </div>
            </Link>
        )
    }
}

function mapStateToProps({ questions }, { id }) {
    const question = questions[id];
    return {
        question,
        id
    };
}

export default connect(mapStateToProps)(Question);
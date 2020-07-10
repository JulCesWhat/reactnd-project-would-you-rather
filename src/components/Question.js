import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Question extends React.Component {

    render() {
        const { question, id, user } = this.props;
        return (
            <Link to={`/questions/${id}`}>
                <div>
                    <p>{user.name} asks:</p>
                    <img src={user.avatarURL}
                        alt={`Avatart of ${user.name}`}
                        className="avatar" />
                    <p>Would you rather...</p>
                </div>
            </Link>
        )
    }
}

function mapStateToProps({ questions, users }, { id }) {
    const question = questions[id];
    return {
        question,
        id,
        user: users[question.author]
    };
}

export default connect(mapStateToProps)(Question);
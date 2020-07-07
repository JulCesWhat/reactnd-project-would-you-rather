import React from 'react';
import { connect } from 'react-redux';
import { handleAddQuestionAnswer } from '../actions/questions';

class QuestionPage extends React.Component {

    onClickQ1 = () => {
        const { dispatch, question } = this.props;

        dispatch(handleAddQuestionAnswer(question.id, 'optionOne'))
    }

    onClickQ2 = () => {
        const { dispatch, question } = this.props;

        dispatch(handleAddQuestionAnswer(question.id, 'optionTwo'))
    }

    render() {
        const { question, showPoll, totalVotes } = this.props;
        return (
            <div>
                {
                    question ?
                        (
                            showPoll ?
                                (
                                    <div>
                                        <h3>Results:</h3>
                                        <div>
                                            <p>{question.optionOne.text}</p>
                                            <p>{question.optionOne.votes.length} out of {totalVotes}</p>
                                        </div>
                                        <div>
                                            <p>{question.optionTwo.text}</p>
                                            <p>{question.optionTwo.votes.length} out of {totalVotes}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <h3>Would you rather ...</h3>
                                        <p onClick={this.onClickQ1}>{question.optionOne.text}</p>
                                        <p onClick={this.onClickQ2}>{question.optionTwo.text}</p>
                                    </div>
                                )
                        ) : (
                            <p>The question cannot be found</p>
                        )
                }
            </div >
        )
    }
}

function mapStateToProps({ questions, authedUser, users }, props) {
    const { id } = props.match.params;
    const question = id ? questions[id] : null;
    let showPoll = false;
    let user = null;
    let totalVotes = 0;
    if (question) {
        user = users[question.author];
        const userVotedQ1 = question.optionOne.votes.some((v) => (v === authedUser));
        const userVotedQ2 = question.optionTwo.votes.some((v) => (v === authedUser));
        showPoll = userVotedQ1 || userVotedQ2;
        totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
    }
    return {
        question,
        showPoll,
        totalVotes,
        user
    };
}

export default connect(mapStateToProps)(QuestionPage);
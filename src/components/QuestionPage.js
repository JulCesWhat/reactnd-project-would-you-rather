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
        const { question, totalVotes, userCreator, userAnswerReponse } = this.props;
        return (
            <div className="main-component">
                {
                    question ?
                        (
                            !!userAnswerReponse ?
                                (
                                    <div>
                                        <h3>Results:</h3>
                                        <img src={userCreator.avatarURL}
                                            alt={`Avatart of ${userCreator.name}`}
                                            className="avatar" />
                                        <div className={userAnswerReponse === 'optionOne' ? 'question-answer' : ''}>
                                            <p>{question.optionOne.text}</p>
                                            <p>{(question.optionOne.votes.length / totalVotes * 100).toFixed(2) + ' %'}</p>
                                            <p>{question.optionOne.votes.length} out of {totalVotes}</p>
                                        </div>
                                        <hr />
                                        <div className={userAnswerReponse === 'optionTwo' ? 'question-answer' : ''}>
                                            <p>{question.optionTwo.text}</p>
                                            <p>{(question.optionOne.votes.length / totalVotes * 100).toFixed(2) + ' %'}</p>
                                            <p>{question.optionTwo.votes.length} out of {totalVotes}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <h3>Would you rather ...</h3>
                                        <img src={userCreator.avatarURL}
                                            alt={`Avatart of ${userCreator.name}`}
                                            className="avatar" />
                                        <div>
                                            <button className="btn" onClick={this.onClickQ1}>{question.optionOne.text}</button>
                                        </div>
                                        <div>
                                            <button className="btn" onClick={this.onClickQ2}>{question.optionTwo.text}</button>
                                        </div>
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
    let userCreator = null;
    let totalVotes = 0;
    let userAnswer = null;
    let userAnswerReponse = '';
    if (question) {
        userCreator = users[question.author];
        userAnswer = users[authedUser];
        const foundQuestionId = Object.keys(userAnswer.answers).find((key) => (key === id));
        if (foundQuestionId) {
            userAnswerReponse = userAnswer.answers[foundQuestionId];
        }
        totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
    }
    return {
        question,
        totalVotes,
        userCreator,
        userAnswerReponse
    };
}

export default connect(mapStateToProps)(QuestionPage);
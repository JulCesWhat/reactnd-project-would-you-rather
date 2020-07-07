import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question, { } from './Question';

const ANSWERED = 'ANSWERED';
const UNANSWERED = 'UNANSWERED';

class Dashboard extends Component {
    state = {
        filterType: UNANSWERED
    }

    handleOnToggle = () => {
        const filterType = this.state.filterType === UNANSWERED ? ANSWERED : UNANSWERED;
        this.setState(() => ({
            filterType
        }));
    }

    render() {
        const { ansQuestionIds, unAnsQuestionIds } = this.props;
        const { filterType } = this.state;
        return (
            <div>
                <div>
                    <span onClick={this.handleOnToggle}>Unanswered</span>
                    <span onClick={this.handleOnToggle}>Answered</span>
                </div>
                <div>
                    <ul>
                        {
                            filterType === UNANSWERED ?
                                (
                                    unAnsQuestionIds.map((id) => (
                                        <li key={id}>
                                            <Question id={id} />
                                        </li>
                                    ))
                                ) : (
                                    ansQuestionIds.map((id) => (
                                        <li key={id}>
                                            <Question id={id} />
                                        </li>
                                    ))
                                )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ questions, authedUser }) {
    let ansQuestionIds = [];
    let unAnsQuestionIds = [];
    let questionIds = Object.keys(questions)
        .sort((a, b) => (questions[b].timestamp - questions[a].timestamp))
    questionIds.map((id) => {
        const option1 = questions[id].optionOne.votes.some((id) => (id === authedUser));
        const option2 = questions[id].optionTwo.votes.some((id) => (id === authedUser));
        if (option1 || option2) {
            ansQuestionIds.push(id);
        } else {
            unAnsQuestionIds.push(id);
        }
    });

    return {
        ansQuestionIds,
        unAnsQuestionIds
    };
}

export default connect(mapStateToProps)(Dashboard)
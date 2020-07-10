import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    };
}

export function addQuestion(userId, question) {
    return {
        type: ADD_QUESTION,
        userId,
        question
    };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        dispatch(showLoading());
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        }).then((question) => {
            dispatch(addQuestion(authedUser, question));
            // dispatch(addUserQuestion(authedUser, question.id));
            return dispatch(hideLoading());
        });

    };
}

export function addQuestionAnswer(qid, userId, answerNum) {
    return {
        type: SAVE_QUESTION_ANSWER,
        qid,
        userId,
        answerNum
    };
}

export function handleAddQuestionAnswer(qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        dispatch(showLoading());
        saveQuestionAnswer({ authedUser, qid, answer })
            .then(() => {
                dispatch(addQuestionAnswer(qid, authedUser, answer));
                // dispatch(addUserQuestionAnswer(authedUser, qid, answer));
                return dispatch(hideLoading());
            }).catch(() => {
                // Should handle error but it is not a real API
            });
    };
}
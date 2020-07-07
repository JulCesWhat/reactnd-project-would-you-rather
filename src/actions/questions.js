import { saveQuestion, saveQuestionAnswer } from '../utils/api';


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    };
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        }).then((question) => {
            return dispatch(addQuestion(question))
        });

    };
}

export function addQuestionAnswer(qid, authedUser, answer) {
    return {
        type: SAVE_QUESTION_ANSWER,
        qid,
        authedUser,
        answer
    };
}

export function handleAddQuestionAnswer(qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        dispatch(addQuestionAnswer(qid, authedUser, answer))
        saveQuestionAnswer({ authedUser, qid, answer })
            .catch(() => {
                // Should handle error but it is not a real API
            });
    };
}
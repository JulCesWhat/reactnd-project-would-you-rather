import { RECEIVE_USERS, ADD_USER_QUESTION, ADD_USER_QUESTION_ANSWER } from '../actions/users';

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            };
        case ADD_USER_QUESTION:
            return {
                ...state,
                [action.userId]: {
                    ...state[action.userId],
                    questions: [...state[action.userId].questions, ...[action.questionId]]
                }
            };
        case ADD_USER_QUESTION_ANSWER:
            return {
                ...state,
                [action.userId]: {
                    ...state[action.userId],
                    answers: {
                        ...state[action.userId].answers,
                        [action.questionId]: action.answerNum
                    }
                }
            };
        default:
            return state;
    }
}
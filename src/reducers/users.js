import { RECEIVE_USERS } from '../actions/users';
import { ADD_QUESTION, SAVE_QUESTION_ANSWER } from '../actions/questions';

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            };
        case ADD_QUESTION:
            return {
                ...state,
                [action.userId]: {
                    ...state[action.userId],
                    questions: [...state[action.userId].questions, ...[action.question.id]]
                }
            };
        case SAVE_QUESTION_ANSWER:
            return {
                ...state,
                [action.userId]: {
                    ...state[action.userId],
                    answers: {
                        ...state[action.userId].answers,
                        [action.qid]: action.answerNum
                    }
                }
            };
        default:
            return state;
    }
}
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';
export const ADD_USER_QUESTION_ANSWER = 'ADD_USER_QUESTION_ANSWER';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    };
}

export function addUserQuestion(userId, questionId) {
    return {
        type: ADD_USER_QUESTION,
        userId,
        questionId
    };
}

export function addUserQuestionAnswer(userId, questionId, answerNum) {
    return {
        type: ADD_USER_QUESTION_ANSWER,
        userId,
        questionId,
        answerNum
    };
}
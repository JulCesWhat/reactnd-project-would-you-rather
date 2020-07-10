import React from 'react';

export default function UserDetails({ user }) {
    return (
        <div>
            <img src={user.avatarURL}
                alt={`Avatart of ${user.name}`}
                className="avatar" />
            <div>{user.name}</div>
            <p>Answered Questions: {Object.keys(user.answers).length}</p>
            <p>Created Questions: {user.questions.length}</p>
            <p>Score: {Object.keys(user.answers).length + user.questions.length}</p>
        </div>
    );
};
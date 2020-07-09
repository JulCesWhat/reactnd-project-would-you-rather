import React from 'react';



export default function UserDetails({ user }) {

    return (
        <div>
            <img src={user.avatarURL}
                alt={`Avatart of ${user.name}`}
                className="avatar" />
            <div>{user.name}</div>
        </div>
    );
};
import React from 'react';
import { connect } from 'react-redux';
import UserDetails from './UserDetails';

class Leaderboard extends React.Component {
    render() {
        const { users } = this.props;
        return (
            <div className="main-component">
                <h3>Leaderboard</h3>
                <ul>
                    {
                        (users).map((user) => (
                            <li key={user.id}>
                                <UserDetails user={user} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    const sortedUsers = Object.keys(users)
        .sort((a, b) => {
            let valB = Object.keys(users[b].answers).length + users[b].questions.length;
            let valA = Object.keys(users[a].answers).length + users[a].questions.length;
            return valB - valA;
        }).map((id) => (users[id]))
    return {
        users: sortedUsers
    };
}

export default connect(mapStateToProps)(Leaderboard);
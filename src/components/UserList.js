import React from 'react';
import { connect } from 'react-redux';
import User from './User';

class UserList extends React.Component {

    render() {
        const { userIds } = this.props;
        return (
            <div>
                <ul>
                    {
                        userIds.map((userId) => (
                            <li key={userId}>
                                <User id={userId} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        userIds: Object.keys(users)
            .sort((a, b) => (users[b].timestamp - users[a].timestamp))
    };
}

export default connect(mapStateToProps)(UserList);
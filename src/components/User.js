import React from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class User extends React.Component {

    handleOnClick(id) {
        const { dispatch } = this.props;
        dispatch(setAuthedUser(id))
    }

    render() {
        const { user } = this.props;
        return (
            <div>
                <img src={user.avatarURL}
                    alt={`Avatart of ${user.name}`}
                    className="avatar" />
                <p>{user.name}</p>
                <button className="btn" onClick={() => (this.handleOnClick(user.id))}>Log in</button>
            </div>
        )
    }
}

function mapStateToProps({ users }, { id }) {
    const user = users[id];
    return {
        user
    };
}

export default connect(mapStateToProps)(User);
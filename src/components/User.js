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
                <p>{user.name}</p>
                <p onClick={() => (this.handleOnClick(user.id))}>SIGN IN</p>
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
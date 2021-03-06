import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class Nav extends Component {

    handleOnClick = () => {
        const { dispatch } = this.props;
        dispatch(setAuthedUser(null))
    }

    render() {
        const { user } = this.props;
        return (
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/add" activeClassName="active">New Question</NavLink>
                    </li>
                    <li>
                        <NavLink to="/leaderboard" activeClassName="active">Leader Board</NavLink>
                    </li>
                    {
                        user && (
                            <>
                                <li className="spacer">Welcome {user.name}</li>
                                <li className="log-out" onClick={this.handleOnClick}>Log out</li>
                            </>
                        )
                    }
                </ul>
            </nav>
        );
    }
}

function mapStateToProps({ authedUser, users }) {
    const user = authedUser ? users[authedUser] : null;
    return {
        user
    };
}

export default connect(mapStateToProps)(Nav)
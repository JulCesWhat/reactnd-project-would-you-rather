import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Nav from './Nav';
import UserList from './UserList';
import Dashboard from './Dashboard';
import NewQuestion from './NewQuestion';
import QuestionPage from './QuestionPage';
import Leaderboard from './Leaderboard';
import LoadingBar from 'react-redux-loading';

class App extends React.Component {

	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

	render() {
		return (
			<Router>
				<>
					<LoadingBar />
					<div className="container">
						<Nav />
						{
							this.props.authedUser ?
								(
									<>
										<Route path="/" exact component={Dashboard} />
										<Route path="/add" exact component={NewQuestion} />
										<Route path="/questions/:id" exact component={QuestionPage} />
										<Route path="/leaderboard" exact component={Leaderboard} />
									</>
								) : (
									<Route path="/" component={UserList} />
								)
						}
					</div>
				</>
			</Router>
		);
	}
}

function mapStateToProps({ authedUser }) {
	return {
		authedUser
	};
}

export default connect(mapStateToProps)(App);

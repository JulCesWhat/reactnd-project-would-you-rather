import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Nav from './Nav';
import UserList from './UserList';
import Dashboard from './Dashboard';
import NewQuestion from './NewQuestion';
import QuestionPage from './QuestionPage';

class App extends React.Component {

	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

	render() {
		return (
			<Router>
				<Nav />
				{
					this.props.authedUser ?
						(
							<>
								<Route path="/" exact component={Dashboard} />
								<Route path="/add" exact component={NewQuestion} />
								<Route path="/questions/:id" exact component={QuestionPage} />
							</>
						)
						: (
							<Route path="/" component={UserList} />
						)
				}
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

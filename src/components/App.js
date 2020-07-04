import React from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

class App extends React.Component {

	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

	render() {
		return (
			<div className="App">
			<h1>Starting Project</h1>
		</div>
		);
	}
}

function mapStateToProps({ authedUser }) {
	return {
		loading: authedUser === null
	};
}

export default connect(mapStateToProps)(App);

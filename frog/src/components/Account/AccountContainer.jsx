
import React from 'react';
import { connect } from 'react-redux';
import Account from './Account';
import { withRouter } from 'react-router';
import { getAccount, getStatus, updateStatus } from '../../Redux/accountPageReducer';
import { compose } from 'redux';

class AccountContainer extends React.Component {

	componentDidMount = () => {
		let userId = this.props.match.params.userId
		this.props.getAccount(userId)
		this.props.getStatus(userId)
	}


	render () {
		return (
			<Account {...this.props} status={this.props.status} updateStatus={this.props.updateStatus}/>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		account: state.accountPage.account,
		status: state.accountPage.status
	}
}

export default compose(
	connect (mapStateToProps, {getAccount, getStatus, updateStatus}),
	withRouter
) (AccountContainer)
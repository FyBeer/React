
import React from 'react';
import { connect } from 'react-redux';
import Account from './Account';
import { withRouter } from 'react-router';
import { getAccount } from '../../Redux/accountPageReduser';
import { compose } from 'redux';

class AccountContainer extends React.Component {

	componentDidMount = () => {
		let userId = this.props.match.params.userId
		this.props.getAccount(userId)
	}


	render () {
		return (
			<Account {...this.props} />
		)
	}
}

let mapStateToProps = (state) => {
	return {
		account: state.accountPage.account
	}
}

export default compose(
	connect (mapStateToProps, {getAccount}),
	withRouter
) (AccountContainer)
import React from 'react';
import { connect } from 'react-redux';
import Account from './Account';
import { withRouter } from 'react-router';
import { getAccount } from '../../Redux/accountPageReduser';

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

let WithDataUrlContainerComponent = withRouter(AccountContainer)


export default connect (mapStateToProps, {getAccount}) (WithDataUrlContainerComponent)
import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Account from './Account';
import {setUserAccount} from '../../Redux/accountPageReduser'
import { withRouter } from 'react-router';

class AccountContainer extends React.Component {

	componentDidMount = () => {
		let userId = this.props.match.params.userId
		debugger
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
		.then(response => {
			this.props.setUserAccount(response.data)
		})
	}

	render () {
		return (
			<Account {...this.props} profile={this.profile} />
		)
	}
}

let mapStateToProps = (state) => {
	return {
		account: state.accountPage.account
	}
}

let WithDataUrlContainerComponent = withRouter(AccountContainer)


export default connect (mapStateToProps, {setUserAccount}) (WithDataUrlContainerComponent)
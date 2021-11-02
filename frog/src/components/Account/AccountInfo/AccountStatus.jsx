import React from "react"


class AccountStatus extends React.Component {

	state = {
		editMode: false,
		status: this.props.status
	}
	activeEditMode = () => {
		this.setState({
			editMode: true
		})
	}

	disableEditMode = () => {
		this.setState({
			editMode: false
		})
		this.props.updateStatus(this.state.status)
	}

	

	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value
		})
		
	}

	componentDidUpdate (prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			})
		}
	}

	render() {
		return (
			<>
				{!this.state.editMode &&
					<div>
						<span onClick={this.activeEditMode} >{this.props.status || 'Enter new status'}</span>
					</div>
				}
				{this.state.editMode &&
					<div>
						<input onChange={this.onStatusChange} autoFocus={true} onBlur={this.disableEditMode} value={this.state.status} type="text" />
					</div>
				}
				
				
			</>
		)
	}
	
}

export default AccountStatus
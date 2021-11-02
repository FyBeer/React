import React from "react"


class AccountStatus extends React.Component {

	state = {
		editMode: false
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
	}

	render() {
		return (
			<>
				{!this.state.editMode &&
					<div>
						<span onClick={this.activeEditMode} >Status</span>
					</div>
				}
				{this.state.editMode &&
					<div>
						<input autoFocus={true} onBlur={this.disableEditMode} type="text" />
					</div>
				}
				
				
			</>
		)
	}
	
}

export default AccountStatus
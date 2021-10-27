import Side_bar from "./Side_bar"

let SidebarContainer = (props) => {
	debugger

	let state = props.store.getState()




	return <Side_bar frends={state.sidebar.frends}/>
}

export default SidebarContainer
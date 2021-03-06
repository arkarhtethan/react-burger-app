import React, {Component} from "react";
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import classes from './Layout.module.css'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
	state = {
		showSideDrawer:false
	};

	sideDrawerCloseHandler = () => {
		this.setState({showSideDrawer:false})
	}

	sideDrawerToggleHandler = () => {
		this.setState((prev)=>{
			return {showSideDrawer:!this.state.showSideDrawer}})
	}

	render() {
		return (
		<Aux>
			<Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
			<SideDrawer closed={this.sideDrawerCloseHandler} open={this.state.showSideDrawer} />
			<main className={classes.Content}>
				{this.props.children}
			</main>
		</Aux>
		);
	}
}

export default Layout;
import React, {Component} from 'react';

import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer} 
        });
    }

    render () {
        return (
            <Aux>
                <Toolbar open={this.sideDrawerHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerHandler}/>
                <main className={classes.Content}> 
                    { this.props.children }
                </main>
            </Aux>
        )
    }
}

export default Layout;
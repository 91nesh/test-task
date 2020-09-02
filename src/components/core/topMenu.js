import React, { Component } from 'react';
import { withRouter } from "react-router";

import { Menu } from 'semantic-ui-react';

class TopMenu extends Component {
    state = {
        activeItem: 'home'
    }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
        this.props.history.push(`/${name}`)
    }

    render() {
        const { activeItem } = this.state;

        return (
            <Menu tabular>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='friends'
                    active={activeItem === 'friends'}
                    onClick={this.handleItemClick}
                />
            </Menu>
        )
    }
}

export default withRouter(TopMenu);
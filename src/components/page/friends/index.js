import React, { Component } from 'react'
import { connect } from "react-redux";
import UserModal from "../../core/UserModal";
import { Segment } from 'semantic-ui-react';

import * as actions from '../../../actions';
import "./friends.scss";

class Friends extends Component {
    state = {
        open: false
    }

    componentDidMount() {
        this.props.loadFriendsData();
    }

    render() {
        const { friendsData } = this.props;

        return (
            <Segment>
                {friendsData?.map((data, index) => {
                    return (<div className="card-person" key={index}>
                        <UserModal image={data.image} name={data.name} age={data.age} dob={data.dateOfBirth} />
                    </div>)
                })}
            </Segment>
        )
    }
}

function mapStateToProps(state) {
    return {
        friendsData: state.friends.friendsData,
    }
}

export default connect(mapStateToProps, actions)(Friends);

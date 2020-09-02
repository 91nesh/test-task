import React, { Component } from 'react'
import { connect } from "react-redux";
import ArticleCard from "../../core/ArticleCard";
import { Segment } from 'semantic-ui-react';

import * as actions from '../../../actions';
import "./home.scss"
class Home extends Component {

    componentDidMount() {
        this.props.loadHomeData();
    }

    render() {
        const { homeItems } = this.props;

        return (
            <Segment>
                {homeItems?.map((data, index) => {
                    return (<div className="card-wrap" key={index} >
                        <ArticleCard image={data.image} description={data.description} author={data.author} />
                    </div>)
                })}
            </Segment>
        )
    }
}

function mapStateToProps(state) {
    return {
        homeItems: state.home.homeItems,
    }
}

export default connect(mapStateToProps, actions)(Home);
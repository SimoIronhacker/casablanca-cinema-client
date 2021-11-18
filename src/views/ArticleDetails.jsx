import React, { Component } from "react";
import APIHandler from "../api/handler";
import { Link } from "react-router-dom";
import axios from "axios";

export default class ArticleDetails extends Component {
  state = {
    articledetails: null,
  };

  fetchArticleDetails = async () => {
    const currentArticleId = this.props.match.params.id;

    const res = await APIHandler.get("/article/" + currentArticleId);

    this.setState({
      articledetails: res.data,
    });

  };

  componentDidMount() {
    this.fetchArticleDetails();
  }

  render() {
    const { articledetails } = this.state;
    console.log("in render");
    console.log(articledetails);
    return (
      <div>
        <p>Article for you</p>
        <h1 className="ArticleDetails">{articledetails?.title}</h1>
      </div>
    );
  }
}

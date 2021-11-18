import React, { Component } from "react";
import APIHandler from "../api/handler";

// const choices = ["music", "movies", "culture"]
// choices.includes("genre")

// let toto = "hello"
// console.log(toto)

export default class FormCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "article",
      category: null,
      categories: ["actor", "music", "movies", "culture"],
      description: "post",
      images: React.createRef(),
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state);
    const { title, category, description } = this.state;

    if (category === null) return alert("missing category");

    const file = this.state.images.current.files[0];

    const uploadData = new FormData();

    uploadData.append("title", title);
    uploadData.append("category", category);
    uploadData.append("description", description);
    uploadData.append("images", file);

    try {
      await APIHandler.post("/article", uploadData);
      this.props.history.push("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  handleCategoryChange = (evt) => {
    console.log("what is it ???");
    console.log(evt);
    this.setState({
      category: evt.target.value,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    console.log(this.props)
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>create a new post</h1>
        <input
          name="title"
          type="text"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <select
          title="select the category"
          name="category"
          id="title"
          onChange={this.handleCategoryChange}
        >
          <option value="-1" selected disabled>
            please choose cat
          </option>
          {this.state.categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <textarea
          name="description"
          type="text"
          value={this.state.description}
          onChange={this.handleChange}
        />

        <input ref={this.state.images} name="images" type="file" />
        <button>Submit</button>
      </form>
    );
  }
}

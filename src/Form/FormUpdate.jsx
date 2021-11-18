import React, { Component } from "react";
import APIHandler from "../api/handler";

export default class FormUpdate extends Component {
  state = {
    title: "",
    category: "",
    categories: ["actor", "music", "movies", "culture"],
    description: "",
    images: "",
    inputFile: React.createRef()
  };

  componentDidMount() {
    this.fetcharticle();
  }

  fetcharticle = () => {
    console.log();
    
    APIHandler.get("/article/" + this.props.match.params.id).then((res) => {
      const { title, category, categories, description, images } = res.data;
      this.setState({
        title,
        category,
        categories,
        description,
        images,
      });
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state);
    const { title, category, description } = this.state;

    if (category === null) return alert("missing category");

    const file = this.state.images;

    const uploadData = new FormData();

    uploadData.append("title", title);
    uploadData.append("category", category);
    uploadData.append("description", description);
    uploadData.append("images", file);

    try {
      await APIHandler.post("/article", uploadData);
      this.props.article();
    } catch (err) {
      console.error(err);
    }
    // e.preventDefault();
    // try {
    //   await APIHandler.patch(("/article", +this.props.id), this.state);
    //   this.props.handleView(null, "create");
    // } catch (err) {
    //   console.error(err);
    // }
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
   console.log(this.state)
      return ( 
      <form onSubmit={this.handleSubmit}>
        <h1>update a post</h1>
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
            please add cat
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

        <input ref={this.state.inputFile} name="images" type="file" />
        <button>Submit</button>
      </form>
    );
  }
}

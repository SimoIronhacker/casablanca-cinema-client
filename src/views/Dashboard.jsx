
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import APIHandler from "./../api/handler";



export default class Dashboard extends Component  {

   state = {
      article: [],
   };

   fetchArticle = async () => {
       const articleId = this.props.match.params.id;

       const res = await APIHandler.get("/article")

       this.setState({
         article: res.data,
       });
       };


    componentDidMount() {
        this.fetchArticle()
    }



    render() {
         const { article } = this.state;

        return (
            <div>
                <h1 className="articleDasboard">(ArticleDasboard)</h1>
                <ul className="articles">
                    {article.map((article, i) => (
                        <li className="item" key={i}>
                            <span>{article.title}</span>
                            <Link to={{
                                pathname: "/dashboard/update-article/"+ article._id,
                                id: article._id
                                }}>
                           <button> update new article </button>
                            </Link>
                         </li>
                    ))}

                </ul>
                
            </div>
            // lister tous articles
            // ajouter un <Link > to "/dashboard/update-article/id-de-l-article"
        )
    
    
    }

   }
           
       












   
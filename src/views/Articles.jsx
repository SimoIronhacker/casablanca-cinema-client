import React, { Component } from "react";
import APIHandler from "../api/handler";
import { Link } from "react-router-dom";
import axios from "axios";



export default class Articles extends Component {
  
  state = {
    articles: [],
  };

  fetchArticles = async () => {
    // await APIHandler.get("/article");
    // si category est undefined => affiche "y'a pas de cat" dans la console
    // sinon affiche "j'ai une cat" dans la console
    const currentCategory = this.props.match.params.category; // le segment de URL

    let res;

    if (currentCategory === undefined) {
      console.log("ya pas de cat");
      res = await APIHandler.get("/article");
    } else {
      console.log("ya une cat");
      res = await APIHandler.get("/article", {
        params: {
          category: currentCategory, 
        }
      });
    }
      this.setState({
        articles: res.data
      })

    // tu veux setState => articles pour que le component re-render > ensuite tu pourras map sur les articles et le afficher
    console.log(res.data);

    // (+ this.props !== this.props.match.params.category)
    // await APIHandler
    //   .get("http://localhost:4000/category")
    //   .then(({ data }) => {
    //     this.setState({
    //       articles: data,
    //     });
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };
  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.fetchArticles()
    }
  }


  render() {
    //   if(this.state.articles)
    //   return <div>categories</div>
    const { articles } = this.state;

    console.log("Category: ", this.props.match.params.category);
    return (
        <div>
          {!articles}? <p>If there is no article we write one for you</p>
          <h1 className="article">(Articles)</h1>
          <ul className="articles">
            {articles.map((article, i) => (
                // <>
                // <pre>{JSON.stringify(article, null ,2)}</pre>
              <li className="item" key={i}>
                <span>{article.title}</span>

                <Link to={"/article/details/"+article._id}>
                  articles link
                </Link>
              </li>
            //   </>
            ))}
          </ul>
        </div>
    );
  }
}



// ta nouvelle mission
//créer une route capable de gérer tous les détails d'articles
// c'est à dire => /article/id-de-l-article ... ou id-de-l-arrticle représente n'importe quel id
// cette route mène au component ArticleDetails


// ta mission
// une fois le component mounted
// utiliser axios (apiHandler (check le ode du cours))
//pour récupérer dans le back
// si category est undefined => tous les articles
// sinon les articles de la catégory cibléee
// attention tu n'as pas besoin de 55 routes différentes
// 2 GET suffisent
// then ... quand le backzend répond => afficher la liste des articles


// article.title.category.description.date._id

// {article : {
//     title: {
//         category: {
//             description : {
//                 date : {
//                     _id
//                 }
//             }
//         }
//     }
// }  }
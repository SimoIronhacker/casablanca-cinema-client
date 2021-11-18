import React from "react";

export default function List ({ articles, handleView, handleDelete }) {
    return (
        <div className="article-list-wrap">
        <h1>All articles</h1>
        <ul className="list">
            {articles} 
            <p>All Articles Are Here</p>
            <h1 className="Articles">{articles?.title}</h1>

            <div className="buttons">
                <button onClick={() => handleView(article._id, "details")}>
                    details
                </button>
                <button onClick={() => handleView(article._id, "update")}>
                    update
                </button>
                <button onClick={() => handleDelete(article._id)}>delete</button>
            </div>








        </ul>
    </div>
    );
    
}
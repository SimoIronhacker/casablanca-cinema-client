import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import Dashboard from "./Dashboard";
import FormCreate from "../Form/FormCreate";
import FormUpdate from "../Form/FormUpdate";
import Articles from "./Articles";
import Form from "./Form";
import NotFound from "./NotFound";
import ArticleDetails from "./ArticleDetails";



import NavMain from "./../NavBar/NavMain";
import Cards from "../components/Cards";
import Hero from "../NavBar/Hero";

export default function App() {
  return (
    <div className="app">
      <NavMain />

      {/* <div>
       
      </div> */}
      {/* <div>
        <Cards></Cards>
      </div> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/article" component={Articles} />
        <Route path="/article/:category(movies|music|actor|culture)" component={Articles} />
        <Route path="/article/details/:id" component={ArticleDetails} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/dashboard/create-article" component={FormCreate} />
        <Route patch="/dashboard/update-article/:id" component={FormUpdate} />

        <Route path="/contact-us" component={Form} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}


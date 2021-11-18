import React from "react";
import Casa from "../assets/img/Casa.png";
import "../styles/image.css";
import Cards from "../components/Cards";
import Hero from "../NavBar/Hero";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Cards></Cards>
      <div className="home page">
        <img className="home-cover" src={Casa} alt="Casablanca" />
        <h1 className="page-title">CasablancaStory</h1>
      </div>
    </>
  );
}

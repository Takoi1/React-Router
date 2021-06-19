import "./App.css";
import MovieList from "./components/MovieList";
import MovieFilter from "./components/MovieFilter";
import React, { useState, useEffect } from "react";
import AddMovie from "./components/AddMovie" ;
import ReactStars from "react-rating-stars-component";
import Trail from "./components/Trail"
import {BrowserRouter as Router, Switch,Route,Link,} from "react-router-dom";

function App() {
  const moviesData = [
    {
      id: Math.floor(Math.random()*1000),
      image:
      "social.jpeg",
    rating: 4,
    name: "the social dilemma",
    date: "2020",
    description:
      "The Social Dilemma focuses on how big social media companies manipulate users by using algorithms that encourage addiction to their platforms. It also shows, fairly accurately, how platforms harvest personal data to target users with ads – and have so far gone largely unregulated",     
      movieTrailer: "https://www.youtube.com/embed/uaaC57tcci0",
    },

    {
      id: Math.floor(Math.random()*1000),
      image: "tri.jpg",
      rating: 2,
      name: "TRI",
      date: "2016",
      description:
        "TRI is an inspiring, emotionally-charged drama about Natalie, a medical technician with a history of not finishing things, who is inspired by a cancer patient to sign up for her first Triathlon.",
        movieTrailer: "https://www.youtube.com/embed/hpTVN_hMTM8"
      },
    {
      id: Math.floor(Math.random()*1000),
      image: "wild.jpg",
      rating: 3,
      name: "Into the wild",
      date: "2007",
      description:
      "It is an adaptation of the 1996 non-fiction book of the same name written by Jon Krakauer and tells the story of Christopher McCandless (Alexander Supertramp), a man who hiked across North America into the Alaskan wilderness in the early 1990s",
      movieTrailer:"https://www.youtube.com/embed/XZG1FzyB8DI"
      },
    {
      id: Math.floor(Math.random()*1000),
      image: "pursuithappyness.jpg",
      rating: 4,
      name: "The pursuit of happyness",
      date: "2006",
      description:
      "The Pursuit of Happyness is a 2006 American biographical drama film directed by Gabriele..",
      movieTrailer:"https://www.youtube.com/embed/DMOBlEcRuw8"
      },
   
  ];
  const [search, setSearch] = useState("");
  const [videos, setVideos] = useState(moviesData);
  const [stars, setStars] = useState(0);
  const [trail, setTrail] = useState(videos);

 const handelTrailer = elem =>{
    setTrail(elem)
 };

  const handelSearch = (x) => {
    setSearch(x);
  };
  const handelStars = (el) => {
    setStars(el);
  };

  const addMovie = (add) => {
    setVideos([...videos, add]);
  };

  return (
    
    <Router>
      <Switch>
        
          <Route exact path='/'>
              <div className="App">
              <h1>Movie App</h1> 

                <MovieFilter handelSearch={handelSearch} />
                <div
                  className="rating"
                  style={{
                    marginLeft: "35%",
                    marginRight: "40%",
                    // padding:"5%",
                    display: "flex",
                    color: "red",
                  }}
                >
                  Rating 
                  <ReactStars
                    count={5}
                    name="rating"
                    size={24}
                    position="center"
                    activeColor="#ffd700"
                    onChange={(rat) => {
                      handelStars(rat);
                    }}
                  />
                </div>
                <MovieList
                  moviesData={videos.filter(
                    (ele) =>
                      ele.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) &&
                      ele.rating >= stars
                  )}
                />
                <AddMovie addMovie={addMovie} />
            </div>
          </Route>
    <Route path = {`/:name`} render={(props) => <Trail moviesData={moviesData}
    {...props} />}
     />
    </Switch>
    </Router>
  );
}

export default App;
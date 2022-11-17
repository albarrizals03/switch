import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profil from "./Page/Profil";
import Home from "./Page/Home";
import Album from"./Page/Album";
import Kontak from "./Page/Kontak";


export class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          {/* {AppRoutes.map(route => ( */}
          <Route element={<Profil ></Profil>} path="/Profil"></Route>
          <Route element={<Home ></Home>} path="/"></Route>
          <Route element={<Album ></Album>} path="/Album"></Route>
          <Route element={<Kontak ></Kontak>} path="/Kontak"></Route>
       
          {/* ))} */}
        </Routes>
      </Router>
    );
  }
}

export default App;
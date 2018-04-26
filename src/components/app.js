import React, { Component } from "react";
import BookList from "../containers/book-list";
import BookDetail from "../containers/book-detail"; 
import img from '../resources/diagram.png';

export default class App extends Component {

  render() {
    return (
      
      <div>
        <BookList />
        <BookDetail />
        <img src={img} height="500" width="1200"/>
      </div>
    );
  }
}

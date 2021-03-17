import React, { Component } from "react";

// compoonents
import Photo from "./Photo";
import NotFound from "./NotFound";

class PhotoContainer extends Component {
  state = {};

  render() {
    return (
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
          <Photo />

          <NotFound />
        </ul>
      </div>
    );
  }
}

export default PhotoContainer;

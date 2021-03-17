import React, { Component } from "react";

// components
import Photo from "./Photo";
import NotFound from "./NotFound";

class PhotoContainer extends Component {
  state = {};

  render() {
    const results = this.props.photos.length > 0 ? true : false;
    return (
      <div className="photo-container">
        {results ? <h2>Results</h2> : null}
        <ul>
          {results ? (
            this.props.photos.map((photo) => (
              <Photo imgUrl={photo.url} key={photo.id} />
            ))
          ) : (
            <NotFound />
          )}
        </ul>
      </div>
    );
  }
}

export default PhotoContainer;

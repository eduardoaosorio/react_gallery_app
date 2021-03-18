import React, { Component } from "react";

// components
import Photo from "./Photo";
import NotFound from "./NotFound";

class PhotoContainer extends Component {
  // if the path is "/", there will be no params and searchQuery will be set to undefined
  // when searchQuery is undefined, performSearch will use its default param: "glaciar"
  // if path is "/search/:searchQuery" searchQuery will have a value which will be passed to performSearch
  componentDidMount() {
    const { searchQuery = undefined } = this.props.match.params;
    this.props.performSearch(searchQuery);
  }

  // perfomSearch will be called with the new searchQuery value if searchQuery changes
  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.searchQuery !== this.props.match.params.searchQuery
    ) {
      this.props.performSearch(this.props.match.params.searchQuery);
    }
  }

  render() {
    const { loading } = this.props;
    // conditional rendering if still loading
    if (loading) {
      return <p>Loading...</p>;
    } else {
      //conditional rendering depending if results are found for a query or not
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
}

export default PhotoContainer;

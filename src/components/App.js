import React, { Component } from "react";

// api key
import apiKey from "../config";

// components
import PhotoContainer from "./PhotoContainer";
import SearchForm from "./SearchForm";
import Nav from "./Nav";

class App extends Component {
  state = {
    photos: [],
    loading: true,
  };

  componentDidMount() {
    const query = "sunset";
    const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;

    fetch(apiUrl)
      .then((res) => {
        if (res.ok) return Promise.resolve(res.json());
        else return Promise.reject(new Error(res.statusText));
      })
      .then((data) => {
        const photosData = data.photos.photo;
        const photoUrls = photosData.map(
          (photoObj) =>
            `https://live.staticflickr.com/${photoObj.server}/${photoObj.id}_${photoObj.secret}_n.jpg`
        );
        this.setState({ photos: photoUrls, loading: false });
      })
      .catch((err) => console.log("Something went wrong:\n", err));
  }

  performSearch = () => {};

  render() {
    return (
      <div className="container">
        <SearchForm />

        <Nav />

        <PhotoContainer />
      </div>
    );
  }
}

export default App;

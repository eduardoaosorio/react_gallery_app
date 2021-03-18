import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// api key
import apiKey from "../config";

// components
import PhotoContainer from "./PhotoContainer";
import SearchForm from "./SearchForm";
import Nav from "./Nav";
import Page404 from "./Page404";

class App extends Component {
  state = {
    photos: [],
    loading: true,
  };

  // function to fetch data from flickr api, based on a query
  // query's default value is set to show picture of "glaciar", like when hitting the "/" path
  performSearch = (query = "glaciar") => {
    if (!this.state.loading) this.setState({ loading: true });

    const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;

    fetch(apiUrl)
      .then((res) => {
        if (res.ok) return Promise.resolve(res.json());
        else return Promise.reject(new Error(res.statusText));
      })
      .then((data) => {
        const photosData = data.photos.photo;
        const photos = photosData.map((photoObj) => ({
          id: photoObj.id,
          url: `https://live.staticflickr.com/${photoObj.server}/${photoObj.id}_${photoObj.secret}_n.jpg`,
        }));
        this.setState({ photos, loading: false });
      })
      .catch((err) => console.log("Something went wrong:\n", err));
  };

  render() {
    const { photos, loading } = this.state;
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm />
          <Nav />
          <Switch>
            <Route
              exact
              path="/"
              render={({ match }) => (
                <PhotoContainer
                  // match object contains params which will be used in <PhotoContainer />
                  match={match}
                  loading={loading}
                  photos={photos}
                  performSearch={this.performSearch}
                />
              )}
            />
            <Route
              path="/search/:searchQuery"
              render={({ match }) => (
                <PhotoContainer
                  match={match}
                  loading={loading}
                  photos={photos}
                  performSearch={this.performSearch}
                />
              )}
            />
            <Route component={Page404} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

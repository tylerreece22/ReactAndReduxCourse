import React from "react";
import unsplash from './api/unsplash';
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
    state = {
      images: []
    };

    onSearchSubmit = async term => {
        let response = await unsplash.get('/search/photos', {
            params: {query: term},
        });

        this.setState({images: response.data.results})
    };

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    };
};

//Access Key
//451d7628c20e8f0b1b92f9450bc0e15d1a6be3a22dec857134ec779f0f2ec094

//Secret Key
//0e7d8214f956451cf0e0a9fd3b2544e398a16c723dce0a1a03544dd34f14e7fc

export default App;
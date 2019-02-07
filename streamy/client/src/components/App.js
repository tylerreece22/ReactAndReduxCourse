import React, {Component} from 'react';
import Header from "./Header";
import GoogleAuth from "./GoogleAuth";
import {BrowserRouter} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Header/>
                    <GoogleAuth/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

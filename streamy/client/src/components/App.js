import React, {Component} from 'react';
import Header from "./Header";
import {Route, Router, Switch} from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import history from '../history';

class App extends Component {
    render() {
        return (
            <div className="ui container">
                <Router history={history}>
                    {/* We're wrapping all the children in a div, because `Router` expects exactly one child */}
                    <div>
                        <Header />
                        {/* Switch is a helper from react-router-dom that makes sure that only the first matching route gets rendered, rather than all matching routes. It helps overcome issues like when for a path like `/foo/5` - `/food/bar` is matched as well, rather than just the expected `/foo/:variable` */}
                        <Switch>
                            <Route path="/" exact component={StreamList} />
                            <Route path="/streams/new" component={StreamCreate} />
                            <Route path="/streams/delete/:id" component={StreamDelete} />
                            <Route path="/streams/edit/:id" component={StreamEdit} />
                            <Route path="/streams/:id" component={StreamShow} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;

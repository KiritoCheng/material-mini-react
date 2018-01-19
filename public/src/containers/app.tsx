import * as React from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import { BarExample } from '../components/example/bar.example'

class App extends React.Component<any, any>{
    constructor(props: any, context: any) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route path='/index' component={BarExample} />
                        <Route path='/bar' component={BarExample} />
                    </div>
                </Router>
            </div>
        )
    }
}

export default connect()(App)
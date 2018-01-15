import * as React from 'react';
import { connect } from 'react-redux';
import {
    Route,
} from 'react-router-dom'

class App extends React.Component<any, any>{
    constructor(props: any, context: any) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                App
                {/* <Route path={this.props.path} component={this.props.component} /> */}
            </div>
        )
    }
}
// const mapToState = () => { }
// const mapToProps = () => { }
export default connect()(App)
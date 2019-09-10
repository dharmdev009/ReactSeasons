import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay';
import Spinner from './Spinner';


// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         position=>console.log(position),
//         err =>  console.log(err)
//     );
//     return (
//         <div>Latitude : </div>
//     );
// };

class App extends React.Component {

    state = { lat: null, errorMessage: "" };

    componentDidMount() {
        console.log("Component did mount");
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    componentDidUpdate() {
        console.log("Ccomponent did update");
    }

    componentWillUnmount() {
        console.log("Comopnent will unmount");
    }

    renderContent = () => {
        if (this.state.lat && !this.state.errorMessage) {           
            return <SeasonsDisplay lat={this.state.lat} />
        }

        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error : {this.state.errorMessage}</div>
        }

        return <Spinner message="Please Accept Location Request!"/>
    }

    render() {

        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }

    

    
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);
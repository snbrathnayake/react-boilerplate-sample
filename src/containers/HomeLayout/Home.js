import React from 'react';
import './styles.scss';

class Home extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            page: {}
        }
    }

    componentDidMount() {
        console.log("Home Layout...")
    }


    render() {
        return (<div>Welcome to Home</div>);
    };
};


export default Home;
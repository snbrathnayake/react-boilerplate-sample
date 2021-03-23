import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';
import { fetchComments } from "redux/actions/commentAction";

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            page: {}
        }
    }

    componentDidMount() { 
        this.loadAll()
    }

    loadAll = () => {
        this.props.loadComment();
    }

    render() {
        const { data } = this.props;

        return (
            <div>
                <h3>Welcome to Home</h3>
                <button onClick={this.loadAll}>LOAD</button>
                <div className="result-box">
                    {
                        data.comments.map(((data, idx) => ( 
                        <div className="row">
                            <span>{data.id}</span> - {data.name}
                            <hr/>
                        </div> 
                        )))
                    }
                </div>
            </div>
        );
    };
};

function mapStateToProps(state) {

    return {
        data: state.comments,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadComment: () => dispatch(fetchComments())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles.scss';
import { ROUTES } from 'constants/route-constants';
import { fetchComments } from "redux/actions/commentAction";

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            page: {}
        }
    }

    componentDidMount() {
        // throw new Error("Hello Error");
        this.loadAll();
    }

    loadAll = () => {
        this.props.loadComment();
    }

    render() {
        const { data } = this.props;
        return (
            <div>
                <Link to={ROUTES.DASHBOADRD}>Admin</Link>
                <h3>Welcome to Home</h3>
                <button onClick={this.loadAll}>LOAD</button>
                <div className="result-box">
                    {
                        data.comments.map(((data, idx) => (
                            <div className="row" key={idx}>
                                <span >{data.id}</span> - {data.name}
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
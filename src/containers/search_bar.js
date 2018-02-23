import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {term: ''};
        this.OnInputChange = this.OnInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    OnInputChange(e) {
        this.setState ({
            term: e.target.value
        });
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.fetchWeather(this.state.term)
        this.setState({
            term: ""
        })
    }
    render () {
        return (
            <form onSubmit={this.onFormSubmit} className ="input-group">
                <input 
                    placeholder="Get a five-day forecase in your cities" 
                    className="form-control"
                    value={this.state.term}
                    onChange={this.OnInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);
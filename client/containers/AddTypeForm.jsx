import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addRequest} from '../actions/index';
import {bindActionCreators} from 'redux';

class AddTypeForm extends Component {
    constructor(props) {
        super(props);

        this.clientRef = React.createRef();
        this.networkRef = React.createRef();
        this.serviceRef = React.createRef();
        this.filtersRef = React.createRef();
        this.pagingRef = React.createRef();
        this.intervalRef = React.createRef();
    }

    handleClick(e) {
        e.preventDefault();
        
        const request = {
            client: this.clientRef.current.value,
            network: this.networkRef.current.checked ? "one" : "two",
            service: this.serviceRef.current.value,
            filters: this.filtersRef.current.value,
            paging: this.pagingRef.current.checked ? "Y" : "N",
            interval: this.intervalRef.current.value
        };
        
        this.props.addRequest(request);
    }

    render() {

        return (
            <form className="form">
                <label htmlFor="client">client: </label>
                <input type="text" id="client" ref={this.clientRef}/>
                <br />

                <label htmlFor="network">network: </label>
                <fieldset id="network">
                    <label htmlFor="one">one: </label>
                    <input type="radio" id="one" name="network" value="one" ref={this.networkRef}/>
                    <label htmlFor="two">two: </label>
                    <input type="radio" id="two" name="network" value="two"/>
                </fieldset>
                <br />

                <label htmlFor="service">service: </label>
                <select id="service" ref={this.serviceRef}>
                    <option value="a">a</option>
                    <option value="b">b</option>
                    <option value="c">c</option>
                </select>
                <br />

                <label htmlFor="filters">filters: </label>
                <input type="text" id="filters" ref={this.filtersRef}/>
                <br />
                
                <label htmlFor="hasPaging">has paging: </label>
                <input type="checkbox" id="hasPaging" ref={this.pagingRef} />
                <br />

                <label htmlFor="interval">interval: </label>
                <input type="number" id="interval" ref={this.intervalRef} />
                <br />

                <button onClick={(e) => this.handleClick(e)}>Submit</button>
            </form>
        );
    }
};
function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addRequest
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTypeForm);

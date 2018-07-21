import React, {Component} from 'react';
import {connect} from 'react-redux';
import RequestTypeRow from '../components/RequestTypeRow.jsx';
import {Link} from 'react-router-dom';

class RequestTypes extends Component {
    renderRows() {
        if(this.props.requestTypes === null) {
            return;
        }

        return this.props.requestTypes.map((type, index) => {
            return (
                <RequestTypeRow 
                    key={index}
                    index={index}
                    client={type.client}
                    network={type.network}
                    service={type.service}
                    filters={type.filters}
                    paging={type.paging}
                    interval={type.interval}
                    run={type.run}
                />
            );
        });
    }

    render() {
        return (
            <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Client</th>
                        <th>Network</th>
                        <th>Service</th>
                        <th>Filters</th>
                        <th>Paging</th>
                        <th>Intervals</th>
                        <th>Run</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
            <Link to='/add/'>Add</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        requestTypes: state.requestTypes
    };
}

export default connect(mapStateToProps)(RequestTypes);
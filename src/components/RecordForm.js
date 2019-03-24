import React, { Component } from "react";
import PropTypes from "prop-types";
import { createRecord, updateRecord } from "../service";

class RecordForm extends Component {
    static propTypes = {};
    state = {
        record: {
            date: "",
            title: "",
            amount: ""
        },
        submitStatus: false
    };
    
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    
    handleChange(event) {
        let { value, name } = event.target;
        this.setState({
            record: {
                ...this.state.record,
                ["" + name]: value
            }
        }, () => {
            let { record: { date, title, amount } } = this.state;
            this.setState({
                submitStatus: date && title && amount
            });
        });
    }
    
    submit(event) {
        event.preventDefault();
        let { record } = this.state;
        createRecord({ ...record, amount: Number.parseInt(record.amount, 10) })
            .then((response) => {
                this.props.addRecord(response.data);
                this.setState({
                    record: {
                        date: "",
                        title: "",
                        amount: ""
                    },
                    submitStatus: false
                });
            })
            .catch(({ error, hideNormalError }) => {
                hideNormalError();
                console.log(error);
            });
    }
    
    render() {
        let { record, submitStatus } = this.state;
        return (
            <form onSubmit={this.submit} className="form-inline mb-3">
                <div className="form-group mr-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Date"
                        name="date"
                        value={record.date}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group mr-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        name="title"
                        value={record.title}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group mr-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Amount"
                        name="amount"
                        value={record.amount}
                        onChange={this.handleChange}
                    />
                </div>
                <button className="btn btn-primary" disabled={!submitStatus}>Create Record</button>
            </form>
        );
    }
}

export default RecordForm;
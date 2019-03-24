import React, { Component } from "react";
import PropTypes from "prop-types";
import { updateRecord, deleteRecord } from "../service";

class Record extends Component {
    static propTypes = {
        date: PropTypes.string,
        title: PropTypes.string,
        amount: PropTypes.number
    };
    state = {
        isEdit: false,
        record: this.props.data
    };
    
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    
    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            record: nextProps.data
        });
    }
    
    handleChange(event) {
        let { value, name } = event.target;
        this.setState({
            record: {
                ...this.state.record,
                ["" + name]: value
            }
        });
    }
    
    handleEdit() {
        if (!this.state.isEdit) {
            this.updateIsEdit();
        } else {
            updateRecord(this.state.record)
                .then((response) => {
                    this.props.update(response.data);
                    this.updateIsEdit();
                });
        }
    }
    
    updateIsEdit() {
        this.setState({
            isEdit: !this.state.isEdit
        });
    }
    
    handleDelete() {
        if (this.state.isEdit) {
            this.updateIsEdit();
        } else {
            deleteRecord(this.state.record.id)
                .then((response)=>{
                    this.props.delete(response.data.id);
                })
        }
    }
    
    render() {
        let { isEdit, record } = this.state;
        return (
            <tr>
                <td>
                    {
                        isEdit ?
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Date"
                                name="date"
                                value={record.date}
                                onChange={this.handleChange}
                            />
                            :
                            record.date
                    }
                </td>
                <td>
                    {
                        isEdit ?
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                name="title"
                                value={record.title}
                                onChange={this.handleChange}
                            />
                            :
                            record.title
                    }
                </td>
                <td>
                    {
                        isEdit ?
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Amount"
                                name="amount"
                                value={record.amount}
                                onChange={this.handleChange}
                            />
                            :
                            record.amount
                    }</td>
                <td>
                    <button
                        className="btn btn-primary mr-2"
                        onClick={this.handleEdit}
                    >
                        {isEdit ? "update" : "Edit"}
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={this.handleDelete}
                    >
                        {isEdit ? "Cancel" : "Delete"}
                    </button>
                </td>
            </tr>
        );
    }
}

export default Record;
import React, { Component } from "react";
import { getAll } from "../service";
import AmountBox from "./AmountBox";
import Record from "./Record";
import RecordForm from "./RecordForm";

// import { getJSON } from "jquery";

class Records extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            records: [],
            error: null,
            isLoading: true
        };
        
        this.addRecord = this.addRecord.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }
    
    addRecord(record) {
        this.setState({
            records: [...this.state.records, record]
        });
    }
    
    delete(recordId) {
        this.setState({
            records: this.state.records.filter((item) => {
                return item.id !== recordId;
            })
        });
    }
    
    update(record) {
        this.setState({
            records: this.state.records.map((item) => {
                if (item.id === record.id) {
                    item = record;
                }
                return item;
            })
        });
    }
    
    credits() {
        let credits = this.state.records.filter((record) => {
            return record.amount >= 0;
        });
        
        return credits.reduce((prev, curr) => {
            return prev + Number.parseInt(curr.amount, 0);
        }, 0);
    }
    
    debits() {
        let credits = this.state.records.filter((record) => {
            return record.amount < 0;
        });
        
        return credits.reduce((prev, curr) => {
            return prev + Number.parseInt(curr.amount, 0);
        }, 0);
    }
    
    balance() {
        return this.credits() + this.debits();
    }
    
    componentDidMount() {
        getAll().then((response) => {
            this.setState({
                records: response.data,
                isLoading: false,
            });
        }).catch(({ hideNormalError, error }) => {
            hideNormalError();
            this.setState({
                error,
                isLoading: false,
            });
        });
    }
    
    render() {
        let { error, isLoading, records } = this.state;
        let RecordsComponent = null;
        if (error) {
            RecordsComponent = (<div>Error: {error.message}</div>);
        } else if (isLoading) {
            RecordsComponent = (<div>loading...</div>);
        } else {
            RecordsComponent = (
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Title</th>
                            <th>Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            records.map((item) => {
                                return (
                                    <Record
                                        delete={this.delete}
                                        update={this.update}
                                        data={item}
                                        key={item.id}
                                    />
                                );
                            })
                        }
                    </tbody>
                </table>
            );
        }
        
        return (
            <div>
                <h2>Records</h2>
                <div className="row mb-3">
                    <AmountBox text="Credit" type="success" amount={this.credits()} />
                    <AmountBox text="Debit" type="danger" amount={this.debits()} />
                    <AmountBox text="Balance" type="info" amount={this.balance()} />
                </div>
                <RecordForm addRecord={this.addRecord} />
                {RecordsComponent}
            </div>
        );
    }
}

export default Records;
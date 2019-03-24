import axios from "../utils/axios";


function getAll() {
    return axios.get("/records");
}

function createRecord(record) {
    return axios.post("/records", record);
}

function updateRecord(record) {
    return axios.put(`/records/${record.id}`, record);
}

function deleteRecord(recordId) {
    return axios.delete(`/records/${recordId}`);
}

export { getAll, createRecord, updateRecord, deleteRecord };
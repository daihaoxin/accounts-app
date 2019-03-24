(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(46)},26:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),s=a.n(c),o=(a(26),a(19)),i=a(3),l=a(4),d=a(8),u=a(5),m=a(7),h=a(1),b=a(10),p=a.n(b);p.a.defaults.baseURL="https://5c93630b4dca5d0014ad8215.mockapi.io/api/v1",p.a.interceptors.response.use(function(e){return e},function(e){if(e.response)switch(e.response.status){case 400:e.message="\u8bf7\u6c42\u9519\u8bef";break;case 401:e.message="\u672a\u6388\u6743\uff0c\u8bf7\u767b\u5f55";break;case 403:e.message="\u62d2\u7edd\u8bbf\u95ee";break;case 404:e.message="\u8bf7\u6c42\u5730\u5740\u51fa\u9519: ".concat(e.response.config.url);break;case 408:e.message="\u8bf7\u6c42\u8d85\u65f6";break;case 500:e.message="\u670d\u52a1\u5668\u5185\u90e8\u9519\u8bef";break;case 501:e.message="\u670d\u52a1\u672a\u5b9e\u73b0";break;case 502:e.message="\u7f51\u5173\u9519\u8bef";break;case 503:e.message="\u670d\u52a1\u4e0d\u53ef\u7528";break;case 504:e.message="\u7f51\u5173\u8d85\u65f6";break;case 505:e.message="HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301";break;default:e.message="\u672a\u77e5\u9519\u8bef"}else e.message="\u672a\u77e5\u7f51\u7edc\u9519\u8bef\uff0c\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458";var t=!0;return setTimeout(function(){t&&alert(e.message)}),window.Promise.reject({error:e,hideNormalError:function(){t=!1}})});var f=p.a;var v=function(e){var t=e.text,a=e.type,n=e.amount;return r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header bg-".concat(a," text-white")},t),r.a.createElement("div",{className:"card-body"},n)))},E=a(6),g=a(9),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={isEdit:!1,record:a.props.data},a.handleDelete=a.handleDelete.bind(Object(h.a)(Object(h.a)(a))),a.handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a.handleEdit=a.handleEdit.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){this.setState({record:e.data})}},{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState({record:Object(g.a)({},this.state.record,Object(E.a)({},""+n,a))})}},{key:"handleEdit",value:function(){var e,t=this;this.state.isEdit?(e=this.state.record,f.put("/records/".concat(e.id),e)).then(function(e){t.props.update(e.data),t.updateIsEdit()}):this.updateIsEdit()}},{key:"updateIsEdit",value:function(){this.setState({isEdit:!this.state.isEdit})}},{key:"handleDelete",value:function(){var e,t=this;this.state.isEdit?this.updateIsEdit():(e=this.state.record.id,f.delete("/records/".concat(e))).then(function(e){t.props.delete(e.data.id)})}},{key:"render",value:function(){var e=this.state,t=e.isEdit,a=e.record;return r.a.createElement("tr",null,r.a.createElement("td",null,t?r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Date",name:"date",value:a.date,onChange:this.handleChange}):a.date),r.a.createElement("td",null,t?r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Title",name:"title",value:a.title,onChange:this.handleChange}):a.title),r.a.createElement("td",null,t?r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Amount",name:"amount",value:a.amount,onChange:this.handleChange}):a.amount),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-primary mr-2",onClick:this.handleEdit},t?"update":"Edit"),r.a.createElement("button",{className:"btn btn-danger",onClick:this.handleDelete},t?"Cancel":"Delete")))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={record:{date:"",title:"",amount:""},submitStatus:!1},a.handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a.submit=a.submit.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){var t=this,a=e.target,n=a.value,r=a.name;this.setState({record:Object(g.a)({},this.state.record,Object(E.a)({},""+r,n))},function(){var e=t.state.record,a=e.date,n=e.title,r=e.amount;t.setState({submitStatus:a&&n&&r})})}},{key:"submit",value:function(e){var t=this;e.preventDefault();var a=this.state.record;(function(e){return f.post("/records",e)})(Object(g.a)({},a,{amount:Number.parseInt(a.amount,10)})).then(function(e){t.props.addRecord(e.data),t.setState({record:{date:"",title:"",amount:""},submitStatus:!1})}).catch(function(e){var t=e.error;(0,e.hideNormalError)(),console.log(t)})}},{key:"render",value:function(){var e=this.state,t=e.record,a=e.submitStatus;return r.a.createElement("form",{onSubmit:this.submit,className:"form-inline mb-3"},r.a.createElement("div",{className:"form-group mr-2"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Date",name:"date",value:t.date,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group mr-2"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Title",name:"title",value:t.title,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group mr-2"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Amount",name:"amount",value:t.amount,onChange:this.handleChange})),r.a.createElement("button",{className:"btn btn-primary",disabled:!a},"Create Record"))}}]),t}(n.Component),k=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(d.a)(this,Object(u.a)(t).apply(this,arguments))).state={records:[],error:null,isLoading:!0},e.addRecord=e.addRecord.bind(Object(h.a)(Object(h.a)(e))),e.update=e.update.bind(Object(h.a)(Object(h.a)(e))),e.delete=e.delete.bind(Object(h.a)(Object(h.a)(e))),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"addRecord",value:function(e){this.setState({records:[].concat(Object(o.a)(this.state.records),[e])})}},{key:"delete",value:function(e){this.setState({records:this.state.records.filter(function(t){return t.id!==e})})}},{key:"update",value:function(e){this.setState({records:this.state.records.map(function(t){return t.id===e.id&&(t=e),t})})}},{key:"credits",value:function(){var e=this.state.records.filter(function(e){return e.amount>=0});return e.reduce(function(e,t){return e+Number.parseInt(t.amount,0)},0)}},{key:"debits",value:function(){return this.state.records.filter(function(e){return e.amount<0}).reduce(function(e,t){return e+Number.parseInt(t.amount,0)},0)}},{key:"balance",value:function(){return this.credits()+this.debits()}},{key:"componentDidMount",value:function(){var e=this;f.get("/records").then(function(t){e.setState({records:t.data,isLoading:!1})}).catch(function(t){var a=t.hideNormalError,n=t.error;a(),e.setState({error:n,isLoading:!1})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.isLoading,c=t.records,s=null;return s=a?r.a.createElement("div",null,"Error: ",a.message):n?r.a.createElement("div",null,"loading..."):r.a.createElement("table",{className:"table table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,c.map(function(t){return r.a.createElement(j,{delete:e.delete,update:e.update,data:t,key:t.id})}))),r.a.createElement("div",null,r.a.createElement("h2",null,"Records"),r.a.createElement("div",{className:"row mb-3"},r.a.createElement(v,{text:"Credit",type:"success",amount:this.credits()}),r.a.createElement(v,{text:"Debit",type:"danger",amount:this.debits()}),r.a.createElement(v,{text:"Balance",type:"info",amount:this.balance()})),r.a.createElement(O,{addRecord:this.addRecord}),s)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.ecf825cb.chunk.js.map
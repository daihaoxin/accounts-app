import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // console.log(response.status);
    // console.log(response.statusText);
    // console.log(response, "222");
    
    // let { code, msg } = response.data;
    // let ret = msg;
    
    // if (code === 1) {
    //     return response.data;
    // }
    //
    // this.setState({ signUpMsg: ret });
    //
    // if (code === 0) {
    //     setTimeout(() => {
    //         this.initMyInfo(ret.data);
    //     });
    // }
    return response;
}, function (error) {
    if (error.response) {
        switch (error.response.status) {
            case 400:
                error.message = "请求错误";
                break;
            case 401:
                error.message = "未授权，请登录";
                break;
            case 403:
                error.message = "拒绝访问";
                break;
            case 404:
                error.message = `请求地址出错: ${error.response.config.url}`;
                break;
            case 408:
                error.message = "请求超时";
                break;
            case 500:
                error.message = "服务器内部错误";
                break;
            case 501:
                error.message = "服务未实现";
                break;
            case 502:
                error.message = "网关错误";
                break;
            case 503:
                error.message = "服务不可用";
                break;
            case 504:
                error.message = "网关超时";
                break;
            case 505:
                error.message = "HTTP版本不受支持";
                break;
            default:
                error.message = "未知错误";
        }
    } else {
        error.message = "未知网络错误，请联系管理员";
    }
    // 对响应错误做点什么
    let isShowNormalError = true;
    const hideNormalError = function () {
        isShowNormalError = false;
    };
    
    setTimeout(() => {
        if (isShowNormalError) {
            alert(error.message);
        }
    });
    return window.Promise.reject({ error, hideNormalError }); // 在error.response上添加方法
});
export default axios;

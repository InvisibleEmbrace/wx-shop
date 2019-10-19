import {config} from "../config/config";
import {promisic} from "./util";

class Http {
    static request({url, data, callback, method = 'GET'}) {
        wx.request({
            url: `${config.apiBaseUrl}/${url}`,
            method,
            data,
            header: {
                appkey: config.appkey
            },
            success: res => {
                callback(res.data)
            }
        })
    }
}

promisic(wx.request)({
    url:'',
    data:'',

})
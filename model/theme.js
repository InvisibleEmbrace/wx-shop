import {config} from "../config/config";

class Theme {
    static getHomeLocationA(callback) {
        Http.request({
            url: '/theme/by/names',
            data: {
                names: 't-1'
            },
            callback: data => {
                callback(data)
            }
        })
    }
}
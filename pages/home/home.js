// pages/home/home.js
import {config} from "../../config/config";
import {Theme} from '../../model/theme'
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";
import { Activity } from "../../model/activity";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        themeA: null,
        bannerB: null,
        grid: [],
        activityD:null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        this.initAllData()
    },

    initAllData: async function () {
        const theme = new Theme()
        await theme.getThemes()
        const themeA = await theme.getHomeLocationA()
        const themeE = await theme.getHomeLocationE()
        const bannerB = await Banner.getHomeLocationB()
        const grid = await Category.getGridCategory()
        const activityD = await Activity.getHomeLocationD()
        let themeESpu = []
        if(themeE.online) {
            const data = await Theme.getHomeLocationESpu()
            themeESpu = data.spu_list.slice(0,8)
        }
        this.setData({
            themeA,
            bannerB,
            themeE,
            themeESpu,
            grid,
            activityD
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})

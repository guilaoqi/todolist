Page({

  /**
   * 页面的初始数据
   */
  data: {
    addcontent:"",
    list:[
      { name: '打扫卫生', completed: false },
      { name: '背单词', completed: true },
      { name: '做作业', completed: false }
    ],
    alldone:false,
    length:2
  },
  addListHandle(){
    console.log("触发了");
    if (this.data.addcontent != "") {
      this.data.list.push({
        name: this.data.addcontent,
        completed: false
      });
      this.setData({
        list: this.data.list,
        addcontent: "",
        length: this.count()
      });
    }
  },
  addToListHandle(e){
    var task = e.detail.value.replace(/(^\s*)|(\s*$)/g, "");
    this.setData({
      addcontent:task
    })
  },
  changeStatu(e){
    var index=e.currentTarget.dataset.index;
    this.data.list[index].completed = !this.data.list[index].completed;
    this.setData({
      list:this.data.list
    })
  },
  delete(e){
    var index = e.currentTarget.dataset.index;
    this.data.list.splice(index,1);
    this.setData({
      list: this.data.list,
      length: this.count()
    })
  },
  toggle(){
    var flag = this.data.alldone;
    var items = this.data.list;
      for (var i = 0; i < items.length; i++) {
        items[i].completed = !flag;
      };
      this.setData({
        list: this.data.list,
        alldone: !flag,
        length:this.count()
      });

  },
  clearComplete(){
    var myList=[];
    myList=this.data.list.filter(
      function(item){
        return !item.completed
      }
    );
    this.setData({
      list:myList
    })
  },
  count(){
    var length=0;
    var item = this.data.list;
    for (var i = 0; i < item.length; i++) {
      if(!item[i].completed){length++;}
    };
    return length;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage(
      {
        key: 'data',
        success: function (res) {
          if (res.data) {
            that.setData(res.data);
          }
        }
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
    wx.setStorageSync('data', this.data)
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
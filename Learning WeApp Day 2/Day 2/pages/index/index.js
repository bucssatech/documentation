//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    cells: [7, 8, 9, '/', 4, 5, 6, 'x', 1, 2, 3, '-', '.', 0, '+', '='],
    answer: 0
  },
  click(e) {
    console.log(e)
  }
})

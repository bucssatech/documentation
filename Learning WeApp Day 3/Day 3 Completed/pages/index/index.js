//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    cells: [7, 8, 9, '/', 4, 5, 6, 'x', 1, 2, 3, '-', '.', 0, '=', '+'],
    answer: '0',
    operator: null,
    leftVal: '0',
    rightVal: '0'
  },
  click(e) {
    let value = e.target.dataset.id
    let _this = this
    var _operator = _this.data.operator
    var _answer = _this.data.answer
    var _leftVal = _this.data.leftVal
    var _rightVal = _this.data.rightVal
    if (typeof(value) == "string") {
      if (value == '.') {
        if (_operator == null) {
          _leftVal += '.'
          _answer = _leftVal
        } else {
          _rightVal +='.'
          _answer = _rightVal
        }
      } else {
        if (_operator != null) {
          console.log(_this.data.leftVal, ' ', _this.data.operator, ' ', _this.data.rightVal)
          console.log(_leftVal, ' ', _operator, ' ', _rightVal)
          switch(_this.data.operator) {
            case 'x':
              _answer = parseFloat(_leftVal) * parseFloat(_rightVal)
              break
            case '/':
              _answer = parseFloat(_leftVal) / parseFloat(_rightVal)
              break
            case '-':
              _answer = parseFloat(_leftVal) - parseFloat(_rightVal)
              break
            case '+':
              _answer = parseFloat(_leftVal) + parseFloat(_rightVal)
              break
          }
          _answer = _answer.toString()
          _leftVal = '0'
          _rightVal = '0'
        }
        _operator = (value == '=') ? null : value
      }
      _this.setData({
        answer: _answer,
        operator: _operator,
        leftVal: _leftVal,
        rightVal: _rightVal
      })
    } else {
      if (_operator == null) {
        _leftVal = (_leftVal == '0') ? value.toString() : _leftVal + value.toString()
        _this.setData({ leftVal: _leftVal, answer: _leftVal })
      } else {
        _rightVal = (_rightVal == '0') ? value.toString() : _rightVal + value.toString()
        _this.setData({ rightVal: _rightVal, answer: _rightVal })
      }
    }
  }
})

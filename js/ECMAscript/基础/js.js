/* 按钮变色
按钮变色 */
let bts = document.querySelectorAll('button')
for (let i = 0; i < bts.length; i++) {
  bts[i].addEventListener('click', function () {
    document.querySelector('.green').className = ''
    this.className = 'green'
  })
}

document.write('<p>输入到body里面</p>')

console.log('只有程序员能看到')

prompt('请输入你的名字') // 弹出输入框
// alert('欢迎你') // 弹出提示框
// confirm('你确定吗？') // 弹出确认框
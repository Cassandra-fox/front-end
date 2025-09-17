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


// alert('欢迎你') // 弹出提示框
// confirm('你确定吗？') // 弹出确认框

let age
age = 18
age += 1//更新变量
// alert(age)

// 初始化
let uname = prompt('请输入你的名字') // 弹出输入框
let a = 1, b = 2//不推荐这么写
console.log(uname, a + b)

//字符串
let str1 = 'hello'
let str2 = "hello"
let str3 = `hello ${uname}` // 模板字符串
console.log(str1, str2, str3)
console.log(str1.length)//字符串长度
console.log(str1.charAt(1))//字符串索引
console.log(str1.indexOf('l'))//查找字符串位置
console.log(str1.slice(1, 3))//截取字符串
console.log(str1.toUpperCase())//转换大小写
//字符串拼接
console.log(str1 + ' ' + str2)
console.log(`${str1} ${str2}`)

//布尔值
let flag1 = true
let flag2 = false
console.log(flag1, flag2)
console.log(typeof flag1)//查看变量类型

//undefined和null
let und//未定义
let nll = null//空值
console.log(und, nll)
console.log(typeof und)//undefined类型
console.log(typeof nll)//object类型，这个是js的bug

let money = +prompt('请输入你的年薪：')
let pro = +prompt('请输入你的提成：')
alert(`你的年总收入是${money + pro}`)

console.log(parseInt('12px'))//只有这个可以
console.log(parseInt('px12'))
console.log(parseInt('px12px'))

//表格
let Nub = +prompt('请输入你要的苹果数：')
let price = 5
let total = price * Nub
document.write(`
  <table>
		<tr>
			<td>商品名称</td>
			<td>单价</td>
			<td>数量</td>
			<td>总价</td>
		</tr>
		<tr>
			<td>苹果</td>
			<td id="price">5</td>
			<td>${Nub}</td>
			<td id="total">${total}</td>
		</tr>
		<tr>
			<td colspan="3">应付总额</td>
			<td id="sum">${total}</td>
		</tr>
		<tr>
			<td colspan="4"><button id="confirm">确认订单</button></td>
		</tr>
	</table>`)









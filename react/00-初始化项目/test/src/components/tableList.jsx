import { react, useState } from 'react'
//使类名模块化
import style from './tableList.module.css'

function TableList() {

  let [tabChannel, setTabChannel] = useState(0)
  let [arr1, setArr1] = useState([
    { goodsName: "电脑", stock: 100 },
    { goodsName: "鼠标", stock: 200 },
    { goodsName: "键盘", stock: 300 }
  ])
  let [arr2, setArr2] = useState([
    { goodsName: "xx电脑", price: 5000 },
    { goodsName: "xx鼠标", price: 100 },
    { goodsName: "xx键盘", price: 200 }
  ])

  const content1 = () => {
    return (
      arr1.map((item, index) => {
        return <p key={index}>{item.goodsName}---{item.stock}</p>
      })
    )
  }

  const content2 = () => {
    return (
      arr2.map((item, index) => {
        return <p key={index}>{item.goodsName}---{item.price}<button onClick={() => deleteItem(index)}>删除</button></p>
      })

    )
  }

  const changeTab = (num) => {
    setTabChannel(num)
  }

  const deleteItem = (index) => {
    let _arr2 = arr2
    _arr2.splice(index, 1)
    setArr2([..._arr2])
  }

  return (
    <div className={style['tab-choose']}>
      <button onClick={() => changeTab(1)}>库存</button>
      <button onClick={() => changeTab(0)}>商品</button>
      <div>{tabChannel ? <span>{content1()}</span> : <span>{content2()}</span>}</div>
    </div>
  )
}

export default TableList
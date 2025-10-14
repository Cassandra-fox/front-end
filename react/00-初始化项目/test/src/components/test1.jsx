import { react, useState } from 'react'
//函数组件
function Test1() {

  let [objA, setObjA] = useState({ name: 'luchen', age: 18 })

  //条件渲染
  let [show, changeShow] = useState(true)

  const showTab = (num) => {
    if (num >= 1) {
      changeShow(!show)
    }
  }

  setTimeout(() => {
    setObjA({ name: '路辰', age: 20 })
  }, 1000);

  return (
    <div>
      <p>{objA.name}</p>
      {show && <div>Alkaid</div>}
      <button onClick={() => showTab(2)}>英文名</button>
      <p>{objA.age}</p>
    </div>
  )
}
export default Test1
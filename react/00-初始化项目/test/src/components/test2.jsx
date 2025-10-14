import React from 'react'

//类组件
class Test2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      a: 1,
      b: 2,
      objB: {
        height: 180
      },
      cards: [
        { title: "百炼如故", content: "过往、背负、承担，都只是“经历”的一种。" },
        { title: "牵缚花期", content: "爱情是贪婪与恐惧的平衡,也是占有与失去的平衡。" },
        { title: "新生航迹", content: "一颗被他一人看到的星，两次闪烁。" }
      ]
    }
  }
  render() {

    setTimeout(() => {
      let _objB = this.state.objB
      _objB.height = 181
      this.setState({
        a: 3,
        b: 4,
        objB: _objB
      })
    }, 1000)

    return (
      <div>
        <p>{this.state.a} - {this.state.b} - {this.state.objB.height}</p>
        {
          //循环渲染
          this.state.cards.map((item, index) => {
            return (
              <div key={index} style={{ border: '1px solid #ccc', marginBottom: '10px' }}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            )
          })
        }

      </div>
    )
  }
}

export default Test2

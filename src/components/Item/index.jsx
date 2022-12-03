import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  state = {
    mouse: false
  }

  handleMouse = flag => {
    // second;
    // 函数不是在页面渲染完成的时候执行的
    // 事件的回调应该返回一个函数 所以 handleMouse 应该定义为一个高阶函数

    return () => {
      // console.log(flag)
      this.setState({
        mouse: flag
      })
    }
  }
  // 复选框选状态改变的回调
  handleCheck = id => {
    return event => {
      console.log(id)
      console.log(event.target.checked)
      // 通知 app 修改 item 中的状态
      this.props.updateTodo(id, event.target.checked)
    }
  }
  // 删除一个 todo
  handleDelete = id => {
    //
    if (window.confirm('确认删除吗？')) {
      this.props.deleteTodo(id)
    }
  }

  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state
    // 后期使用 defaultChecked 会出现 BUG
    return (
      // style 中如果使用使用变量的话使用的是 双 花括号
      <li
        style={{ backgroundColor: mouse ? '#ddd' : '#fff' }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type='checkbox'
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          className='btn btn-danger'
          style={{ display: mouse ? 'block' : 'none' }}
          onClick={() => this.handleDelete(id)}
          //
        >
          删除
        </button>
      </li>
    )
  }
}

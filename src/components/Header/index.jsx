import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
  // 对接收的 prop 进行 类型 必要性的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  // react 的方法 还有 state/ props 写在 render 的同级
  handleKeyUp = e => {
    // console.log(e.target.value);
    // 键盘的代码标识
    // console.log(e.keyCode);
    const { keyCode, target } = e
    if (keyCode !== 13) {
      return
    }
    // 添加的逻辑
    if (target.value.trim() === '') {
      return alert('输出不能为空')
    }
    // 传递给 app 将输入的值
    // 调用父组件传递过来的 a 方法,把 target.value 传递过去
    // 写成 this 必须写成箭头函数的形式 不然 this 指的是这个方法
    // 构造 app 中需要的  todoObj
    const todoObj = {
      id: nanoid(),
      name: target.value,
      done: false
    }
    // 生成 id 专门生成唯一ID 的库 nanoid
    this.props.addTodo(todoObj)

    target.value = ''
  }

  render() {
    return (
      <div className='todo-header'>
        <input
          type='text'
          onKeyUp={this.handleKeyUp}
          placeholder='请输入你的任务名称，按回车键确认'
        />
      </div>
    )
  }
}

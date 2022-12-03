import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  handleCheckAll = event => {
    this.props.checkAllTodos(event.target.checked)
  }
  // 清除所有已完成的 todo
  handleClearAllDone = () => {
    this.props.clearAllDone()
  }

  render() {
    const { todos } = this.props
    const total = todos.length
    // // 数组条件统计
    // // reduce 对数组进行统计
    // defaultChecked 只能指定一次
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    console.log(doneCount, '----')
    return (
      <div className='todo-footer'>
        <label>
          <input
            type='checkbox'
            checked={total === doneCount && total !== 0 ? true : false}
            onChange={this.handleCheckAll}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部 {total}
        </span>
        <button className='btn btn-danger' onClick={this.handleClearAllDone}>
          清除已完成任务
        </button>
      </div>
    )
  }
}

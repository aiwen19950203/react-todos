import React, { Component } from "react";
import PropTypes from 'prop-types'

import Item from '../Item'

import './index.css'

export default class List extends Component {
  // 对接收的 prop 进行 类型 必要性的限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

  render() {
    // delete 是个关键字删除对象中的属性
    
    const { todos, updateTodo, deleteTodo } = this.props
    return (
      <ul className='todo-main'>
        {todos.map(todo => {
          return (
            <Item
              key={todo.id}
              {...todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>
    )
  }
}

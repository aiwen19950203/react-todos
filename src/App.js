import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
class App extends Component {
  state = {
    todos: [
      {
        id: '001',
        name: '吃饭',
        done: false
      },
      {
        id: '002',
        name: '睡觉',
        done: true
      },
      {
        id: '003',
        name: '写代码',
        done: true
      }
    ]
  }
  // 状态在哪里,更新状态的方法就在哪里
  // 传递 props
  addTodo = todoObj => {
    console.log('App', todoObj)
    // 获取原来的 todos 追加新的 todoObj
    const { todos } = this.state
    // 追加
    const newTodos = [todoObj, ...todos]
    console.log(newTodos, 'newTodos')
    // 赋值
    // setState 对象的 key 是从 state 中取得值
    this.setState({
      todos: newTodos
    })
  }
  // 父组件传子组件 props
  // 子组件传父组件 父亲通过 props 传一个方法, 子组件触发这个函数传递数据
  updateTodo = (id, done) => {
    // 获取状态中 todos
    const { todos } = this.state
    const newTodos = todos.map(todo => {
      // 如果 id 相等 修改状态  不然直接返回
      if (todo.id === id) return { ...todo, done }
      else return todo
    })
    this.setState({
      todos: newTodos
    })
  }
  //  删除指定 id 的 todo
  deleteTodo = id => {
    const { todos } = this.state
    // 删除指定 id
    const newTodos = todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: newTodos
    })
  }

  // 全选 todos /  全取消
  checkAllTodos = done => {
    // 获取原来的 todos
    const { todos } = this.state
    // 加工数据
    const newTodos = todos.map(todo => {
      return { ...todo, done }
    })
    // 更新状态
    this.setState({
      todos: newTodos
    })
  }
  // 清除已完成
  clearAllDone = () => {
    const { todos } = this.state
    const newTodos = todos.filter(todo => !todo.done)
    // 更新状态
    this.setState({
      todos: newTodos
    })
  }

  //

  //
  // let obj = {a:1}
  // let obj1 = {...obj,a:1}

  render() {
    const { todos } = this.state
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todos={todos}
            checkAllTodos={this.checkAllTodos}
            clearAllDone={this.clearAllDone}
          />
        </div>
      </div>
    )
  }
}

// 组件是 jsx 
// app 是跟组件 所以把

export default App;

// 拆分组件  拆分界面 抽取组件

// 实现静态组件，实现组件的静态页面效果

// 实现动态组件

//  数据类型
//  数据名称
//  保存在哪个组件

// 交互

// 从绑定事件监听开始

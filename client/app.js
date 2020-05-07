import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { AppContainer } from 'react-hot-loader' // eslint-disable-line

// const renderMethod = !module.hot ? ReactDOM.render : ReactDOM.hydrate

const root = document.getElementById('root')
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    root
  )
}

render(App) // 初始化

// 热更新
if (module.hot) {
  // 接受给定依赖模块的更新，并触发一个回掉函数来对这些更新作出相应
  module.hot.accept('./App.jsx', () => {
    const NextApp = require('./App.jsx').default // eslint-disable-line
    render(NextApp)
  })
}
// ReactDOM.hydrate(<App />, document.getElementById('root'))

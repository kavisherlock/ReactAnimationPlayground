import React from 'react'
import { Transition, animated } from 'react-spring'
import '../../App.css'

const pages = [
  style => (
    <animated.div style={{ ...style, background: 'lavender' }}>ONE</animated.div>
  ),
  style => (
    <animated.div style={{ ...style, background: '#B2DBBF' }}>TWO</animated.div>
  ),
  style => (
    <animated.div style={{ ...style, background: '#12DBBF' }}>THREE</animated.div>
  ),
]

export default class App extends React.PureComponent {
  state = { index: 0 }
  toggle = e =>
    this.setState(state => ({
      index: state.index === 2 ? 0 : state.index + 1,
    }))
  render() {
    return (
      <div className="transition" onClick={this.toggle}>
        <Transition
          items={this.state.index}
          from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
          enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
          leave={{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}>
          {index => pages[index]}
        </Transition>
      </div>
    )
  }
}
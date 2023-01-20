// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: randomNumber}))
  }

  findOperator = () => {
    const {count} = this.state
    return count % 2 === 0 ? 'Even' : 'Odd'
  }

  render() {
    const {count} = this.state
    const operator = this.findOperator()

    return (
      <div className="app-container">
        <div className="count-container">
          <h1 className="heading">count {count}</h1>
          <p className="count-description">count is {operator}</p>
          <button
            type="button"
            className="button-container"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="count-text">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

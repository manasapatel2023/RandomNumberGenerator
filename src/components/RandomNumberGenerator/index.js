// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getCount = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    return this.setState(() => ({count: randomNumber}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <div className="generate-button">
            <button type="button" className="button" onClick={this.getCount}>
              Generate
            </button>
          </div>
          <p className="generated-count">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator

// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {counter: 0}

  wordLength = event => {
    const word = event.target.value
    this.setState({
      counter: word.length,
    })
  }

  render() {
    const {counter} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="myInput">Enter the phrase</label>
          <input
            placeholder="Enter the phrase"
            type="text"
            className="inputElement"
            id="myInput"
            onChange={this.wordLength}
          />
          <p className="paragraph">No.of letters: {counter}</p>
        </div>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator

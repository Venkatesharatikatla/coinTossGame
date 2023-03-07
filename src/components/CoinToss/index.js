import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  render() {
    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img
            alt="head"
            src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
            className="coinToss-img"
          />
          <button type="button" className="btn-coin">
            Toss Coin
          </button>
          <div className="details-container">
            <p className="details">Total: 0</p>
            <p className="details">Heads: 0</p>
            <p className="details">Tails: 0</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss

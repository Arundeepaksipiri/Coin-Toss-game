// Write your code here
import {Component} from 'react'
import './index.css'
class CoinToss extends Component {
  state = {number: 0,total:0,heads:0,tails:0}
  coinChange = () => {
    const {number} = this.state
    if (number === 0) {
      return (
        <img
          src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
          className="image-size"
          alt="toss result"
        />
      )
    } else {
      return (
        <img
          src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
          className="image-size"
          alt="toss result"
        />
      )
    }
  }
  onClickCoin=()=>{
    const tossResult=Math.floor(Math.random()*2)
    this.setState(prevState=>({total:prevState.total+1}))

    this.setState({number:tossResult})
    if(tossResult===0){
      this.setState(prevState=>({heads:prevState.heads+1}))
    }
    else{
      this.setState(prevState=>({tails:prevState.tails+1}))
    }
   
  }
  render() {
    const {total,heads,tails}=this.state
    return (
      <div className="bg-container">
        <div className="box-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          {this.coinChange()}
          <button className="coin-button" onClick={this.onClickCoin}>Toss Coin</button>
          <div>
          <p>Total:{total}</p>
          <p>Heads:{heads}</p>
          <p>Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss

import {Component} from 'react'

import './index.css'

const tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// Puzzle Component
class Puzzle extends Component {
  state = {
    tilesArray: tiles,
  }

  // function to shuffle the tiles in puzzle
  onShuffle = () => {
    const randomTiles = tiles.sort(() => Math.random() - 0.5)
    this.setState({tilesArray: randomTiles})
  }

  // displaying the puzzle in the UI
  render() {
    const {tilesArray} = this.state

    return (
      <div className="puzzle-container">
        <div className="profile-container">
          <img
            alt="elon"
            className="elon-image"
            src="https://pixabay.com/get/g466d3feabfd9402a1fc00f538bd64ced252d1446fbefd32ed57e9a2815c53277f4c6bca5250c852bbedefd2120bef98c90ff416dcc67689872c6f7c6c542c8f5c0263a416c812a9c882ae1e8ab37efc1_1280.png"
          />
          <h1 className="name">Elon</h1>
          <p className="message">Hello Elon, Welcome to puzzle mania.</p>
        </div>
        <button type="button" className="shuffle" onClick={this.onShuffle}>
          Start Game
        </button>
        <div className="card-container">
          {tilesArray.map(eachTile => (
            <li className="card" key={eachTile}>
              {eachTile}
            </li>
          ))}
        </div>
      </div>
    )
  }
}

export default Puzzle

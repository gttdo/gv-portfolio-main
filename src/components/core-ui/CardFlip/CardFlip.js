import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';



class CardFlip extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
        <div>
          <div onClick={this.handleClick}>
            <img src={this.props.frontImage} alt={this.props.altText} />
          </div>
        </div>

        <div>
          <ul onClick={this.handleClick}>
            <img src={this.props.backImg} alt={this.props.backAltText} />
          </ul>
        </div>
      </ReactCardFlip >
    )
  }
}

export default CardFlip

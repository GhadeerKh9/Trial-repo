import React from "react";

class HornedBeasts extends React.Component {
  render() {
    return (
      <div>
        <h1> {this.props.newName}</h1>

        <img src={this.props.newImg} alt="" />
        <p>{this.props.newDesc}</p>
      </div>
    );
  }
}

export default HornedBeasts;

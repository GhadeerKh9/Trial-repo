import React from "react";
import HornedBeasts from "./HornedBeasts";

let title1 = "Cat";
let title2 = "Dog"


let desc1 = "this is a cat pic"
let desc2 = "This a dog pic"



class Main extends React.Component {
  render() {
    return (
      <div>
        <HornedBeasts newName={title1} newImg = {"https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697"} newDesc ={desc1} />
        <HornedBeasts newName={title2} newImg = {"https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg"} newDesc ={desc2}/>
      </div>
    );
  }
}

export default Main;

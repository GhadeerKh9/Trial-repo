import React from "react";
import HornedBeasts from "./HornedBeasts";
import Data from "./Data.json";
import "bootstrap/dist/css/bootstrap.min.css";

// let title1 = "Cat";
// let title2 = "Dog"

// let desc1 = "this is a cat pic"
// let desc2 = "This a dog pic"

class Main extends React.Component {
  render() {
    return Data.map((item) => {
      return (
        <HornedBeasts
          title={item.title}
          description={item.description}
          image_url={item.image_url}
        />
      );
    });
  }
}

export default Main;

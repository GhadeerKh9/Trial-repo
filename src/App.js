import React from "react";
import Header from "./components/Header";
// import Footer from './Footer';
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;

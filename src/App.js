import React, { Component } from "react";
import "./App.css";
import data from "./component/data";
import MyProps from "./component/MyProps";
import Keyboard from "./component/Keyboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sounds: data,
      showPadName: ""
    };
  }

  triggerSound = item => {
    // console.log(item);
    const audioPad = (
      <figure>
        <figcaption className="pad">{item.description}</figcaption>
        <audio controls autoPlay src={item.sound} />
      </figure>
    );
    this.setState({ showPadName: audioPad });
  };

  render() {
    let soundList = this.state.sounds.map(item => (
      <MyProps
        key={item.id}
        description={item.description}
        id={item.id}
        sound={item.sound}
        triggerSound={() => this.triggerSound(item)}
      />
    ));

    return (
      <div className="App">
        <Keyboard />
        <div id="sound-machine">
          <div id="display">
            {this.state.showPadName}
            {soundList}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

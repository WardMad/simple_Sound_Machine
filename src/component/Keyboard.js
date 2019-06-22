import React from "react";
import $ from "jquery";
import data from "./data";

class Keyboard extends React.Component {
  state = {
    key: ""
  };

  keyAttach = e => {
    $(window).keypress(
      function(event) {
        switch (event.keyCode) {
            case 81:
            this.setState({key: <audio controls autoPlay src={data[0].sound} />});
            break;
            case 87:
            this.setState({key: <audio controls autoPlay src={data[1].sound} />});
            break;
            case 69:
            this.setState({key: <audio controls autoPlay src={data[2].sound} />});
            break;
            case 65:
            this.setState({key: <audio controls autoPlay src={data[3].sound} />});
            break;
            case 83:
            this.setState({key: <audio controls autoPlay src={data[4].sound} />});
            break;
            case 68:
            this.setState({key: <audio controls autoPlay src={data[5].sound} />});
            break;
            case 90:
            this.setState({key: <audio controls autoPlay src={data[6].sound} />});
            break;
            case 88:
            this.setState({key: <audio controls autoPlay src={data[7].sound} />});
            break;
            case 67:
            this.setState({key: <audio controls autoPlay src={data[8].sound} />});
            break;
        }
      }.bind(this)
    );
  };
  render() {
    return (
      <div className='keyboard'>
        <input type="submit" onClick={() => this.keyAttach()} />
          <p>I f you want to use keyboard ,<br/>please turn on Capslock and click submit button.</p>
        {this.state.key}
      </div>
    );
  }
}
export default Keyboard;

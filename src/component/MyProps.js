import React from "react";

class MyProps extends React.Component {
  render() {
    let { id, triggerSound } = this.props;

    return (
      <div className="list">
        <p>
          <button type="submit" onClick={triggerSound} style={{ fontSize: 33 }}>
            {id}
          </button>
        </p>
      </div>
    );
  }
}
export default MyProps;

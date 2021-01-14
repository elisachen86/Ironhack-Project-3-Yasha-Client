// Corresponding figma view: Overlay Actions Required . Full page in mobile version but can be a part of
// the dashboard in desktop one to take full advantage of the space

import React, { Component } from "react";

export default class NotifsMessages extends Component {
  render() {
    return (
      <div>
        <h1>New messages</h1>

        {/* BELOW: Hardcoded for now but will be obvs. dynamic | needed: brand name, order number, username, date of msg and msg content */}
        <div>
          <h2>Salam Studio</h2>

          <h3> SO200000012 </h3>
          <h4>Julie D.</h4>
          <h4>yesterday at 17h32</h4>
          <p>
            We had to cancel 3 styles fom the original order. Proposing
            substitutes to the buyers.
          </p>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="description">
          <p className="sub_header__desc">
            simple snap app with <span>react</span>.
          </p>
        </div>

        <div>
          <form>
            <input className="add-snap__input" type="text" placeholder="add snap" />
          </form>
        </div>
        <div>
          <ul className="snaps">
            <li>
              <div className="title">
                Happiness can be found even in the darkest of times, if one only
                remembers to turn on the light.
              </div>
              <div className="date">
                <span>now</span>
              </div>
            </li>
            <li>
              <div className="title">If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.</div>
              <div className="date">
                <span>5 minutes ago</span>
              </div>
            </li>
            <li>
              <div className="title">Let us step into the night and pursue that flighty temptress, adventure.</div>
              <div className="date">
                <span>7 minutes ago</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="counter">3 snap(s)</div>
      </div>
    );
  }
}

export default Home;

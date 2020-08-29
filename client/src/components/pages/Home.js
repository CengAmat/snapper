import React, { Component } from "react";

import { Query } from "react-apollo";
import { GET_SNAPS } from "../../queries";
import TimeAgo from 'react-timeago';

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
            <input
              className="add-snap__input"
              type="text"
              placeholder="add snap"
            />
          </form>
        </div>
        <div>
          <Query query={GET_SNAPS}>
            {({ data, loading, error }) => {
              if (loading) return <div className="loading">Loading snaps...</div>;
              if (error) return <div>Error.</div>;

              console.log(data);
              return (
                <ul className="snaps">
                  {data.snaps.map((snap) => (
                    <li key={snap.id}>
                      <div className="title">
                        <span className="username">@{snap.user.username} </span>
                        {snap.text}
                      </div>
                      <div className="date">
                        <span>
                          <TimeAgo date={ snap.createdAt } />
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              );
            }}
          </Query>
        </div>
        <div className="counter">3 snap(s)</div>
      </div>
    );
  }
}

export default Home;

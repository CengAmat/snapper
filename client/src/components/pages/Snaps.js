import React from "react";
import { Query } from "react-apollo";
import { GET_ACTIVE_USER, SNAP_CREATED } from "../../queries";

import SnapListItem from "./Home/SnapListItem";

const SnapList = () => (
  <div>
    <Query
      query={GET_ACTIVE_USER}
    >
      {({ data, subscribeToMore, loading, error }) => {
        if (loading) return <div className="loading">Loading snaps...</div>;
        if (error) return <div>Error.</div>;

        subscribeToMore({
          document: SNAP_CREATED,
          variables: { userId: data.activeUser.id },
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev;

            const newItem = subscriptionData.data.snap;

            if (!prev.activeUser.snaps.find((snap) => snap.id === newItem.id)) {
              return {
                ...prev,
                snaps: [newItem, ...prev.activeUser.snaps],
              };
            } else {
              return prev;
            }
          },
        });

        return (
          <div>
            <ul className="snaps">
              {data.activeUser.snaps.map((snap) => (
                <SnapListItem key={snap.id} snap={snap} />
              ))}
            </ul>
            <div className="counter">
              {data.activeUser.snaps.length} snap(s)
            </div>
          </div>
        );
      }}
    </Query>
  </div>
);

export default SnapList;

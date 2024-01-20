import React from "react";
import { useSelector } from "react-redux";

export default function Channel() {
  const { subscribed } = useSelector((state) => state.simplylearn);
  return (
    <div>
      <h1>Welcome to Our channel</h1>
      {subscribed ? (
        <button>You are currently subscribed! Click here to unsubscribe</button>
      ) : (
        <button>Click here to subscribe to our channel</button>
      )}
    </div>
  );
}

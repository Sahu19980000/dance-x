import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";

const Counter = () => {
  const Completionist = () => <span>You are good to go!</span>;

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span className="timer_right_contemporay">
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  return (
    <div className="my-5">
      <Countdown
        date={Date.now() + 1000 * 60 * 60 * 24 * 1}
        renderer={renderer}
      />
      ,
    </div>
  );
};

export default Counter;

import React from "react";

const CurrentTime = () => {
  let time = new Date();

  return (
    <div>
      <h4>
        This is the current Time: {time.toLocaleTimeString()} -{" "}
        {time.toLocaleDateString()}{" "}
      </h4>
    </div>
  );
};

export default CurrentTime;

import React from "react";

import LogoBlack from "../../../../imgs/LogoBlack.png";

const Offered = () => {
  return (
    <div className="offered">
      <h2>Offered by</h2>
      <div className="logo">
        <img src={LogoBlack}></img>
        <h2>Online education and Learning</h2>
      </div>
    </div>
  );
};

export default Offered;

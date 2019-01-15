import React from "react";
import { Link } from "react-router-dom";

function Kids() {
  return (
    <Link className="Navbar__kids__button disabled" to="/kids">
      JEUNESSE
    </Link>
  );
}

export default Kids;

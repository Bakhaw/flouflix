import React from "react";
import Button from "@material-ui/core/Button";
import LayoutContainer from "../../components/LayoutContainer";

function Home() {
  return (
    <LayoutContainer>
      <div className="Home">
        <a href="/films">
          <Button>VOIR LES FILMS</Button>
        </a>
      </div>
    </LayoutContainer>
  );
}

export default Home;

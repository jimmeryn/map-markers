import React from "react";
import StepperComponent from "../components/StepperComponent";

const Menu = () => {
  const [menuState, setMenuState] = React.useState(true);

  return (
    <div className={menuState ? "menu" : "menu--hidden"}>
      <StepperComponent
        steps={["Set Options Order", "Upload Your .csv file"]}
        hideMenu={() => setMenuState(false)}
      />
    </div>
  );
};

export default Menu;

import React from "react";
import PropTypes from "prop-types";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props) => {
  const { children } = props;
  return (
    <Aux>
      <Toolbar />
      <main className={classes.Content}>
        {children}
      </main>
    </Aux>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

import React from "react";
import PropTypes from "prop-types";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";

const Layout = (props) => {
  const { children } = props;
  return (
    <Aux>
      <div>
        Toolbar, SideDrawer, Backdrop
      </div>
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

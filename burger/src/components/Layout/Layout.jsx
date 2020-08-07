import React from "react";
import PropTypes from "prop-types";
import Aux from "../../hoc/Aux";

const Layout = (props) => {
  const { children } = props;
  return (
    <Aux>
      <div>
        Toolbar, SideDrawer, Backdrop
      </div>
      <main>
        {children}
      </main>
    </Aux>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

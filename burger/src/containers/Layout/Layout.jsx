import React from "react";
import PropTypes from "prop-types";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: true,
    };
  }

  toggleSideDrawerHandler = () => {
    this.setState((prevState) => ({
      showSideDrawer: !prevState.showSideDrawer,
    }));
  };

  closeSideDrawerHandler = () => {
    this.setState({
      showSideDrawer: false,
    });
  };

  render() {
    const { children } = this.props;
    const { showSideDrawer } = this.state;

    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.toggleSideDrawerHandler} />
        <SideDrawer open={showSideDrawer} closed={this.closeSideDrawerHandler} />
        <main className={classes.Content}>
          {children}
        </main>
      </Aux>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

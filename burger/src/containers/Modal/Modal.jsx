import React from "react";
import PropTypes from "prop-types";
import classes from "./Modal.module.css";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Aux from "../../hoc/Aux/Aux";

class Modal extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { show } = this.props;
    return show !== nextProps.show;
  }

  render() {
    const { children, show, modalClicked } = this.props;
    return (
      <Aux>
        <Backdrop show={show} clicked={modalClicked} />
        <div
          className={classes.Modal}
          style={{
            transform: show ? "translateY(0)" : "translateY(-100vh)",
            opacity: show ? 1 : 0,
          }}
        >{children}
        </div>
      </Aux>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
  modalClicked: PropTypes.func.isRequired,
};

export default Modal;

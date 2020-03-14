import React from "react";

const withClass = (WithComponent, className) => {
    return props => (
        <div className={className}>
            <WithComponent>
                {props.children}
            </WithComponent>
        </div>
    );
};

export default withClass;

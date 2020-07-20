import React from 'react';

const Emoji = props => (
    <span
        className={props.className}
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
        onClick={props.onClick ? props.onClick : function(){}}
        onMouseOver={props.onMouseOver ? props.onMouseOver : function(){}}
        onMouseOut={props.onMouseOut ? props.onMouseOut : function(){}}
        title={props.title ? props.title : ""}
    >
        {props.symbol}
    </span>
);
export default Emoji;
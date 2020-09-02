import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import './ReadMoreText.scss';

const ReadMoreText = ({ minHeight = '100px', text = "" }) => {

    const [open, setOpen] = useState(false);

    const onClickHandler = (event) => {
        event.preventDefault();
        setOpen(!open)
    }

    const openStyle = { width: "100%", height: minHeight, overflow: "hidden", textOverflow: "ellipsis" };

    const isOpen = () => {
        if (!open) {
            return openStyle;
        } else {
            return null;
        }
    }

    if (text.length > 300) {
        return (<div className="read-more-text">
            <div style={isOpen()} className="text-container">{text}</div>
            {!open && <NavLink to="/" className="action-button" onClick={onClickHandler}>Show More</NavLink>}
            {open && <NavLink to="/" className="action-button" onClick={onClickHandler}>Show Less</NavLink>}
        </div>)
    } else {
        return (<div className="read-more-text">
            <div className="text-container" >{text}</div>
        </div>)
    }
}

export default (ReadMoreText)
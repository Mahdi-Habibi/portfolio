import React from "react";
import '../../styles/global.css';

export default function SideLink({href, children}) {
    return (
        <a href={href} className="side-link">{children}</a>
    );
}
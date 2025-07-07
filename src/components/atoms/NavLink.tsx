import React from "react";
import PropTypes from "prop-types";

export default function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <a href={href} className="text-sm h-auto px-8 py-2 text-gray-400 hover:text-pure-blue md:text-base">
            {children}
        </a>
    )
}

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}
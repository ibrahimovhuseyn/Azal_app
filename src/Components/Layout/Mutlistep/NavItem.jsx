import React from 'react'
import { Button } from 'reactstrap'

function NavItem(
    { text, isActive, onClick }
) {
    return (
        <div className={`navItem ${isActive ? "active" : ""}`}>
            <Button
                onClick={onClick}>
                {text}
            </Button>
        </div>
    )
}

export default NavItem
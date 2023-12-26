import React from 'react'
import { Button } from 'reactstrap'

function NavItem(
    { text, isActive }
) {
    return (
        <div className={`navItem ${isActive ? "active" : ""}`}>
            <Button>
                {text}
            </Button>
        </div>
    )
}

export default NavItem
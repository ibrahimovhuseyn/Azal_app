import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { GrLanguage } from 'react-icons/gr'

function Language() {

    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggle = () => setDropdownOpen(prevstate => !prevstate)
    return (
        <div className='language'>
            <Dropdown
                isOpen={dropdownOpen}
                toggle={toggle}
                className='dropdown'
            >
                <DropdownToggle className='dropdownToggle'>
                    <GrLanguage className='toggle'/>
                </DropdownToggle>
                <DropdownMenu className='dropdownMenu'>
                    <DropdownItem className='dropdownItem'>English</DropdownItem>
                    <DropdownItem className='dropdownItem'>Русский</DropdownItem>
                    <DropdownItem className='dropdownItem'>Deutsch</DropdownItem>
                    <DropdownItem className='dropdownItem'>Français</DropdownItem>
                    <DropdownItem className='dropdownItem'>Itailano</DropdownItem>
                </DropdownMenu>
            <p className='none'>Azerbaycan</p>

            </Dropdown>

        </div>
    )
}

export default Language
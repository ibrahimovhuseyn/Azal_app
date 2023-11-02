import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import "/node_modules/flag-icons/css/flag-icons.min.css";


function SignInTop() {
  const logoUrl = 'https://ffp.azal.travel/assets/img/logo.png'
  const azUrl = 'https://media.istockphoto.com/id/1063896758/tr/vekt%C3%B6r/azerbaycan-bayra%C4%9F%C4%B1.jpg?s=612x612&w=0&k=20&c=6jaDy2_EKSJdkxefC3UXwqGn0_h9Nktai4IVVRjqGIc='
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggle = () => setDropdownOpen(prevstate => !prevstate)


  return (
    <div className='top'>
      <div className="flex">
        <div className="imgWrapper">
          <img src={logoUrl} alt="" />
        </div>

        <div className='flags'>
          <Dropdown
            isOpen={dropdownOpen}
            toggle={toggle}
            className='dropdown'
          >
            <DropdownToggle className='dropdownToggle'>
              <span className="fi fi-az flag"></span>
            </DropdownToggle>
            <DropdownMenu >
              <DropdownItem>
                <span className="fi fi-az flag"></span>
                Azerbaycan
              </DropdownItem>
              <DropdownItem>
                <span className="fi fi-us flag"></span>
                English
              </DropdownItem>
              <DropdownItem>
                <span className="fi fi-ru flag"></span>
                Русский
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>

      </div>
      <div className="content">
        <h3 className='mt-3 text-center'>CR7 Miles</h3>
        <h6 className='text-primary fw-bold text-center'>Şəxsi kabinet</h6>
      </div>
      <hr />
    </div>
  )
}

export default SignInTop
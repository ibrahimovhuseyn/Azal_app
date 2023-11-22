import React from 'react'
import { Row } from 'reactstrap'
import Info from './Info'
import AzalMiles from './AzalMiles'
import AzalAirlines from './AzalAirlines'
import Corporative from './Corporative'
import Icons from './Icons'
import Google from './Google'

function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <Row>
                    <div className="col-12 col-md-6 col-lg-3 ">
                        <Info />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <AzalMiles />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3" >
                        <AzalAirlines />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 ">
                        <Corporative />
                    </div>
                </Row>
                <div className="d-flex justify-content-between align-items0-center">
                    <Icons />
                    <Google />
                </div>
            </div>
        </div>
    )
}

export default Footer
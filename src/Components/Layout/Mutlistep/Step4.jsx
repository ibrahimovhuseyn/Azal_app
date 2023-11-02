import React from 'react'
import { useSelector } from 'react-redux'
import { Row } from 'reactstrap';

function Step4() {
    const { step1, step2, step3, currentFly } = useSelector(store => store.buySlice)


    return (
        <Row>
            <div className="col-md-6">
                <div className='stepItem lastStep'>
                    <p>Ad soyad : {step1.fullname}</p>
                    <p>Telefon nömrəniz : {step1.phone}</p>
                    <p>Bilet sayı :{step2.ticketCount}</p>
                    <p>Uçuşunuz : {step2.flyType}</p>
                </div>

            </div>
            <div className="col-md-6">
                <div className='stepItem lastStep'>
                    <p>Rezervasiya Nömrəniz : {step3.fin}</p>
                    <p>Bilet nömrəniz : {currentFly.flyNumber}</p>
                    <p>Bilet sayı :{step2.ticketCount}</p>
                    <p>
                        Ümumi məbləğ :
                        <b>
                            {step2.ticketCount * currentFly.price}AZN   
                        </b>
                    </p>
                </div>


            </div>
        </Row>
    )
}

export default Step4
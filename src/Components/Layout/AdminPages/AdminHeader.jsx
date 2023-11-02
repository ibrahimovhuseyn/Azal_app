import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import { setCurrentUser } from '../Slices/home'

function AdminHeader() {

    const { currentUser } = useSelector(store => store.homeSlice)
    // console.log(currentUser);
    const dispatch = useDispatch()
    function signOut() {
        dispatch(setCurrentUser({}))
    }
    return (
        <div>
            <Link to={'/allsolds'}><Button>Satılmış biletlər</Button></Link>
            <Link to={'/add'}><Button>Əlavə et</Button></Link>
            <button
                onClick={signOut}
            >
                Cixis
            </button>
            
        </div>
    )
}

export default AdminHeader
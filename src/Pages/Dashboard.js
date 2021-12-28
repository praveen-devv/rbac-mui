import React, { useEffect } from 'react'
import './Dashboard.css'
import Filter from '../components/Filter'
import Reports from '../components/Reports'
import { useDispatch, useSelector } from 'react-redux'

function Dashboard() {

    const toogleState = useSelector(state => state.toogle.toogleState)

    useEffect(() => {
        let cls=document.getElementsByClassName('dashboard')[0];
        if(toogleState){
            cls.style.left="260px";
            cls.style.transition="all 0.5s ease";
            cls.style.width="calc(100% - 260px)";
        }
        if(!toogleState){
            cls.style.left="68px"
            cls.style.width="calc(100% - 68px)";
        }
        
    }, [toogleState])

    return (
        <div className='dashboard'>
            <Reports />
            <Filter />
        </div>
    )
}

export default Dashboard

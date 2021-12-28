import React, { useState } from 'react'
import { BiPlusMedical } from 'react-icons/bi'
import { FaMinus } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import Select from 'react-select'

import './Filter.css'

function Filter() {
    const [filters, setFilters] = useState([{filter:'',condition:'',value:''}])


    const addFilter = () =>{
        setFilters([...filters,{filter:'',condition:'',value:''}])
    }

    const removeFilter = (index) =>{
            const filtersList = [...filters];
            filtersList.splice(index, 1);
            setFilters(filtersList);
    }

    const minusFilter = () =>{
        const filtersList = [...filters];
        filtersList.splice(-1);
        setFilters(filtersList);
    }

    

    return (
        <div className='filter' id='filters'>
            <h4>Filters</h4>
            <div className='filter-labels'>
                <p className='large'>Filter</p>
                <p className='small'>Condition</p>
                <p className='small'>Value</p>
                <BiPlusMedical className='icon-green' onClick={addFilter} />
                <FaMinus className='icon-red'  onClick={minusFilter} />
            </div>
            <div className='filter-content'>
                {filters.map((filter,i)=>(
                    <div className='filter-fields'>
                        <div className='input-fields'>
                            {/* <input name='filter' value={filter.filter} className="large" onChange={(e) => { filter.filter=e.target.value; setFilters([...filters])} }/> */}
                            <Select className='large' placeholder='' />
                        </div>
                        <div className='input-fields'>
                            <Select className='small' placeholder='' />
                        </div>
                        <div className='input-fields'>
                            <Select className='small' placeholder='' />
                            <ImCross className='icon-cross' onClick={removeFilter}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Filter

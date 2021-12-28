import React from 'react'
import { Button,ButtonGroup,Dropdown} from 'react-bootstrap';
import Buttons from './Buttons';
import DropdownButton from './DropdownButton';
import './Reports.css'

function Reports() {
    return (
        <div className="reports-header">
            <div className="reports-label">
                Reports
            </div>
            <div className="btns">
                <div className="success">
                    <Buttons className="btn" variant="success" name="Serverip"/>
                    <Buttons className="btn" variant="success" name="view Reports"/>
                </div>
                <div className="dropdown">
                    <DropdownButton buttonVariant="success" buttonName="Export" variant="success" items={["Excel","PDF","XML","Text","CSV"]} className="dropdown-button" />
                    <DropdownButton buttonVariant="danger" buttonName="Upload" variant="danger" items={["Excel","Text"]} className="dropdown-button" />
                </div>
            </div>
            
        </div>
    )
}

export default Reports
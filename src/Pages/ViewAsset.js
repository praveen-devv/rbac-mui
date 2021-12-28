import React, { useEffect, useState } from 'react'
// import './ViewAsset.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button, Modal } from 'react-bootstrap'

function ViewAsset() {


    const toogleState = useSelector(state => state.toogleState)
    const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = (e) =>{
    setShow(true);
  }


    useEffect(() => {
        let cls = document.getElementsByClassName('view-asset')[0];
        if (toogleState) {
            cls.style.left = "260px";
            cls.style.transition = "all 0.5s ease";
            cls.style.width = "calc(100% - 260px)";
        }
        if (!toogleState) {
            cls.style.left = "68px"
            cls.style.width = "calc(100% - 68px)";
        }
    }, [toogleState])

    return (
        <div className='view-asset'>
            <div className='create-asset'>
                <Link className='btn btn-success' to='/createasset'>Add
                    {/* <a className='btn btn-success'>Add</a> */}
                </Link>
            </div>
            <table className='table table-bordered'>
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Code</th>
                        <th scope="col">Entity Type</th>
                        <th scope="col">Entity Name</th>
                        <th scope="col">Previleges</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td><button className='btn btn-primary' onClick={handleShow}>Add Previlege</button></td>
                        <td><button className='btn btn-danger'>Delete</button></td>
                    </tr>
                </tbody>
            </table>

            <Modal show={show} onHide={handleClose} centered >
              <Modal.Header closeButton>
                <Modal.Title>View Users</Modal.Title>
              </Modal.Header>
              <Modal.Body>View all the users in <strong>{}</strong> role</Modal.Body>
              <Modal.Footer>
                <Link to='/roles/users'>
                  <Button variant="primary">
                    View
                  </Button>
                </Link>
              </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ViewAsset

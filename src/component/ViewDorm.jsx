import React from 'react';

const ViewDorm = (props) => {
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Dorm details</h3>
    <div className='py-5'>

  
    <div className="row py-4">
        <span className="mb-0 col-4">Dorm Name : </span>
        <span className='col-8 ps-0'>{props.data.dormName}</span>
    </div>
    <hr/> 
    <div className="row py-4">
        <span className="mb-0 col-4">Dorm Description : </span>
        <span className='col-8 ps-0'>{props.data.description}</span>
    </div>
    <hr/> 
    <div className="row py-4">
        <span className="mb-0 col-4">Available rooms : </span>
        <span className='col-8 ps-0'>{props.data.room}</span>
    </div>
    <hr/> 
    <div className="row py-4">
        <span className="mb-0 col-4"> City : </span>
        <span className='col-8 ps-0'> {props.data.city} </span>
    </div>
    <hr/> 
    <div className="row py-4">
        <span className="mb-0 col-4"> State : </span>
        <span className='col-8 ps-0'> {props.data.state} </span>
    </div>
    <hr/> 
    <div className="row py-4">
        <span className="mb-0 col-4"> Founding Year: </span>
        <span className='col-8 ps-0'> {props.data.foundingYear} </span>
    </div>
    <hr/> 
    <div className="row py-4">
        <span className="mb-0 col-4"> University Name: </span>
        <span className='col-8 ps-0'> {props.data.versityName} </span>
    </div>
    <hr/> 
    </div>
    <div className="modal-action">

      <form method="dialog">
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    );
};

export default ViewDorm;
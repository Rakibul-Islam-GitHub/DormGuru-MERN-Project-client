import React from 'react';
import { MdWarning } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteDorm } from '../store/slices/dorm-slice';

const DeleteDorm = (props) => {
    const dispatch = useDispatch()
    const handleDeleteDorm = () => {
    
        dispatch(deleteDorm({id:props.id,toggleModal:props.toggle}))
      }
    return (
        <div>
<dialog id="delete" className="modal">
  <div className="modal-box">
  <h3 className="font-bold text-lg mb-2">Delete Dorm</h3>
<hr/>
    <div className='delete-modal-section flex flex-col justify-center items-center mt-4'>
  
              <MdWarning className='delete-icon text-red-600' size={70}></MdWarning>
            <div className='delete-text mt-2 flex space-y-2 flex-col'>
              <h2 className='text-black text-4xl font-bold'>Are you sure?</h2>
              <span className='mt-2'>This action cannot be undone</span>
            </div>
          </div>
              <div className="modal-action">
      <div className='flex justify-between'>
        <button className="btn bg-slate-400" onClick={(e)=>{props.toggle();}}>Close</button>
        <button className="btn bg-red-800 text-neutral-50 ms-2 hover:bg-sky-700 " onClick={handleDeleteDorm}>Confirm</button>
      </div>
    </div>
  </div>
</dialog>
        </div>
    );
};

export default DeleteDorm;
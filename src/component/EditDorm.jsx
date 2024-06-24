import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editDorm } from '../store/slices/dorm-slice';

const EditDorm = (props) => {
    const dispatch=useDispatch()
    const [isClose, setIsClose]= useState(false)
const [dormValue, setDormValue] = useState({dormName: props.data.dormName && props.data.dormName, description: props.data.description && props.data.description, versityName: props.data.versityName && props.data.versityName, foundingYear:props.data.foundingYear && props.data.foundingYear , city:props.data.city && props.data.city, state: props.data.state && props.data.state, room: props.data.room && props.data.room } )  

    const doEditDorm = async(event) => {  
        event.preventDefault()

        if (isClose) {
            event.target.reset()
            return
        }
            //   if (!props.data.dormName || !props.data.description || !props.data.versityName || !props.data.foundingYear ||  !props.data.city || !props.data.state || !props.data.room) {
            //    alert('Please fill all the field')
            //     return
            //   }

            const dormName= event.target.dormName.value
            const description= event.target.description.value
            const versityName= event.target.versityName.value
            const foundingYear= event.target.foundingYear.value
            const city= event.target.city.value
            const state= event.target.state.value
            const room= event.target.room.value

            const dormData= {
                dormName, description, versityName, foundingYear, city, state, room
            }  
              
        dispatch(editDorm({id:props.data._id, dormData:dormData, event:event, toggle:props.toggle}))
        
              
         
            }
    return (
        <div>
<dialog id="edit" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Edit dorm defaultValues</h3>
    <div className='container pt-6'>
        
    <form className='' onSubmit={(event=>doEditDorm(event))}>

      <div className="flex flex-col sm:flex-row items-center gap-5 w-full">
                    <div className="mb-4 w-full">
                        <label className="block text-gray-700">Dorm Name</label>
                        <input type="text"
                         className="additem-input" 
                         defaultValue={props.data.dormName}
                         
                         name="dormName" 
                         placeholder="Enter dorm name"
                         required/>
                    </div>
                    <div className="mb-4 w-full">
                        <label className="block text-gray-700">University Name</label>
                        <input type="text"
                         className="additem-input" 
                         defaultValue={props.data.versityName}
                        //  onChange={(event) => changeCred(event)}
                         name="versityName" 
                         placeholder="Enter university name"
                         required/>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-5 w-full">
                    <div className="mb-4 w-full">
                        <label className="block text-gray-700">Founding Year</label>
                        <input type="text"
                         className="additem-input" 
                         defaultValue={props.data.foundingYear}
                        //  onChange={(event) => changeCred(event)}
                         name="foundingYear" 
                         placeholder="Enter Founding Year"
                         required/>
                    </div>
                    <div className="mb-4 w-full">
                        <label className="block text-gray-700">Available Room</label>
                        <input type="text"
                         className="additem-input" 
                        //  onChange={(event) => changeCred(event)}
                         defaultValue={props.data.room}
                         name="room" 
                         placeholder="Enter room "
                         required/>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-5 w-full">
                    <div className="mb-4 w-full">
                        <label className="block text-gray-700">City</label>
                        <input type="text"
                         className="additem-input" 
                         defaultValue={props.data.city}
                        
                         name="city" 
                         placeholder="Enter city"
                         required/>
                    </div>
                    <div className="mb-4 w-full">
                        <label className="block text-gray-700">State</label>
                        <input type="text"
                         className="additem-input"
                        //  onChange={(event) => changeCred(event)} 
                         defaultValue={props.data.state}
                         name="state" 
                         placeholder="Enter state "
                         required/>
                    </div>
    
                </div>
                
      <div className="flex flex-col sm:flex-row gap-5 w-full pt-2">
                    <div className="mb-4 w-full">
                    <label className="block text-gray-700">Description </label>
                    <textarea defaultValue={props.data.description}
                        // onChange={(event) => changeCred(event)}
                          className=" additem-input"
                          type="text"
                          name="description"
                          placeholder="Write description about dorm"
                          required rows="10"></textarea>
                    </div>

                </div>
                <div className='flex justify-between'>
                <button className="btn bg-slate-400" type='submit'  onClick={(e)=>{props.toggle(); setIsClose(true)}} > Close</button>
                <button className="btn text-neutral-50 bg-green-600" type='submit'>Submit</button>
                </div>
          
</form>
                      </div>
    <div className="modal-action">
      {/* <form method="dialog">
        <button className="btn">Close</button>
      </form> */}
    </div>
  </div>
</dialog>
        </div>
    );
};

export default EditDorm;
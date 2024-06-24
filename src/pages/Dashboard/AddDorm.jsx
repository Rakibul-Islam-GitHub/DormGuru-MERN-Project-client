
import { useState } from 'react';
import { FaCloudUploadAlt ,FaTrashAlt} from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import './Dashboard.css'
import { addDorm } from '../../store/slices/dorm-slice';
import { useNavigate } from 'react-router-dom';

function AddDorm() {

const [dormValue, setDormValue] = useState({dormName:'', description:'', versityName:'', foundingYear:'', city:'', state:'', room:''} )  
const [image, setImage]= useState([])
  const dispatch=useDispatch()
  const navigate = useNavigate()
    const changeCred = (event) => {
        setDormValue({ ...dormValue, [event.target.name]: event.target.value })
    }
    const handleImage = (e) => {
      e.preventDefault();
      const files = Array.from(e.target.files);
      
      files.forEach((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setImage((prev) => [...prev, reader.result]);
        };
      });
    };

const handleImageDelete=(img,ind)=> {

 const filteredimage= image.filter(image => image !== img)
  setImage(filteredimage)
}

    const doAddDorm = async(event) => {  

event.preventDefault()
      if (!dormValue.dormName || !dormValue.description || !dormValue.versityName || !dormValue.foundingYear ||  !dormValue.city || !dormValue.state || !dormValue.room) {
       alert('Please fill all the field')
        return
      }else{
     
      const formData= new FormData();
      Array.from(image).forEach((img) => {
        formData.append('image[]', img)
      })

      formData.append("dormName", dormValue.dormName)
      formData.append("description", dormValue.description)
      formData.append("versityName", dormValue.versityName)
      formData.append("foundingYear", dormValue.foundingYear)
      formData.append("city", dormValue.city)
      formData.append("state", dormValue.state)
      formData.append("stock", dormValue.stock)
      formData.append("room", dormValue.room)

      
dispatch(addDorm({formData,setDormValue, navigate}))

       
      }
 
    }
    
  return (
    <>

   
        <div>
  
       
      <div className="container-fluid  mx-auto">
<div className='container'>


      <div className="flex flex-col sm:flex-row items-center gap-5 w-full">
                    <div className="mb-4 w-full">
                        <label className="block text-gray-700">Dorm Name</label>
                        <input type="text"
                         className="additem-input" 
                         value={dormValue.dormName}
                         onChange={(event) => changeCred(event)}
                         name="dormName" 
                         placeholder="Enter dorm name"
                         required/>
                    </div>
                    <div className="mb-4 w-full">
                        <label className="block text-gray-700">University Name</label>
                        <input type="text"
                         className="additem-input" 
                         value={dormValue.versityName}
                         onChange={(event) => changeCred(event)}
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
                         value={dormValue.foundingYear}
                         onChange={(event) => changeCred(event)}
                         name="foundingYear" 
                         placeholder="Enter Founding Year"
                         required/>
                    </div>
                    <div className="mb-4 w-full">
                        <label className="block text-gray-700">Available Room</label>
                        <input type="text"
                         className="additem-input" 
                         onChange={(event) => changeCred(event)}
                         value={dormValue.room}
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
                         value={dormValue.city}
                         onChange={(event) => changeCred(event)}
                         name="city" 
                         placeholder="Enter city"
                         required/>
                    </div>
                    <div className="mb-4 w-full">
                        <label className="block text-gray-700">State</label>
                        <input type="text"
                         className="additem-input"
                         onChange={(event) => changeCred(event)} 
                         value={dormValue.state}
                         name="state" 
                         placeholder="Enter state "
                         required/>
                    </div>
                   
                </div>
                
      <div className="flex flex-col sm:flex-row gap-5 w-full pt-2">
                    <div className="mb-4 w-full">
                    <label className="block text-gray-700">Description </label>
                    <textarea value={dormValue.description}
                        onChange={(event) => changeCred(event)}
                          className=" additem-input"
                          type="text"
                          name="description"
                          placeholder="Write description about dorm"
                          required rows="10"></textarea>
                    </div>
                    <div className='mb-4 w-full mt-3'>
                                  <input onChange={(e)=>handleImage(e)} type="file" 
                                  
                                  id='imageUpload' multiple accept='image/png, image/jpeg, image/gif, image/jpg' hidden/>
                                 
                                  <label htmlFor="imageUpload" className='img-upload-style additem-input'>
                                 
                                      <FaCloudUploadAlt className='upload-icon'/>
                                    <span>
                                      Upload image (optional)
                                      </span>
                                 </label>


 <div className="flex space-x-2 pt-2">
                                    {image.map((img, ind) =>(
                                        <div key={ind} className="  img-holder no-gutters p-2">
                                         
                                            <i onClick={()=>handleImageDelete(img, ind)} className=" text-red-700 cursor-pointer">
                                            <FaTrashAlt/>
                                            </i>
                                        <img className='img-fluid form-img p-2' src={img}alt="product" width={80} height={80}/>
                                        </div>
                                    ))}
                                </div>

                      </div>
                </div>

                      </div>
        
       

 
      
      </div>
   
     
          <button className='btn btn-primary add-dorm-btn' 
       
          type='submit' onClick={(event)=>doAddDorm(event)}>
            Submit
          </button>

  
        </div>
   
    
  

 
    </>
  );
}


export default AddDorm

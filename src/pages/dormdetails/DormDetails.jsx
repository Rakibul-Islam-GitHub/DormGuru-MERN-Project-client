import './dormdetails.css'
import dormImg from './dorm1.jpg'
import { FiMapPin } from "react-icons/fi";
import { BsHouseCheckFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdNaturePeople } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { BsPatchQuestion } from "react-icons/bs";
import AddRatingModal from '../../component/AddRatingModal';
import { useState } from 'react';

const DormDetails = () => {
    const [modalAdd, setModalAdd]= useState(false)
    const [modalEdit, setModalEdit]= useState(false)
    const [modalDelete, setModalDelete]= useState(false)
    const [tableId, settableId] = useState({})
    const [tableData, settableData] = useState({})
     // add modal

     const handleAdd = (id) => {
    settableId(id)
        document.getElementById('addRating').showModal()
        }
        const toggleAddModal = () => document.getElementById('addRating').close(); 
    return (
        <div className="dormdetails"> 
            <div className="container mx-auto md:px-20">
                <div className='flex flex-col space-y-10 md:space-y-0 md:flex-row space-x-0 md:space-x-5'>

                    <div className='dorm-img w-full  md:w-2/3'>
                        <div className='flex flex-col space-y-5'>
                            <img className='rounded-xl' src={dormImg} alt="" />
                            <div className='flex justify-between'>
                            <h1 className='text-2xl md:text-4xl'>This is dorm title</h1>
                            <div className='px-3 py-2 dorm-details-name'>
                                <p>Posted By:</p>
                                <br />
                                <p>Jhon Doe</p>
                            </div>
                            </div>
                            
                            <div className='flex space-x-2 items-center'>
                            <FiMapPin/>
                            <p className=''>  125 AB road, New york, USA</p>
                            </div>
                            

                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aut natus voluptates soluta nobis laborum, corrupti quo, fugit atque incidunt tempore, sit doloremque. Ea unde sit impedit quaerat quis, illum corporis fuga dolore? Culpa illum quasi odio maiores quaerat possimus soluta unde quae qui cupiditate ex, obcaecati ipsa pariatur doloribus.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aut natus voluptates soluta nobis laborum, corrupti quo, fugit atque incidunt tempore, sit doloremque. Ea unde sit impedit quaerat quis, illum corporis fuga dolore? Culpa illum quasi odio maiores quaerat possimus soluta unde quae qui cupiditate ex, obcaecati ipsa pariatur doloribus.
                            </p>

                            <div className='review-section pb-5 pt-10'>
                                <div className='flex justify-between'>
                                <h2 className='font-bold text-lg'>Read 12 Reviews</h2>
                            <form>
  <label className='mr-3' htmlFor="cars">Sort Review by:</label>
  <select className='border p-2 mb-2' name="cars" id="cars">
    <option value="1">Most Recent</option>
    <option value="2">Upvote (high to low)</option>
    <option value="3">Upvote (low to high)</option>
    
  </select>
 
</form>

                                </div>
                               
                                <hr />
                                <div className='flex space-x-5 mt-10'>
                                   <div className='rounded-s-full'>
                                   <img className='rounded-full' src="https://via.placeholder.com/80x80" alt="" />
                                   </div>

                                    <div className='flex flex-col space-y-2'>
                                    <div className='flex justify-between'>
                                        <h2>Jhone Doe</h2>
                                        <span className='flex space-x-2 items-center'> 
                                            <span className='mt-1'>10</span>
                                             <SlLike className='cursor-pointer'/>
                                             
                                             </span>

                                        </div>
                                        <p>United State</p>
                                        <p>20 june, 2025</p>
                                        <div className='flex color-yellow'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                </div>
                                <p className='pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita exercitationem saepe quod amet minus suscipit voluptate quo doloremque possimus, dolor facilis, dignissimos sit autem veritatis?</p>
                                    </div>

                                </div>

                                <div className='flex space-x-5 mt-10'>
                                   <div className='rounded-s-full'>
                                   <img className='rounded-full' src="https://via.placeholder.com/80x80" alt="" />
                                   </div>

                                    <div className='flex flex-col space-y-2'>
                                    <div className='flex justify-between'>
                                        <h2>Jhone Doe</h2>
                                        <span className='flex space-x-2 items-center'> 
                                            <span className='mt-1'>10</span>
                                             <SlLike className='cursor-pointer'/></span>

                                        </div>
                                        <p>United State</p>
                                        <p>20 june, 2025</p>
                                        <div className='flex color-yellow'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                </div>
                                <p className='pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita exercitationem saepe quod amet minus suscipit voluptate quo doloremque possimus, dolor facilis, dignissimos sit autem veritatis?</p>
                                    </div>

                                </div>
                                <div className='float-right'>
                                <button className="btn btn-wide mt-6 bg-violet-500 bg-yellow-400 shadow-lg" onClick={() => handleAdd(2)}>Add New Review</button>

                                </div>
<AddRatingModal dormId = {tableId} toggle = {toggleAddModal}/>
                            </div>

                            <div className='qna-section pt-10 pb-20 space-y-3'>
                            <h2 className='font-bold text-lg'>Q & A</h2>
                            <hr />
                            <div className='flex flex-col space-y-5 pt-3'>
                               <div className='flex space-x-3'>
                               <div>
                                    <BsPatchQuestion size={35}/>
                                </div>
                                <div className='space-y-2'>
                                    <em>Do you have any accommodation available?</em>
                                    <p className='text-sm'>By Jhon Doe on 20 june, 2025</p>
                                    <a className='underline' href="">Be the first to reply!</a>
                                </div>
                               </div>

                               

                            </div>
                            <div className='flex flex-col space-y-5 pt-3'>
                               <div className='flex space-x-3'>
                               <div>
                                    <BsPatchQuestion size={35}/>
                                </div>
                                <div className='space-y-2'>
                                    <em>Do you have any accommodation available?</em>
                                    <p className='text-sm'>By Jhon Doe on 20 june, 2025</p>
                                    <a className='underline' href="">Be the first to reply!</a>
                                </div>
                               </div>

                               

                            </div>

                            <div className='pt-8'>
                                <textarea className='border p-2 w-full md:w-1/2' name="qna" placeholder='Type your question here' id="" rows={7} cols="30"></textarea>
                            </div>
                            <button className='qna-btn'>Submit</button>
                            
                            </div>

                        </div>
                    </div>
                    <div className='w-full  md:w-1/3'>

                    <h2 className='pl-0 py-2 details-info'>Details Information</h2>
                    <div className='flex flex-col space-y-6 mt-5'>

                        <div className='flex flex-col space-y-2'>
                            <h2 className='font-bold '>University Name</h2>
                            <p>ABC University</p>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <h2 className='font-bold '>Year Established</h2>
                            <p className='text-md'>2022</p>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <h2 className='font-bold '>State</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <h2 className='font-bold '>Room Offered</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>

                        <div className='sub-rating pt-8'>

                            <div className='flex justify-between'>
                                <div className='flex space-x-2 items-center'>
                                <BsHouseCheckFill className='text-lg'/>
                                <h2 className='font-bold text-lg'>Room</h2>
                                </div>
                                <div className='flex color-yellow'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                </div>
                            </div>

                            <div className='flex justify-between'>
                                <div className='flex space-x-2 items-center'>
                                <FaBath className='text-lg'/>
                                <h2 className='font-bold text-lg'>Bathroom</h2>
                                </div>
                                <div className='flex color-yellow'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex space-x-2 items-center'>
                                <LuMapPin className='text-lg'/>
                                <h2 className='font-bold text-lg'>Location</h2>
                                </div>
                                <div className='flex color-yellow'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex space-x-2 items-center'>
                                <MdNaturePeople className='text-lg'/>
                                <h2 className='font-bold text-lg'>Amenities</h2>
                                </div>
                                <div className='flex color-yellow'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                </div>
                            </div>

                        </div>

                    </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default DormDetails;
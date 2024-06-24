
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDorm } from '../../store/slices/dorm-slice';
import { FaTrashAlt } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useEffect, useState } from 'react';
import ViewDorm from '../../component/ViewDorm';
import EditDorm from '../../component/EditDorm';
import DeleteDorm from '../../component/DeleteDorm';

const DormList = () => {
    const dispatch = useDispatch()
    const {dormData, status, error} = useSelector((state) => state.dorm);
    const [modalView, setModalView]= useState(false)
    const [modalEdit, setModalEdit]= useState(false)
    const [modalDelete, setModalDelete]= useState(false)
    const [tableId, settableId] = useState({})
    const [tableData, settableData] = useState({})
    useEffect(() => {
        let isMounted = true
       
          dispatch(fetchDorm())
        
        return () => {
          isMounted = false
        }
      }, [dispatch])
          // delete match details

    const handleDelete = (id) => {
        settableId(id)
        setModalDelete(true)
        document.getElementById('delete').showModal()
        }
        const toggleDeleteModal = () => document.getElementById('delete').close(); 

          // Edit match details

    const handleEdit = (data) => {
        settableData(data)
        setModalEdit(true)
        document.getElementById('edit').showModal()
        }
        const toggleEditModal = () => document.getElementById('edit').close(); 

    // view match details
    const handleView = (data) => {
        settableData(data)
        document.getElementById('my_modal_1').showModal()
        }
        const toggleViewModal = () => setModalView(!modalView); 

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold">Dorm List</h1>
                <Link to="/add-dorm" className="bg-[#ab8627] text-white px-4 py-4 rounded-md">Add New Dorm</Link>
            </div>

            <div className="overflow-x-auto border">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>image</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Room</th>
                            <th>Founding Year</th>
                            <th>Description</th>
                            <th>University Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        dormData && dormData.length >0 ? dormData.map((single) => 
                        <tr key={single._id}>
                            <td><img src={single.image[0]} alt='jmage' width={40} height={40}/></td>
                            <td>{single.dormName}</td>
                            <td>{single.city}</td>
                            <td>{single.state}</td>
                            <td>{single.room}</td>
                            <td>{single.foundingYear}</td>
                            <td>{single.description}</td>
                            <td>{single.versityName}</td>
                            
                            <td className="py-2 px-4 border-b">

                                <button className="btn dorm-btn text-orange-500 font-bold" onClick={()=>handleEdit(single)}>Edit</button>
                                <button className="btn dorm-btn text-green-950 font-bold"  onClick={()=>handleView(single)}>View</button>
                                <button className="btn dorm-btn text-red-600 font-bold " onClick={()=>handleDelete(single._id)}>Delete</button>
                             
                            </td>
                        </tr>
                        ):'No data found'
                      }


                    </tbody>
                </table>
                <ViewDorm data = {tableData}/>
                <EditDorm data = {tableData} toggle= {toggleEditModal}/>
                <DeleteDorm id = {tableId} toggle= {toggleDeleteModal}/>

            </div>


        </div>
    );
};

export default DormList;


import { Link } from 'react-router-dom';

const ReviewForm = () => {
  

  return (
    <div>
    {/* <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Dorm List</h1>
        <Link to="/dashboard/add-dorm" className="bg-[#ab8627] text-white px-4 py-4 rounded-md">Add New Review</Link>
    </div> */}

    <div className="overflow-x-auto border mt-5">
        <table className="table">
            {/* head */}
            <thead>
                <tr>
                    <th></th>
                    <th>User</th>
                    <th>Dorm Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {/* row 1 */}
                <tr>
                    <th>1</th>
                    <td>User</td>
                    <td>Dorm Name</td>
                    <td className="py-2 px-4 border-b">
                        <Link  className="text-orange-500 font-bold hover:underline mr-4">Edit</Link>
                        <button  className="text-red-600 font-bold hover:underline">Delete</button>
                    </td>
                </tr>
                {/* row 2 */}
                <tr className="hover">
                    <th>2</th>
                    <td>User</td>
                    <td>Dorm Name</td>
                    <td className="py-2 px-4 border-b">
                        <Link  className="text-orange-500 font-bold hover:underline mr-4">Edit</Link>
                        <button  className="text-red-600 font-bold hover:underline">Delete</button>
                    </td>
                </tr>
                {/* row 3 */}
                <tr>
                    <th>3</th>
                    <td>User</td>
                    <td>Dorm Name</td>
                    <td className="py-2 px-4 border-b">
                        <Link  className="text-orange-500 font-bold hover:underline mr-4">Edit</Link>
                        <button  className="text-red-600 font-bold hover:underline">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>


</div>
  );
};

export default ReviewForm;

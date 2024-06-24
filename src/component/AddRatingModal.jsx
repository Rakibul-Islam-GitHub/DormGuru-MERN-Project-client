import React, { useState } from 'react';
import RatingComponent from './RatingComponent';
import { useDispatch } from 'react-redux';
import { addReview } from '../store/slices/review-slice';

const AddRatingModal = (props) => {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        room: 4.75,
        bathroom: 0,
        location: 0,
        amenities: 0,
      });
      const [reviewText, setReviewText] = useState('')
      
      function handleRating(event) {
        event.preventDefault();
        alert(JSON.stringify(data, undefined, 2));
      }
const handleAddReview = () => {
    const state = {...data, reviewText,dormId:props.dormId}
    if(data && reviewText){
dispatch(addReview({state, toggle:props.toggle}))
    }
}
      return (
        <div>
            <dialog id="addRating" className="modal">
  <div className="modal-box">
  <h3 className="font-bold text-lg mb-2">Add Review</h3>
<hr/>
    <RatingComponent data={data} setData = {setData} handleRating= {handleRating}/>
    
    <div className="mb-4 w-full mt-5">
                    <label className="block text-gray-700">Review </label>
                    <textarea value={reviewText}
                        onChange={(event) => setReviewText(event.target.value)}
                          className=" additem-input"
                          type="text"
                          name="review"
                          placeholder="Write description about dorm"
                          required rows="10"></textarea>
                    </div>
              <div className="modal-action">
      <div className='flex justify-between'>
        <button className="btn bg-slate-400" onClick={(e)=>{props.toggle();}}>Close</button>
        <button className="btn bg-red-800 text-neutral-50 ms-2 hover:bg-sky-700 " onClick={handleAddReview}>Confirm</button>
      </div>
    </div>
  </div>
</dialog>
        </div>
    );
};

export default AddRatingModal;
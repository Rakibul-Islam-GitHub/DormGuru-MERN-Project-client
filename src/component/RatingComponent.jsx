import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const RatingComponent = ({data,setData, handleRating}) => {
 
    return (
        <div>
            <form onSubmit={handleRating} className='flex flex-col mt-2 space-y-3'>
     
      <div>
        <div id="room">Room</div>
        <Rating
          isRequired
          style={{ maxWidth: 130 }}
          value={data.room}
          visibleLabelId="room"
          onChange={(selectedValue) =>
            setData((prevData) => ({ ...prevData, room: selectedValue }))
          }
        />
      </div>

      <div>
        <div id="bathroom">Bathroom</div>
        <Rating
          isRequired
          style={{ maxWidth: 130 }}
          value={data.bathroom}
          visibleLabelId="bathroom"
          onChange={(selectedValue) =>
            setData((prevData) => ({ ...prevData, bathroom: selectedValue }))
          }
        />
      </div>

      <div>
        <div id="location_rating">Location</div>
        <Rating
          isRequired
          style={{ maxWidth: 130 }}
          value={data.location}
          visibleLabelId="location_rating"
          onChange={(selectedValue) =>
            setData((prevData) => ({ ...prevData, location: selectedValue }))
          }
        />
      </div>
      <div>
        <div id="amenities">Amenities</div>
        <Rating
          isRequired
          style={{ maxWidth: 130 }}
          value={data.amenities}
          visibleLabelId="amenities"
          onChange={(selectedValue) =>
            setData((prevData) => ({ ...prevData, amenities: selectedValue }))
          }
        />
      </div>

    </form>
        </div>
    );
};

export default RatingComponent;
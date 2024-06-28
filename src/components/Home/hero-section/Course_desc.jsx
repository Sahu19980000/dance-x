import React, { useState } from 'react'

const Course_desc = ({text}) => {

    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
  
    return (
      <div>
        <p className='text-white'>
          {isReadMore ? `${text.slice(0, 300)}...` : text}
          <span onClick={toggleReadMore} style={{ color: '#fa8326', cursor: 'pointer' }}>
            {isReadMore ? ' Read More' : ' Read Less'}
          </span>
        </p>
      </div>
    );
}

export default Course_desc
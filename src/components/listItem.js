import React from 'react';

const ListItem = ({ username, images }) => {


  return (
    <div className='list-item'>
      <div className="images">
        <img src={images.jpg.image_url} alt="" />
      </div>
      <div className="title">
        {username}
      </div>

    </div>
  );
};

export default ListItem;
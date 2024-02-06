import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, searchUser } from '../thunk/sevices';
import ListItem from './listItem';


const List = () => {
  const [value, setValue] = useState('')
  const { comments, isLoading, isErrorMessage } = useSelector(state => state.comments);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser())
  }, [])

  //-----------Писковик
  const handleSubmit=(event)=>{
    event.preventDefault()
    dispatch(searchUser(value))
    setValue('')
  }

  return (
    <div className='flex-block'>
      <div className="input-block">
        <h1 className='logo'>LOGO</h1>
        <form onSubmit={handleSubmit} action="">
          <input 
            value={value}
            //атрибут={состояние}
            onChange={(e) => (e.targetsetValue.value)}
            type="text" />
          <button type='submit'>Ввод</button>
        </form>
      </div>
      {
        comments.map((item,i) => <ListItem key={i} {...item} />)
      }
    </div>
  );
};

//onSubmit - эта для форма Ентер

export default List;
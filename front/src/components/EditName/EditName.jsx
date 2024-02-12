import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import auth_service, { updateProfile } from '../../actions/userAction'; // Importez updateProfile avec l'alias auth_service

const EditName = () => {
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const userName = useSelector((state) => state.user.userName);
  const [edit, showEdit] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const [newUserName, setNewUserName] = useState('');

  const submit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(newUserName, token)); // Utilisez directement updateProfile ici
    setNewUserName(''); // Réinitialisez le champ d'entrée du nouveau nom d'utilisateur après la soumission
    showEdit(false);
  };

  useEffect(() => {
    if (token !== null) {
      dispatch(auth_service.userProfile(token));
    }
  }, [token, dispatch]);

  return (
    <div className="header">
      <h1>{edit ? 'Edit user info' : `Welcome back ${firstName} ${lastName}`}</h1>
      {
        edit ?
          <form className='edit-inputs-buttons' onSubmit={submit}>
            <div className='edit-inputs'>
              <input type="text" className='edit-input' onChange={(e) => { setNewUserName(e.target.value) }} placeholder={userName} required />
              <input type="text" className='edit-input' placeholder={firstName} disabled />
              <input type="text" className='edit-input' placeholder={lastName} disabled />
            </div>
            <div className='edit-buttons'>
              <button className='edit-button-option' type='submit'>Save</button>
              <button className='edit-button-option' onClick={() => { showEdit(false) }}>Cancel</button>
            </div>
          </form>
          :
          <button className="edit-button" onClick={() => { showEdit(true) }}>Edit Name</button>
      }
    </div>
  )
}

export default EditName;

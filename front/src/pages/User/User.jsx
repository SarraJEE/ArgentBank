import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Account from '../../components/Account/Account';
import auth_service from '../../redux/services/ApiService';
import { dataAccounts } from '../../data/data';
import EditName from '../../components/EditName/EditName';


const User = () => {
    document.title = "Argent Bank - User Page";
    const user = useSelector(state => state.user);
    console.log(user)
    // Sélectionnez les données de l'utilisateur depuis le state Redux
    const token = useSelector(state => state.login.token !== null ? state.login.token : localStorage.getItem('token'));
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false); // État pour suivre l'état d'édition

    useEffect(() => {
        dispatch(auth_service.userProfile(token));
        if (token === null) {
            navigate('/');
            sessionStorage.clear();
        }
    }, [token, dispatch, navigate]);

    // Gérez le changement d'état d'édition
    const handleEditNameClick = (value) => {
      
        setIsEditing(value);
    };
    

    return (
        <main className={`main ${isEditing ? 'editing' : 'bg-dark'}`}>
            {console.log("isEditing:", isEditing)}
            <EditName onEdit={handleEditNameClick} /> {/* Passez une fonction de rappel pour gérer le clic sur le bouton d'édition */}
            <h2 className="sr-only">Accounts</h2>
            {dataAccounts.map(dataAccount =>
                <Account
                    accountTitle={dataAccount.accountTitle}
                    accountAmount={dataAccount.accountAmount}
                    accountAmountDescription={dataAccount.accountAmountDescription}
                    key={dataAccount.id}
                    editing={isEditing} // Passer l'état d'édition au composant Account
                />
            )}
        </main>
    );
}

export default User;

import React, { useEffect } from 'react';
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
    const token = useSelector(state => state.login.token !== null ? state.login.token : localStorage.getItem('token') !== null ? localStorage.getItem('token') : null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(auth_service.userProfile(token));
        if (token === null) {
            navigate('/');
            sessionStorage.clear();
        }
    }, [token, dispatch, navigate]);

    return (
        <main className="main bg-dark">
            <EditName/>
            <h2 className="sr-only">Accounts</h2>
            {dataAccounts.map(dataAccount =>
                <Account
                    accountTitle={dataAccount.accountTitle}
                    accountAmount={dataAccount.accountAmount}
                    accountAmountDescription={dataAccount.accountAmountDescription}
                    key={dataAccount.id}
                />
            )}
        </main>
    );
}

export default User;

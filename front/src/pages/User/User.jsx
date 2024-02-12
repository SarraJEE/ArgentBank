import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Account from '../../components/Account/Account';
import auth_service from '../../actions/userAction';
import { dataAccounts } from '../../data/data';
/**
 * Creates User page component
 * @returns { HTMLElement}
 */
const User = () => {
    document.title = "Argent Bank - User Page";
    const token = useSelector((state) => state.login.token !== null ? state.login.token : localStorage.getItem('token') !== null ? localStorage.getItem('token') : null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(auth_service.userProfile(token));

    useEffect(() => {
        if (token === null) {
            navigate('/')
            sessionStorage.clear()
        }
    }, [token, navigate])

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br /></h1>
                <button className="edit-button">Edit Name</button>
            </div>
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
    )
}

export default User;

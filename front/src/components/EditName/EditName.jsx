import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../redux/services/ApiService";

const EditName = ({ onEdit }) => {
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const userName = useSelector((state) => state.user.userName);
  const [edit, showEdit] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const [newUserName, setNewUserName] = useState("");

  const submit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(newUserName, token));
    setNewUserName("");
    showEdit(false);
    onEdit(false);
  };

  useEffect(() => {
    if (!edit) {
        setNewUserName(userName);
    }
}, [edit, userName]);
  
  return (
    <div className="header">
      <h2 className={`header ${edit ? "editing" : ""}`}>
        {edit ? (
          "Edit user info"
        ) : (
          <>
            Welcome back <br /> {firstName} {lastName}
          </>
        )}
      </h2>

      {edit ? (
        <form className="edit-inputs-buttons" onSubmit={submit}>
          <div className="edit-inputs">
            <div className="edit-input-group">
              <label htmlFor="username">User name:</label>
              <input
                type="text"
                id="username"
                name="username"
                className="edit-input"
                onChange={(e) => {
                  setNewUserName(e.target.value);
                }}
                value={newUserName}
                required
              />
            </div>
            <div className="edit-input-group">
              <label htmlFor="First name">First name :</label>
              <input
                type="text"
                id="First name"
                className="edit-input"
                value={firstName}
                disabled
              />
            </div>
            <div className="edit-input-group">
              <label htmlFor="Last name">Last name :</label>
              <input
                type="text"
                id="Last name"
                className="edit-input"
                value={lastName}
                disabled
              />
            </div>
          </div>
          <div className="edit-buttons">
            <button className="edit-button-option" type="submit">
              Save
            </button>
            <button
              className="edit-button-option"
              onClick={() => {
                setNewUserName(userName);
                showEdit(false);
                onEdit(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button
          className="edit-button"
          onClick={() => {
            showEdit(true);
            onEdit(true);
          }}
        >
          Edit Name
        </button>
      )}
    </div>
  );
};

export default EditName;

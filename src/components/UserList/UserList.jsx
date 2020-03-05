import React from "react";
import UserModal from "../UserModal/UserModal";

const UserList = (props) => {
  const { users } = props;
  return (
    <>
      <div className="row">
        {users && users.map(user => {
          return (
            <div className="col-2">
              <img src={user.picture.large} alt={user.name.first} />
              <br />
              <button
                type="button"
                class="btn btn-link"
                data-toggle="modal"
                data-target={`#${user.name.first}`}
              >{user.name.first} {user.name.last}</button>
              <UserModal userData={user} />
            </div>
          )
        })}
      </div>
    </>
  )
};

export default UserList;

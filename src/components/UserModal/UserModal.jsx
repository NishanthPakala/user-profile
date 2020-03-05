import React from "react";

const UserModal = (props) => {
  const { userData } = props;
  const dateOfB = Date(userData.dob.date);
  return (
    <div className="modal fade" id={userData.name.first} tabIndex="-1" role="dialog"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <div className="text-center">
              <img src={userData.picture.large} alt={userData.name.first} className="rounded-circle" />
              <p><strong>{userData.name.first} {userData.name.last}</strong></p>
              <p>Email: {userData.email} | Phone: {userData.phone} </p>
              <p>Gender: {userData.gender} | Age: {userData.dob.age}</p>
              <address>
                <strong>Address:</strong><br />
                {userData.location.street.number}, {userData.location.street.name} <br />
                {userData.location.city}, {userData.location.state} <br />
                {userData.location.country} - {userData.location.postcode}
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default UserModal;

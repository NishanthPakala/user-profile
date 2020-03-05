import React from "react";

const SearchUserForm = (props) => {
  const { onchange, onsubmit, userCount } = props;
  return (
    <>
      <input
        className="form-control"
        type="text"
        value={userCount}
        onChange={onchange}
        size="sm"
      />
      <br/>
      <button onClick={onsubmit} className="btn btn-primary">Submit</button>
    </>
  )
};

export default SearchUserForm;

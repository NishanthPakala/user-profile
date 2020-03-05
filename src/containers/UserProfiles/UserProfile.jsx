import React, { Component } from "react";
import SearchUserForm from "../../components/SearchUserForm/SearchUserForm";
import getUserProfilesApi from "../../api/getUserProfilesApi";
import UserList from "../../components/UserList/UserList";
import UserModal from "../../components/UserModal/UserModal";


class UserProfiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countValue: 1,
      error: '',
      users: []
    }
  }

  onchange = (e) => {
    e.preventDefault();
    this.setState({
      countValue: e.target.value
    })
  };

  onsubmit = (e) => {
    e.preventDefault();
    const { countValue } = this.state;
    this.setState({
      error: ''
    });
    if (countValue === '' || countValue > 20) {
      this.setState({
        error: "Value should be >= 1 or <20"
      })
    } else {
      getUserProfilesApi(countValue).then(res => {
        this.setState({
          users: res.results
        })
      })
    }
  };

  render() {
    const { countValue, error, users } = this.state;
    return (
      <div>
        {error}
        <SearchUserForm
          onchange={this.onchange}
          onsubmit={this.onsubmit}
          userCount={countValue}
        />
        <br />
        <hr />
        {users.length && <UserList users={users} />}
      </div>
    );
  }
}

export default UserProfiles;

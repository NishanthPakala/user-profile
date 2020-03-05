const getUserProfilesApi = (count) => {
  return fetch(`https://randomuser.me/api/?results=${count}`).then((res) => {
    return res.json();
  })
};

export default getUserProfilesApi;

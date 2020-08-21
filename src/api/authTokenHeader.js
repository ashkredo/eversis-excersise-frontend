const authTokenHeader = () => {
  const currentUserToken = localStorage.getItem('token');
  if (currentUserToken) {
    return { Authorization: `Bearer ${currentUserToken}` };
  }
  return {};
};

export default authTokenHeader;

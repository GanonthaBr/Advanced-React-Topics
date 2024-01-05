function WithAuth(WrappedComponent, checkPermission) {
  return function WithWrappedComp(props) {
    return checkPermission(props) ? (
      <WrappedComponent {...props} />
    ) : (
      <p>Please login with admin credential</p>
    );
  };
}
const PrivateComponent = () => {
  return <h1>Private Component</h1>;
};
function checkPermission(props) {
  return props.isAdmin === "admin";
}
const WithPrivateComponent = WithAuth(PrivateComponent, checkPermission);

export const Authorization = () => {
  return (
    <div>
      <WithPrivateComponent isAdmin="admin" />
      <br />
      <WithPrivateComponent isAdmin="user" />
    </div>
  );
};

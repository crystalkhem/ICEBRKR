import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <Route
      {...rest}
      render={(props) => {
        return userInfo ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;

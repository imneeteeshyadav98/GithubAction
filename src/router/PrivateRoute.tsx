import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { RootState } from "redux/reducers";

const PrivateRoute = (props) => {
  const user = useSelector((state: RootState) => state.user);

  return user.isLoggedIn ? <Route {...props} /> : <Redirect to="/" />;
  // <Route
  //   {...rest}
  //   render={(props) =>
  //     user.isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
  //   }
  // />
};

export default PrivateRoute;

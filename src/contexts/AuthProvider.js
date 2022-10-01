
import { createContext, useReducer } from "react";

const initialState = {
  isAuthenticated: false,
  user: null,
};
// iniState = object has 2 values

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

//two var contains two strings



const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

const AuthContext = createContext({ ...initialState });
//create context received a copy of initialStte

function AuthProvider({ children }) {

  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async (username, callback) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user: { username } },
    });
    callback();
  };

//function login run two functions, dispatch is simple function return an object  

  const logout = async (callback) => {
    dispatch({ type: LOGOUT });
    callback();
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };




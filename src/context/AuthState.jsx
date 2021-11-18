// import React, { useState, useMemo } from 'react';
// import AuthContext from './Auth-context';

// const AuthState = (props) => {
// 	const [ user, setUser ] = useState(null);
// 	const value = useMemo(() => ({ user, setUser }), [ user, setUser ]);

// 	return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
// };

// export default AuthState;

import { useState, useEffect, useContext } from "react";
import APIHandler from "../api/APIHandler";
import UserContext from "./UserContext";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const userContext = useContext(UserContext);
  const { setCurrentUser, currentUser } = userContext;

  useEffect(() => {
    APIHandler.get("/is-loggedin")
      .then(res => {
        setIsLoggedIn(true);
        setIsLoading(false);
        setCurrentUser(res.data.currentUser);
      })
      .catch(() => {
        setCurrentUser(null);
        setIsLoggedIn(false);
        setIsLoading(false);
      });
  }, [setCurrentUser]);

  return { isLoggedIn, isLoading, currentUser };
};
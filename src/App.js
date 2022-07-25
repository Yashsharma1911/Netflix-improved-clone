import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { Home, Signin, Browse, Signup } from './pages'
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectRoute } from './helpers/routes';
import { useAuthListener } from './hooks'

export default function App() {
  const { user } = useAuthListener();
  return (
    <>
      <Router>
        <Routes>
          <Route path={ROUTES.SIGN_IN} element={<>
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
              <Signin />
            </IsUserRedirect>
          </>}>
          </Route>
          <Route path={ROUTES.SIGN_UP} element={<>
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
              <Signup />
            </IsUserRedirect>
          </>}>
          </Route>
          <Route path={ROUTES.BROWSE} element={<>
            <ProtectRoute user={user}>
              <Browse/>
            </ProtectRoute>
          </>}/>

          <Route path={ROUTES.HOME} element={<>
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
              <Home />
            </IsUserRedirect>
          </>}>
          </Route>
        </Routes>
      </Router >
    </>
  );
}

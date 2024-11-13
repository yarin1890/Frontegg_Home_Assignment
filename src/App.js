import React from 'react';
import './App.css';
import Header from './components/Header'; 
import Footer from './components/Footer';
import { useAuth, useAuthActions, useLoginWithRedirect, ContextHolder, AdminPortal } from "@frontegg/react";

const App = () => {
  const { user, isAuthenticated } = useAuth();
  const { switchTenant } = useAuthActions();
  const loginWithRedirect = useLoginWithRedirect();
  
  // Uncomment this to redirect to login automatically
  // useEffect(() => {
  //   if (!isAuthenticated) {
  // loginWithRedirect();
  //   }
  // }, [isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };
  
  const handleClick = () => {
    AdminPortal.show();
  };
  
  const handleSwitchTenant = () => { 
    switchTenant({ tenantId: 'new-tenant-id' });
  };
    
  return (
    <div className="App">
	  <Header />
      { isAuthenticated ? (
        <div>
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name}/>
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          <div>
            <button onClick={() => alert(user.accessToken)}>What is my access token?</button>
          </div>
		  <div>
		  <button onClick={handleClick}>Settings</button>
		  </div>
          <div>
            <button onClick={() => logout()}>Click to logout</button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Click Here to Login</button>		  
        </div>
      )}
	  <Footer />
    </div>
  );
}

export default App;

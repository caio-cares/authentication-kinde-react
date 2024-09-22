import {KindeProvider, useKindeAuth} from "@kinde-oss/kinde-auth-react";

import UserProfile from './UserProfile';

const App = () => {
  return (
    <KindeProvider
      domain={import.meta.env.VITE_DOMAIN}
      clientId={import.meta.env.VITE_CLIENT_ID}
      redirectUri={import.meta.env.VITE_REDIRECT_URI}
      logoutUri={import.meta.env.VITE_LOGOUT_URI}
    >
      <LoginButton />
      

      <UserProfile />
    </KindeProvider>
  );
};

const LoginButton = () => {
  const { login } = useKindeAuth();
  const { isAuthenticated } = useKindeAuth();

  return (
    isAuthenticated ? '' : <button onClick={() => login()}>Login with Kinde</button>
  );
};

export default App;
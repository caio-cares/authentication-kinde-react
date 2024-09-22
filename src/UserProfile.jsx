import {useKindeAuth} from "@kinde-oss/kinde-auth-react";

const UserProfile = () => {
  const { user, isAuthenticated, logout } = useKindeAuth();

  if (!isAuthenticated) {
    return <p>Você não está logado.</p>;
  }

  return (
    <div>
      <h2>Bem-vindo, {user?.given_name} {user?.family_name} !</h2>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

export default UserProfile;
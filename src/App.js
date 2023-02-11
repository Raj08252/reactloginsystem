import './App.css';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect } = useAuth0();
  const { logout,user, isAuthenticated } = useAuth0();
  return (
    <div className="App">
     { isAuthenticated && (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )}
    {isAuthenticated ?<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>:<button onClick={() => loginWithRedirect()}>Log In</button>}
    </div>
  );
}

export default App;

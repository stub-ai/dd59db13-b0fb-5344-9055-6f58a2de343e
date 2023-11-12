import { useContext } from 'react';
import { UserContext } from '../pages/_app';

export default function Header() {
  const context = useContext(UserContext);

  if (!context) {
    return null;
  }

  const { user, setUser } = context;

  const handleLogout = () => {
    // Handle logout logic here
    setUser(null);
  };

  return (
    <header>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <p>Please login to access the site.</p>
      )}
    </header>
  );
}
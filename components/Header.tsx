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
    <header className="p-4 bg-blue-500 text-white flex justify-between items-center">
      <h1 className="text-2xl">My App</h1>
      {user ? (
        <button onClick={handleLogout} className="bg-red-500 p-2 rounded text-white">
          Logout
        </button>
      ) : (
        <p>Please login to access the site.</p>
      )}
    </header>
  );
}
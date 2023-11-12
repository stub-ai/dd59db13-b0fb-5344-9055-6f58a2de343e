import { useContext, useState } from 'react';
import { UserContext } from './_app';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Photos from '../components/Photos';

export default function Home() {
  const context = useContext(UserContext);
  const [showLogin, setShowLogin] = useState(true);

  if (!context) {
    return (
      <div>
        {showLogin ? (
          <Login toggleForm={() => setShowLogin(false)} />
        ) : (
          <Signup toggleForm={() => setShowLogin(true)} />
        )}
      </div>
    );
  }

  const { user } = context;

  if (!user) {
    return (
      <div>
        {showLogin ? (
          <Login toggleForm={() => setShowLogin(false)} />
        ) : (
          <Signup toggleForm={() => setShowLogin(true)} />
        )}
      </div>
    );
  }

  return <Photos />;
}
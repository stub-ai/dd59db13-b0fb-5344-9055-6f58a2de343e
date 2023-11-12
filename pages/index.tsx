import { useContext, useState } from 'react';
import { UserContext } from './_app';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Photos from '../components/Photos';

export default function Home() {
  const context = useContext(UserContext);
  const [showLogin, setShowLogin] = useState(true);

  // Sample data to be passed to the Photos component
  const photos = [
    {
      id: '1',
      url: 'https://source.unsplash.com/random',
      date: new Date().toISOString(),
      votes: 10,
    },
    {
      id: '2',
      url: 'https://source.unsplash.com/random',
      date: new Date().toISOString(),
      votes: 20,
    },
  ];

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

  // Pass the sample data to the Photos component
  return <Photos photos={photos} />;
}
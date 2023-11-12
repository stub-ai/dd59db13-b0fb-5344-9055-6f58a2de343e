import { useContext } from 'react';
import { UserContext } from './_app';
import Login from '../components/Login';
import Image from 'next/image';

export default function Home() {
  const context = useContext(UserContext);

  if (!context) {
    return <Login />;
  }

  const { user } = context;

  if (!user) {
    return <Login />;
  }

  return (
    <main className="flex flex-col items-center justify-between p-24">
      {/* Display user's photos here */}
    </main>
  );
}
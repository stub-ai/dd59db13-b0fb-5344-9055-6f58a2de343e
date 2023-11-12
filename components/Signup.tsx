import { useState } from 'react';
import axios from 'axios';

interface SignupProps {
  toggleForm: () => void;
}

export default function Signup({ toggleForm }: SignupProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('/api/signup', { email, password });
      if (response.status === 200) {
        window.location.href = '/photos';
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4 p-2 w-64 rounded border border-gray-200"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 p-2 w-64 rounded border border-gray-200"
      />
      <button onClick={handleSignup} className="p-2 w-64 rounded bg-blue-500 text-white">
        Signup
      </button>
      <button onClick={toggleForm} className="mb-4 p-2 w-64 rounded bg-blue-500 text-white">
        Login Instead
      </button>
    </div>
  );
}
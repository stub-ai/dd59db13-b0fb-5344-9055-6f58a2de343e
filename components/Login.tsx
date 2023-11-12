import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authCode, setAuthCode] = useState('');

  const handleLogin = () => {
    // Handle login logic here
  };

  const handleSignup = () => {
    // Handle signup logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4"
      />
      <input
        type="text"
        placeholder="Authentication Code"
        value={authCode}
        onChange={(e) => setAuthCode(e.target.value)}
        className="mb-4"
      />
      <button onClick={handleLogin} className="mb-4">
        Login
      </button>
      <button onClick={handleSignup}>
        Signup
      </button>
    </div>
  );
}
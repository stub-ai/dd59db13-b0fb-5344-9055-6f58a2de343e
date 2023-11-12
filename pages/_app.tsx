import { useState, createContext } from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

interface UserContextType {
  user: null | { email: string };
  setUser: React.Dispatch<React.SetStateAction<null | { email: string }>>;
}

export const UserContext = createContext<UserContextType | null>(null);

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<null | { email: string }>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}
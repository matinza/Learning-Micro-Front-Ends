import React, { useEffect, useState } from 'react';

import { jwt, login } from './cart';
import Login from './Login';

export default function CardContent() {
  const [token, setToken] = useState('');

  useEffect(() => {
    login('sally', '123');
    return jwt.subscribe((val) => setToken(val ?? ''));
  }, []);

  return (
    <div>
      <div></div>JWT: {token}
      <Login />
    </div>
  );
}

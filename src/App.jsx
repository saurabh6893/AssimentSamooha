import { useState, useEffect } from 'react';

const App = () => {
  const [account, setAccount] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (account && username && password) {
      const event = new CustomEvent('signupButtonFocus', { detail: true });
      window.dispatchEvent(event);
    } else {
      const event = new CustomEvent('signupButtonFocus', { detail: false });
      window.dispatchEvent(event);
    }
  }, [account, username, password]);

  return (
    <div>
      <h1>Logo</h1>
      <h2>Heading</h2>
      <h3>Subheading</h3>

      <div>
        <label htmlFor="account">Account</label>
        <input type="text" id="account" value={account} onChange={(e) => setAccount(e.target.value)} />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
    </div>
  );
};

export default App;

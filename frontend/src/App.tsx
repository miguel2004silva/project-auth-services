import { useState } from 'react';
import { Login } from './components/Login';
import { Register } from './components/Register';

function App() {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div className="app-container">
      {isLoginView ? (
        <Login onSwitch={() => setIsLoginView(false)} />
      ) : (
        <Register onSwitch={() => setIsLoginView(true)} />
      )}
    </div>
  );
}

export default App;

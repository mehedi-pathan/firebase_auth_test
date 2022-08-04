import { Route, Routes } from 'react-router-dom';
import './App.css';
import Account from './components/Account';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { AuthContextProvider } from './context/AuthContext';
import Hello from './test/sum';



function App() {
  return (
    <>
      <h1 className='text-center text-3xl font-bold'>Firebase Auth & Context</h1>
      <Hello />


      <AuthContextProvider>
        <Routes>
          <Route exact path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;

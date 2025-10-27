import './App.css'
import AppRoutes from './routes/AppRoutes'
import { BrowserRouter } from "react-router-dom";
// import useAuthStore from './store/useAuthStore';
// import { useEffect } from 'react';
function App() {


  // const { initializeAuth } = useAuthStore();

  // useEffect(() => {
  //   initializeAuth();
  // }, []);


  return (
   <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App

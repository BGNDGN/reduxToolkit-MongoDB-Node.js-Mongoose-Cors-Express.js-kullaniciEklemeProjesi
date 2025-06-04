import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './page/MainPage.jsx';
import RegisterUsers from './components/Register.jsx';  
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/registerUsers" element={<RegisterUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

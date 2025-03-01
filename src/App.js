import "./App.css";
import Sider from './pages/Sider'
import AddToolTipForm from "./pages/AddToolTipForm";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="flex box-border">
      <Sider />
      <AddToolTipForm />
    </div>
  </Router>
  );
}

export default App;

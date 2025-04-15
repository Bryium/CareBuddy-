import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientDashboard from "./components/PatientDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PatientDashboard />} /> {/* default route */}
      </Routes>
    </Router>
  );
}

export default App;

import Home from "./pages/Home";
import Form from "./pages/Form";
import Admin from "./pages/Admin";
import Access from "./pages/Access";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Form" element={<Form />} />
                <Route path="/Admin" element={<Admin />} />
                <Route path="/Access" element={<Access />} />
            </Routes>
        </Router>
    );
};

export default App;

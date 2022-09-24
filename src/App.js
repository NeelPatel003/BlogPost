import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import  {BlogList} from './component/BlogList';
import { AddBlog } from "./component/AddBlog"
import { EditBlog } from "./component/EditBlog"
import './App.css';
function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/addBlog" element={<AddBlog />} />
          <Route path="/editBlog" element={<EditBlog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

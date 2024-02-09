import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import LoginJ from "../pages/login2";
import Nav from "../pages/Nav";
import Create from "../pages/create/create";
import GetPost from "../pages/create/getpost";

const Redux = () => {
    return ( 
        <div className="content">
            <Router>
          <Nav />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<LoginJ />}/>
                    <Route path="/create" element={<Create />} />
                   <Route path="/getpost" element={<GetPost />} /> 
                </Routes>
            </Router>
           
        </div>
     );
}
 
export default Redux;
import React from "react";
import "./styles.scss";
import LandingPage from "../Layouts/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FunFactPage from "../Layouts/FunFactPage";
import FunFactRover from "../FunFacts/FunFactRover";

const App: React.FC = () => {
  // const facts: [] = factList;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Routes>
        <Route path="/funfact" element={<FunFactPage />} />
      </Routes>
      {/* <Routes>
        <Route path="/funfact/rover" element={<FunFactRover />} />
      </Routes> */}
    </Router>
  );
};

export default App;

// export default function App() {

//   return (
//     <Router>
//       <h1></h1>
//       <Routes>
//         <Route path="/posts" element={<PostList />} />
//         <Route path="/posts/create" element={<CreatePost />} />
//         <Route path="/users/" element={<UserList />} />
//         <Route path="/users/create" element={<CreateUser />} />
//         <Route path="/users/:userId" element={<UserDetail />} />
//           <div>
//             <div> Page doesn't exits, try these:</div>
//             <Link to="/posts"> Posts </Link>
//             <Link to="/users">Users List</Link>
//           </div>
//       </Routes>
//     </Router>
//   );
// }

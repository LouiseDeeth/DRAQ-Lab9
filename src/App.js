import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/Content';
import Read from './components/Read';
import Create from './components/Create';

//added links in navbar to routes
//Updated the App so that it display the Footer component when the URL 
//changes to localhost:3000/read and Header component when the URL of 
//the App changes to localhost:3000/create under the Navigation bar.
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Content />} />
        <Route path="/read" element={<Read/>} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
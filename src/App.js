import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/Content';

//added links in navbar to routes
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Content />} />
        <Route path="/read" element={<Header />} />
        <Route path="/create" element={<Footer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
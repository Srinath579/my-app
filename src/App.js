import './App.css';
import Footer from './components/Footer/Footer.js';
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";

function App() {
  // Set loading state to true initially
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loading function to load data or 
    // fake it using setTimeout;
    const loadData = async () => {

      // Wait for two second
      await new Promise((r) => setTimeout(r, 2000));

      // Toggle loading state
      setLoading((loading) => !loading);
    };

    loadData();
  }, [])

  // If page is in loading state, display 
  // loading message. Modify it as per your 
  // requirement.
  if (loading) {
    return (
      <div className="App">
        <header className="App-header text-dark">
          <ReactLoading type="spin" color="#0000FF"
            height={100} width={50} />
        </header>
        <Footer />
      </div>);
  }

  // If page is not in loading state, display page.
  else {
    return (
    <div className="App">
      <header className="App-header text-dark">
        Data Need to get displayed here.......
      </header>
      <Footer />
    </div>);
  }
}

export default App;

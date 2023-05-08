import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    let request = async () => {
      let req = await fetch(`https://digimon-api.vercel.app/api/digimon`);
      let res = await req.json();
      setData(res)
    }
    request();
  }, []);
  
  return (
    <>
      <Header />
      <Main data={data}/>
      <Footer />
    </>
  )
}

export default App;

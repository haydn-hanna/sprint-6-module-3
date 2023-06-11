import React, {useState,useEffect} from "react";
import axios from 'axios'
import "./App.css";
import Navbar from './components/navbar/navbar'
import Photos from './components/photos/photos'
import { createClient } from 'pexels';

function App() {
  const [photos,setPhotos] = useState([])

  useEffect(()=>{
    const client = createClient('KAc3yI5DYxVip8yBuaeMTP4H10J3C3vpOzktvYpiMT5B0k5sg800n9HU');
    const query = 'Space';

    client.photos.search({ query, per_page: 10 })
      .then(res => {
        setPhotos(res.photos)
      });
  },[])
  
  return (
    <div className="App">
      <Navbar />
      <Photos photos={photos}/>
    </div>
  );
}

export default App;

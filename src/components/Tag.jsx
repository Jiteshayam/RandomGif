import React, { useEffect, useState } from 'react'
import axios from "axios";
import Spinner from './Spinner';
import Card from './Card';
import { LuDownload } from 'react-icons/lu'


const Apikey = import.meta.env.VITE_API_KEY
const Tag = ({download,loadingDownload}) => {
  const [Gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)
  const [tag, setTag] = useState("cat")

  const url= `https://api.giphy.com/v1/gifs/search?api_key=${Apikey}&q=${tag}`

  async function fetchdata(){
    setLoading(true)
    try {
      const response = await axios.get(url);
      const imagesrc = (response.data.data);
      setGifs(imagesrc)
      console.log(Gifs);
    } catch (error) {
      console.error(error);
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchdata()
  }, [])
  

  function changeHandler(){
    fetchdata()
  }


  return (
    <div className='tag'>

      <div className='taghead'>
      <p className='taghead'>Search And Download Gif</p>
      <p className='Giphy'>Powered by Giphy</p>
      </div>

      <div className='tagserarch'>
        <input type="text" value={tag} onChange={(e)=>{
          setTag(e.target.value)
        }}/> 
        <button onClick={changeHandler}>Search</button> 
      </div>

        <div className='tagImg'>

        {
          loading?<Spinner/>: (
            <div className='row'>
              <div className='column'>
                  {Gifs.slice(0, 10).map((gif)=>{
                    return(<Card gif={gif} download={download} loadingDownload={loadingDownload}/>)
                  })}
              </div>

              <div className='column'>
              {Gifs.slice(10, 20).map((gif)=>{
                    return(<Card gif={gif} download={download} loadingDownload={loadingDownload}/>)
                  })}
              </div>

              <div className='column'>
              {Gifs.slice(20, 30).map((gif)=>{
                    return(<Card gif={gif} download={download} loadingDownload={loadingDownload}/>)
                  })}
              </div>

              <div className='column'>
                {Gifs.slice(30, 40).map((gif)=>{
                    return(<Card gif={gif} download={download} loadingDownload={loadingDownload}/>)
                  })}
              </div>
            </div>
          )
        }

      </div>
    </div>
  )
}

export default Tag
import React, { useEffect, useState } from 'react'
import axios from "axios";
import Spinner from './Spinner';

const Apikey = import.meta.env.VITE_API_KEY
const Random = () => {
  const [Gifs, setGifs] = useState('')
  const [loading, setLoading] = useState(false)

  const url= `https://api.giphy.com/v1/gifs/random?api_key=${Apikey}`

  async function fetchdata(){
    setLoading(true)
    try {
      const response = await axios.get(url);
      const imagesrc = (response.data.data.images.downsized_large.url);
      setGifs(imagesrc)
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
    console.log("running");
  }
  return (
    <div className='random'>

      <div className='randomimg'>

        {
          loading?<Spinner/>:<img className='rgif' src={Gifs} alt=""/>
        
        }
      </div>

      <div className='randomgen'>
        <h2>
          Generate Random Gif
        </h2>
        <button onClick={changeHandler}>
          Generate
        </button>
      </div>

    </div>
  )
}

export default Random
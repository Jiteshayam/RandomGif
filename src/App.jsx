import { useState } from 'react'
import './App.css'
import { Random,Tag } from './components'

function App() {
  const [count, setCount] = useState(0)
  const [loadingDownload, setLoadingDownload] = useState(false)

  async function download(url,name){
    setLoadingDownload(true)
    //create new a element
    let a = document.createElement('a');
    // get image as blob
    let response = await fetch(url);
    let file = await response.blob();
    // use download attribute https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Attributes
    a.download = name;
    a.href = window.URL.createObjectURL(file);
    //store download url in javascript https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes#JavaScript_access
    a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
    //click on element to start download
    a.click()
    setLoadingDownload(false)
  }

  return (
    <div className='wrapper'>

      <div className='continer'>
        <Tag download={download} loadingDownload={loadingDownload}/>
          <h1 className='text-[#F6F4EB] text-5xl'>Random Gifs</h1>
        <Random/>
      </div>
    </div>
  )
}

export default App

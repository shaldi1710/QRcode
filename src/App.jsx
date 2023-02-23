import './assets/style.css'
import qr from './assets/image-qr-code 1.png'


function App() {
  

  return (

  <div className='container'>
    <div className='box'> 
      <img className='qrcode' src={qr} />
  
      <p className='font'>Improvve your Front-end skills by building projects</p>
      <p className='font2'>Scan the OR code to visit Frontend Mentor and take your coding skills to the next level</p>
    
    </div>
  </div>
  )
}

export default App

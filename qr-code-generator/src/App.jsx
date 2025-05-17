import { useState } from 'react'
import './App.css'
import QRCodeGenerator from './Components/QRCodeGenerator';

function App() {
  
  const [inputData, setInputData] = useState('');
  const [colorqr, setColorQr]  = useState('#000');
  const [qrData, setQrData] = useState('');

  const onQrCodeGenerator =() => {
    if(!inputData) return;

    setQrData(inputData);
  }

  return (
    <>
      <div className='App'>
        <h1>QR Code Generator</h1>
        <div className="inputs">
          <input type="text"  value={inputData} onChange={(e)=> setInputData(e.target.value)}/>
          <button onClick={onQrCodeGenerator}>Generate</button>
        </div>
        <div className='color-wrapper'>
          <p>Change color of QR Code</p>
          <input type="color"  value={colorqr} onChange={(e)=> setColorQr(e.target.value)}/>
        </div>
        <QRCodeGenerator data= {qrData} colorqr={colorqr}/>
      </div>
    </>
  )
}

export default App

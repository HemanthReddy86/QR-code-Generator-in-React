import React from 'react';
import QRCode from "react-qr-code";

const QRCodeGenerator = ({data, colorqr}) => {
  return (
    <div>
        {
            data ? (<QRCode style={{height: '250px', width: '250px'}} value={data}
        bgColor='#eff0f3' fgColor={colorqr}
        />) : (<p>Enter Data & Click on Generate button</p>) 
        }
    </div>
  )
}

export default QRCodeGenerator
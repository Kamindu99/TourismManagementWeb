// import React, {useState, useRef} from 'react';


// function Qr() { 

//   return (
//  <></>
//   );
// }


// export default Qr























































// // import React, {useState, useRef} from 'react';
// // import {Container, Card, CardContent, makeStyles, Grid, TextField, Button} from '@material-ui/core';
// // import QRCode from 'qrcode';
// // import QrReader from 'react-qr-reader';
// // import { Link } from 'react-router-dom';


// // function Qr() { 
// //   const [text, setText] = useState('');
// //   const [imageUrl, setImageUrl] = useState('');
// //   const [scanResultFile, setScanResultFile] = useState('');
// //   const [scanResultWebCam, setScanResultWebCam] =  useState('');
// //   const classes = useStyles();
// //   const qrRef = useRef(null);



// //   const generateQrCode = async () => {
// //     try {
// //           const response = await QRCode.toDataURL(text);
// //           setImageUrl(response);
// //     }catch (error) {
// //       console.log(error);
// //     }
// //   }
// //   const handleErrorFile = (error) => {
// //     console.log(error);
// //   }
// //   const handleScanFile = (result) => {
// //       if (result) {
// //           setScanResultFile(result);
// //       }
// //   }
// //   const onScanFile = () => {
// //     qrRef.current.openImageDialog();
// //   }
// //   const handleErrorWebCam = (error) => {
// //     console.log(error);
// //   }
// //   const handleScanWebCam = (result) => {
// //     if (result){
// //         setScanResultWebCam(result);
// //     }
// //    }


// //   return (
// //     <Container className={classes.conatiner}>

// //           <Card>

// //               <h2 className={classes.title}>Generate Download & Scan QR Code </h2>
// //               <CardContent>
// //                   <Grid container spacing={2}>
// //                       <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
// //                           <TextField label="Enter Text Here" onChange={(e) => setText(e.target.value)}/>

// //                           <Button className={classes.btn} variant="contained" 
// //                            style={{ backgroundColor: 'red' }} onClick={() => generateQrCode()}>Generate</Button>
// //                             <br/>
// //                             <br/>
// //                             <br/>
// //                             {imageUrl ? (
// //                               <a href={imageUrl} download>
// //                                   <img src={imageUrl} alt="img"/>
// //                               </a>) : null}
// //                       </Grid>
// //                       <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
// //                         <Button className={classes.btn} variant="contained" style={{ backgroundColor: 'red' }}  onClick={onScanFile}>Browse Qr Code</Button>




// //                         <QrReader
// //   ref={(ref) => {
// //     if (ref) {
// //       qrRef.current = ref;
// //     }
// //   }}
// //   delay={300}
// //   style={{ width: "100%" }}
// //   onError={handleErrorFile}
// //   onScan={handleScanFile}
// //   legacyMode
// // />

// //                         { <h3>result : {scanResultFile}</h3> }
// //                         { <Link to={`/AddStock/${scanResultFile}`}>  <button className='sub-att'>SUBMIT ATTENDENCE</button></Link> }
// //                       </Grid>
// //                       <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
// //                          <h3 className='head-qr-cam' >QR code scan by web cam</h3>
// //                          <QrReader
// //                          delay={300}
// //                          style={{width: '100%'}}
// //                          onError={handleErrorWebCam}
// //                          onScan={handleScanWebCam}
// //                          />
// //                          { <h3>result: {scanResultWebCam}</h3> }
// //                          <Link to={`/AddStock/${scanResultWebCam}`}>  <button className='sub-att'>SUBMIT ATTENDENCE</button></Link>
// //                       </Grid>
// //                   </Grid>
// //               </CardContent>
// //           </Card>
// //     </Container>
// //   );
// // }

// // const useStyles = makeStyles((theme) => ({
// //     conatiner: {
// //       marginTop: 10,
// //       marginLeft:'270px'
// //     },
// //     title: {
// //       display: 'flex',
// //       justifyContent: 'center',
// //       alignItems:  'center',
// //       background: '#209292',
// //       color: '#fff',
// //       padding: 20
// //     },
// //     btn : {
// //       marginTop: 10,
// //       marginBottom: 20,
// //       color: '#ffffff'


// //     },
// // }));

// // export default Qr










// import React, { useState } from "react";
// import QRCode from "react-qr-code"

// export default function App() {
//   const [data, setData] = useState("Kamindu Gayantha");
//   return (
//     <div className="App">
//       <h1>Hotspot app</h1>
//       <h2>Visitors, scan the following qr code</h2>
//       <QRCode value="Kamindu Gayantha" size="250" />

//     <div>
//       <h1>QRCode</h1>
//       <QRCode value={data} />
//       <div style={{ marginTop: "2em" }}>
//         <input
//           value={data}
//           style={{ width: "300px" }}
//           onChange={(e) => {
//             setData(e.target.value);
//           }}
//         />
//       </div>
//       <p>{data}</p>
//     </div>


//     </div>
//   );
// }





// import React, { useState } from 'react';
// import QRCode from 'qrcode.react';

// function App() {

//   const [inputText, setInputText] = useState('');
//   const [qrCodeText, setQRCodeText] = useState('');

//   // generate QR code
//   const generateQRCode = () => {
//     setQRCodeText(inputText);
//   }

//   // download QR code
//   const downloadQRCode = () => {
//     const qrCodeURL = document.getElementById('qrCodeEl')
//       .toDataURL("image/png")
//       .replace("image/png", "image/octet-stream");
//     console.log(qrCodeURL)
//     let aEl = document.createElement("a");
//     aEl.href = qrCodeURL;
//     aEl.download = "QR_Code.png";
//     document.body.appendChild(aEl);
//     aEl.click();
//     document.body.removeChild(aEl);
//   }

//   return (
//     <div className="App">
//       <h3>Generate and download a QR code image in React - <a href="https://www.cluemediator.com/" target="_blank">Clue Mediator</a></h3>
//       <div className="qr-input">
//         <input
//           type="text"
//           placeholder="Enter input"
//           value={inputText}
//           onChange={e => setInputText(e.target.value)}
//         />
//         <input
//           type="button"
//           value="Generate"
//           onClick={generateQRCode}
//         />
//       </div>
//       <QRCode
//         id="qrCodeEl"
//         size={150}
//         value={qrCodeText}
//       />
//       <br />
//       <input
//         type="button"
//         className="download-btn"
//         value="Download"
//         onClick={downloadQRCode}
//       />
//     </div>

//   );
// }

// export default App;










import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

export default function App() {
  const [result, setResult] = useState("No result");

  const [scanResultFile, setScanResultFile] = useState(false);

  let handleScan = data => {
    if (data) {
      setResult(data);
    }
  };

  let handleError = err => {
    // alert(err);
  };

  let handleScanFil = () => {
    setScanResultFile(true);
  }

  return (
    <div>
      <button onClick={handleScanFil}>eeeeeeeee</button>
      {scanResultFile ? (
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
          facingMode="environment"
        />
      ) : (
        <h1>result : {result}</h1>
      )}
      <p>{result}</p>
    </div>
  );
}

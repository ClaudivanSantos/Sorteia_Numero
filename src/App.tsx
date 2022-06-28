import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import img from './assets/img.jpeg'
import img2 from './assets/img2.png'

function App() {
  const [Number, setNumber] = useState(0)
  function testaNumero() {
    const numeros = [5, 50, 40, 30, 10, 2, 14];
    const numero = Math.floor(Math.random() * numeros.length);
    const numeroFinal = (numeros[numero]);

    setNumber(numeroFinal)
  }

  return (
    <>
      <div style={{
        background: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover'
      }}>
        <CssBaseline />

        
        <Box sx={{ WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: '#FFF', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <Box
        sx={{}}
        component="img"
        alt="The house from the offer."
        src={img2}
      />
          <Typography variant="h4" sx={{textAlign: "center", fontWeight: 'bold' }}>
            {Number === 0 ? "Clique no botão para sortear um numero" : "O numero sorteado foi o: "}
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
            {Number === 0 ? "" : Number}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
          <Button size="large" variant="contained" color="error" onClick={testaNumero}>Sortear</Button>
        </Box>
      </div>
    </>

  )
}

export default App

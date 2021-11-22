import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { useState } from 'react';

const Cadastro = () => {
    const [nome, setNome] = useState();
    

    return(
        <>

        <Box sx={{marginTop: '15px'}}>
        <TextField id="outlined-basic"
        label="Nome"
        variant="outlined" 
        onChange={(e) => setNome(e.target.value)} />
        </Box>

        {nome}

        </>

    );
}

export default Cadastro;
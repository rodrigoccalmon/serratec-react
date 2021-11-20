import { Button } from '@material-ui/core'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container } from '@material-ui/core';
import { Box } from '@material-ui/system';



const Exemplos = () => {
  const alunos = [ {
      nome: "Rodrigo",
      idade: 30,
      cidade: "Teresópolis"

  },
{
    nome: "Gisele",
    idade: 30,
    cidade: "Teresópolis"
},
{
    nome: "Crianças",
    idade: 11,
    cidade: "Teresópolis"

}];
  
    return(
        
        <Container maxWidth="md">
        <Box sx={{ display: "flex", justifyContent: "center", flex: 1}}>
        <TableContainer sx={{ maxWidth: 650 }} >
        <Table aria-label="caption table">
        <caption>Exemplo alunos</caption>
        <TableHead>
          <TableRow>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">Idade</TableCell>
            <TableCell align="right">Teresópolis</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {alunos.map((aluno) => (
            <TableRow key={aluno.nome}>              
              <TableCell align="right">{aluno.nome}</TableCell>
              <TableCell align="right">{aluno.idade}</TableCell>
              <TableCell align="right">{aluno.cidade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>



        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        </Container>

        
    );
};

export default Exemplos;
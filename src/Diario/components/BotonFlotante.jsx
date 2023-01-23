
import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { iniciarNuevaNota } from '../../store/eldiario';




export const BotonFlotante = () => {

  const { seGuardo } = useSelector(state => state.elDiario);
  //console.log(seGuardo);

  const dispatch = useDispatch();

  const nuevaNoat = () => {

    dispatch(iniciarNuevaNota());
  }
  return (
    <IconButton
      size='large'
      onClick={nuevaNoat}
      disabled={ seGuardo }
      sx={{
        color: 'white',
        backgroundColor: 'error.main',
        ":hover": { backgroundColor: 'error.main', opacity: 0.9 },
        position: 'fixed',
        right: 50,
        bottom: 50
      }}
    >

      <AddOutlined
        sx={{ fontSize: 40 }}
      />

    </IconButton>
  )
}

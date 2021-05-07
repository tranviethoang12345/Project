import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  formStatus: {
    margin: "10px 0px 0px 10px",
  },
  formRoles: {
    margin: "10px 0px 0px 10px",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  title: {
    padding: '0 10px',
  },
}));

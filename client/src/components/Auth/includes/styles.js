import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  '': {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
  },
  body: {
    fontFamily: '"Poppins",  sans-serif',
  },
  input: {
    fontFamily: '"Poppins",  sans-serif',
  },
  container: {
    position: 'relative',
    width: '100%',
    backgroundColor: '#fff',
    minHeight: '100vh',
    overflow: 'hidden',
  },
  forms_container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
  },
  auth: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    left: '75%',
    width: '50%',
    transition: '1s 0.7s ease-in-out',
    display: 'grid',
    gridTemplateColumns: '1fr',
    zIndex: '5',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '0rem 5rem',
    transition: 'all 0.2s 0.7s',
    overflow: 'hidden',
    gridColumn: '1 / 2',
    gridRow: '1 / 2',
  },
  sign_up_form: {
    opacity: '0',
    zIndex: '1',
  },
  sign_in_form: {
    zIndex: '2',
  },
  title: {
    fontSize: '2.2rem',
    color: '#444',
    marginBottom: '10px',
  },
  input_field: {
    maxWidth: '380px',
    width: '100%',
    backgroundColor: '#f0f0f0',
    margin: '10px 0',
    height: '55px',
    borderRadius: '55px',
    display: 'grid',
    gridTemplateColumns: '15% 85%',
    padding: '0 0.4rem',
    position: 'relative',
  },
  input_field_i: {
    textAlign: 'center',
    lineHeight: '55px',
    color: '#acacac',
    transition: '0.5s',
    fontSize: '1.1rem',
  },
  input_field_input: {
    background: 'none',
    outline: 'none',
    border: 'none',
    lineHeight: '1',
    fontWeight: '600',
    fontSize: '1.1rem',
    color: '#333',
  },
  input_field_input__placeholder: {
    color: '#aaa',
    fontWeight: '500',
  },
  social_text: {
    padding: '0.7rem 0',
    fontSize: '1rem',
  },
  social_media: {
    display: 'flex',
    justifyContent: 'center',
  },
  social_icon: {
    height: '46px',
    width: '46px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 0.45rem',
    color: '#333',
    borderRadius: '50%',
    border: '1px solid #333',
    textDecoration: 'none',
    fontSize: '1.1rem',
    transition: '0.3s',
  },
  social_icon_hover: {
    color: '#4481eb',
    borderColor: '#4481eb',
  },
  btn: {
    width: '150px',
    backgroundColor: '#5995fd',
    border: 'none',
    outline: 'none',
    height: '49px',
    borderRadius: '49px',
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '600',
    margin: '10px 0',
    cursor: 'pointer',
    transition: '0.5s',
  },
  btn_hover: {
    backgroundColor: '#4d84e2',
  },
  panels_container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0',
    left: '0',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  container_before: {
    content: '""',
    position: 'absolute',
    height: '2000px',
    width: '2000px',
    top: '-10%',
    right: '48%',
    transform: 'translateY(-50%)',
    backgroundImage: 'linear-gradient(-45deg, #4481eb 0%, #04befe 100%)',
    transition: '1.8s ease-in-out',
    borderRadius: '50%',
    zIndex: '6',
  },
  image: {
    width: '100%',
    transition: 'transform 1.1s ease-in-out',
    transitionDelay: '0.4s',
  },
  panel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    textAlign: 'center',
    zIndex: '6',
  },
  left_panel: {
    pointerEvents: 'all',
    padding: '3rem 17% 2rem 12%',
  },
  right_panel: {
    pointerEvents: 'none',
    padding: '3rem 12% 2rem 17%',
  },
  panel__content: {
    color: '#fff',
    transition: 'transform 0.9s ease-in-out',
    transitionDelay: '0.6s',
  },
  panel_h3: {
    fontWeight: '600',
    lineHeight: '1',
    fontSize: '1.5rem',
  },
  panel_p: {
    fontSize: '0.95rem',
    padding: '0.7rem 0',
  },
  btn_transparent: {
    margin: '0',
    background: 'none',
    border: '2px solid #fff',
    width: '130px',
    height: '41px',
    fontWeight: '600',
    fontSize: '0.8rem',
  },
  right_panel__image: {
    transform: 'translateX(800px)',
  },
  right_panel__content: {
    transform: 'translateX(800px)',
  },
  container_sign_up_mode_before: {
    transform: 'translate(100%, -50%)',
    right: '52%',
  },
  container_sign_up_mode__left_panel__image: {
    transform: 'translateX(-800px)',
  },
  container_sign_up_mode__left_panel__content: {
    transform: 'translateX(-800px)',
  },
  container_sign_up_mode__signin_signup: {
    left: '25%',
  },
  container_sign_up_mode_form_sign_up_form: {
    opacity: '1',
    zIndex: '2',
  },
  container_sign_up_mode_form_sign_in_form: {
    opacity: '0',
    zIndex: '1',
  },
  container_sign_up_mode__right_panel__image: {
    transform: 'translateX(0%)',
  },
  container_sign_up_mode__right_panel__content: {
    transform: 'translateX(0%)',
  },
  container_sign_up_mode__left_panel: {
    pointerEvents: 'none',
  },
  container_sign_up_mode__right_panel: {
    pointerEvents: 'all',
  },
  '@media (max-width: 870px)': {
    __expression__: '(max-width: 870px)',
    container: {
      minHeight: '800px',
      height: '100vh',
    },
    signin_signup: {
      left: '50%',
    },
    container_sign_up_mode__signin_signup: {
      top: '5%',
      transform: 'translate(-50%, 0)',
    },
    panels_container: {
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr 2fr 1fr',
    },
    panel: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '2.5rem 8%',
      gridColumn: '1 / 2',
    },
    right_panel: {
      gridRow: '3 / 4',
    },
    left_panel: {
      gridRow: '1 / 2',
    },
    image: {
      width: '200px',
      transition: 'transform 0.9s ease-in-out',
      transitionDelay: '0.6s',
    },
    panel__content: {
      paddingRight: '15%',
      transition: 'transform 0.9s ease-in-out',
      transitionDelay: '0.8s',
    },
    panel_h3: {
      fontSize: '1.2rem',
    },
    panel_p: {
      fontSize: '0.7rem',
      padding: '0.5rem 0',
    },
    btn_transparent: {
      width: '110px',
      height: '35px',
      fontSize: '0.7rem',
    },
    container_before: {
      width: '1500px',
      height: '1500px',
      transform: 'translateX(-50%)',
      left: '30%',
      bottom: '68%',
      right: 'initial',
      top: 'initial',
      transition: '2s ease-in-out',
    },
    container_sign_up_mode_before: {
      transform: 'translate(-50%, 100%)',
      bottom: '32%',
      right: 'initial',
    },
    container_sign_up_mode__left_panel__image: {
      transform: 'translateY(-300px)',
    },
    container_sign_up_mode__left_panel__content: {
      transform: 'translateY(-300px)',
    },
    container_sign_up_mode__right_panel__image: {
      transform: 'translateY(0px)',
    },
    container_sign_up_mode__right_panel__content: {
      transform: 'translateY(0px)',
    },
    right_panel__image: {
      transform: 'translateY(300px)',
    },
    right_panel__content: {
      transform: 'translateY(300px)',
    },
  },
  '@media (max-width: 570px)': {
    __expression__: '(max-width: 570px)',
    form: {
      padding: '0 1.5rem',
    },
    image: {
      display: 'none',
    },
    panel__content: {
      padding: '0.5rem 1rem',
    },
    container: {
      padding: '1.5rem',
    },
    container_before: {
      bottom: '72%',
      left: '50%',
    },
    container_sign_up_mode_before: {
      bottom: '28%',
      left: '50%',
    },
  },
}));

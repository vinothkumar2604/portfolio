
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';


import './App.css';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        p: 1,
        borderRadius: 2,
        textAlign: 'center',
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};



function App() {
  return (
    <div className="App">
      <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'grid',
          gridAutoFlow: 'row',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridTemplateRows: 'repeat(2, 50px)',
          gap: 1,
        }}
      >
        <Item className="AB" sx={{ gridColumn: '1/3', gridRow: '1 / 60'  }}>
        {
   (
    <Stack direction="row" spacing={2}>
      <Avatar className='BJ' alt="" src="/image/vino.jpg"/> 
      <h2 className='V'>Vinoth Kumar</h2>
      <h4 className='K'>front end developer</h4>
      <h4 className='N'>IN CHENNAI</h4>
      <Link className='L'
      component="button"
      variant="body2"
      onClick={() => {
        console.info("I'm a button.");
      }}
    >
      HOME
    </Link>
      <div className='F'>
      <h3>ABOUT</h3>
      <h3>SERVICES</h3>
      <h3>SKILLS</h3>
      <h3>EDUCATION</h3>
      <h3>EXPERIENCE</h3>
      <h3>WORK</h3>
      <h3>BLOG</h3>
      <h3>CONTACT</h3>
      </div>
      
    </Stack>
  )
} 
        </Item >
        <Item className="CD" sx={{ gridColumn: '2/6', gridRow: '1 / 60'  }}>
        <h1 className='LA'><p>I am</p>
        a Designer</h1>
        <h3 className='MF'>
          <p>100% html5 Bootstrap templates made 
          by <Link href="#">colorlib.com</Link></p>
        </h3>
      <div style={{ width: '100%' }}>
      <Box  className="LO" sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <Item>VIEW PORTFOLIO</Item>

      </Box>
    </div>
        </Item>
        <Item className="JD" sx={{ gridColumn: '5/6', gridRow: '3 / 60' , with:'100%' }}></Item>
      </Box>
    </div>
    </div>
  );
}

export default App;

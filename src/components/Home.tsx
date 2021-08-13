import { Typography } from '@material-ui/core';
import React from 'react';
import MaterialUI from './MaterialUI';

const Home: React.FC = () => {
  return (
    <div>
      <Typography variant='h1' component='h2' gutterBottom>
        Home
      </Typography>
      <MaterialUI />
    </div>
  );
};

export default Home;

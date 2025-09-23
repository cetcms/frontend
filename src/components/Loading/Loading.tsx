import { Box, Loader } from '@mantine/core';
import React from 'react';

import classes from './Loading.module.scss';

export interface LoadingProps {
  native?: boolean;
  style?: React.CSSProperties;
}

export const Loading: React.FC<LoadingProps> = ({ native, style }) => {
  return native ? (
    <div className={classes.loaderBox} style={style}>
      <span className={classes.loader} />
    </div>
  ) : (
    <Box className={classes.loaderBox} style={style}>
      <Loader />
    </Box>
  );
};

import { Center as MantineCenter } from '@mantine/core';
import React from 'react';

import type { CenterProps as MantineCenterProps } from '@mantine/core';

export const Center: React.VFC<MantineCenterProps<'div'>> = ({ children, sx, ...props }) => {
  return (
    <MantineCenter component='div' sx={() => ({ ...sx })} {...props}>
      {children}
    </MantineCenter>
  );
};

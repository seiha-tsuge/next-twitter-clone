import { Center as MantineCenter } from '@mantine/core';
import React from 'react';

import type { CenterProps as MantineCenterProps } from '@mantine/core';

export const Center: React.VFC<MantineCenterProps<any>> = ({ children, sx, ...props }) => {
  return (
    <MantineCenter sx={() => ({ ...sx })} {...props}>
      {children}
    </MantineCenter>
  );
};

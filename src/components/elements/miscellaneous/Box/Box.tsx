import { Box as MantineBox } from '@mantine/core';
import React from 'react';

import type { BoxProps as MantineBoxProps } from '@mantine/core';

export const Box: React.VFC<MantineBoxProps<any>> = ({ children, sx, ...props }) => {
  return (
    <MantineBox sx={() => ({ ...sx })} {...props}>
      {children}
    </MantineBox>
  );
};

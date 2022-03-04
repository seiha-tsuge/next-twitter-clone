import { Button as MantineButton } from '@mantine/core';
import React from 'react';

import type { ButtonProps as MantineButtonProps } from '@mantine/core';

export const Button: React.VFC<MantineButtonProps<any>> = ({ children, sx, ...props }) => {
  return (
    <MantineButton sx={() => ({ ...sx })} {...props}>
      {children}
    </MantineButton>
  );
};

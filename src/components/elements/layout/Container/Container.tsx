import { Container as MantineContainer } from '@mantine/core';
import React from 'react';

import type { ContainerProps as MantineContainerProps } from '@mantine/core';

export const Container: React.VFC<MantineContainerProps> = ({ children, sx, ...props }) => {
  return (
    <MantineContainer sx={() => ({ ...sx })} {...props}>
      {children}
    </MantineContainer>
  );
};

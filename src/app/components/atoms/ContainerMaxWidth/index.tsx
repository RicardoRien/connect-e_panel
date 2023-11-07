import { ReactNode } from "react";

import { Box } from "@mui/material";

interface Props {
  children: ReactNode;
}

export function ContainerMaxWidth({ children }: Props) {
  return (
    <Box maxWidth={1400} margin='0 auto'>
      {children}
    </Box>
  )
}

import Box from '@mui/system/Box/Box'
import React from 'react'
import { pxToRem } from '../../styles/utils'


const BlockContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box display='flex' justifyContent='center' flexWrap='wrap' alignItems='center' marginBottom={pxToRem(60)}>
      {children}
    </Box>
  )
}

export default BlockContainer
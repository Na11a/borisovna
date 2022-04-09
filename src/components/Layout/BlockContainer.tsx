import Box from '@mui/system/Box/Box'
import { FlexboxProps } from "@mui/system"
import { ReactNode } from 'react'
import { pxToRem } from '../../styles/utils'

interface IBlockContainerProps {
  direction?: FlexboxProps["flexDirection"],
  children: ReactNode
}

const BlockContainer = ({ direction, children }: IBlockContainerProps) => {
  return (
    <Box display='flex' flexDirection={direction || 'row'} justifyContent='center' flexWrap='wrap' alignItems='center' marginBottom={pxToRem(60)}>
      {children}
    </Box>
  )
}

export default BlockContainer
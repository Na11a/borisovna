import Box from '@mui/system/Box/Box'
import { FlexboxProps } from "@mui/system"
import { ReactNode } from 'react'
import { pxToRem } from '../../styles/utils'
import React from 'react'
import VisibilitySensor from 'react-visibility-sensor';
import { TAnchor } from '../../types/types'

interface IBlockContainerProps {
  direction?: FlexboxProps["flexDirection"],
  children: ReactNode,
  anchor: TAnchor,
  setActiveAnchor: React.Dispatch<React.SetStateAction<string>>
}

const BlockContainer = ({ direction, children, setActiveAnchor, anchor }: IBlockContainerProps) => {

  return (
    <VisibilitySensor onChange={(isVisible) => {
      
      isVisible && setActiveAnchor(anchor)
    }}>
      <Box
        display='flex'
        flexDirection={direction || 'row'}
        justifyContent='center' flexWrap='wrap'
        alignItems='center'
        marginBottom={pxToRem(60)}>
        {children}
      </Box>
    </VisibilitySensor>
  )
}

export default React.memo(BlockContainer)
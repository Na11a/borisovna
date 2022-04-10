import { FlexboxProps }     from "@mui/system"
import React, { ReactNode } from 'react'
import { pxToRem }          from '../../styles/utils'
import VisibilitySensor     from 'react-visibility-sensor'
import { TAnchor }          from '../../types/types'
import { Container }        from '@mui/material'

interface IBlockContainerProps {
  direction?: FlexboxProps["flexDirection"],
  children: ReactNode,
  anchor: TAnchor,
  setActiveAnchor: React.Dispatch<React.SetStateAction<string>>
}

const BlockContainer = ({
  direction, children, setActiveAnchor, anchor,
}: IBlockContainerProps) => {

  return (
    <VisibilitySensor onChange={ (isVisible) => {

      isVisible && setActiveAnchor(anchor)
    } }>
      <Container sx={ {
        display       : 'flex',
        flexDirection : direction || 'row',
        justifyContent: 'center',
        flexWrap      : 'wrap',
        alignItems    : 'center',
        marginBottom  : pxToRem(60),
      } }>
        { children }
      </Container>
    </VisibilitySensor>
  )
}

export default React.memo(BlockContainer)
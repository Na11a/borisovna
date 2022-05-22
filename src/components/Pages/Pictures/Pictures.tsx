import BlockContainer from '../../Layout/BlockContainer'
import { Box, Card, CardMedia, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { PicturesContext } from './../../../context/PicturesContext';

export default function Pictures() {
  const navigate = useNavigate()
  const { pictures, title, anchor } = useContext(PicturesContext)
  const handleClick = () => {
    console.log('route')
    navigate(`/#${anchor}`)
  }
  return (
    <BlockContainer >

      <Box >
        <Typography variant="h6" children={title} sx={{ marginBottom: '20px' }} />
        {
          pictures && pictures.map((picture) => (
            <Card key={picture}>
              <CardMedia>
                <Box component="img" src={picture} sx={{ width: '100%', height: '100%', padding: '10px', borderRadius: '10px' }}></Box>
              </CardMedia>
            </Card>
          ))}
        <Button onClick={handleClick}>
          close pictures
        </Button>
      </Box>

    </BlockContainer>
  )
}

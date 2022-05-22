import { Title } from '../../Title'
import { Box, Card, styled, CardContent, Button, Typography, CardMedia, CardActions } from '@mui/material'
import BlockContainer from '../../Layout/BlockContainer'
import { useTranslation } from 'react-i18next'
import Carousel from "mui-carousel";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import { useContext, useState } from 'react';
import { PicturesContext } from './../../../context/PicturesContext';
import { useNavigate } from 'react-router';
interface IOurMissionProps {
  setActiveBlock: React.Dispatch<React.SetStateAction<string>>
}
type TActivityItem = {
  src: string,
  description: string,
  pictures: string[]
}
const Img = styled("img")({
  width: '100%',
  height: '100%',
  borderRadius: '10px'
})
const Carousell = ({ blockAnchor }: { blockAnchor: string }) => {
  const { t } = useTranslation()

  const items: TActivityItem[] = [
    {
      src: "./images/teritory-main.png",
      description: t('goodDeeds.territoryMain.title'),
      pictures: [
        './images/teritory-main-1.jpg', './images/teritory-main-2.jpg', './images/teritory-main-3.jpg',
        './images/teritory-main-4.jpg', './images/teritory-main-5.jpg', './images/teritory-main-6.jpg',
        './images/teritory-main-7.jpg', './images/teritory-main-8.jpg', './images/teritory-main-9.jpg', './images/teritory-main-10.jpg'
      ]
    },
    {
      src: './images/we-are-cossacks-main.png',
      description: t('goodDeeds.weAreCossacks.title'),
      pictures: [
        'teritory-main-1', 'teritory-main-2', 'teritory-main-3',
        'teritory-main-4', 'teritory-main-5', 'teritory-main-6',
        'teritory-main-7', 'teritory-main-8', 'teritory-main-9', 'teritory-main-10'
      ]

    }
  ]
  const { setPictures, setTitle, setAnchor } = useContext(PicturesContext)
  const navigate = useNavigate()
  const handleClickShowPictures = (e: any, item: TActivityItem) => {
    setPictures(item.pictures)
    setAnchor(blockAnchor)
    setTitle(item.description)
    navigate('/pictures')
  }
  return (
    <>
      <Carousel
        renderDot={({ selected }) => { return selected ? <CircleIcon fontSize='small' /> : <CircleOutlinedIcon fontSize='small' /> }}
        dots={true}
        onScroll={({ currentTarget }) => { currentTarget.style.backgroundColor = 'red' }}
        showSlides={1}
        speed={3000 * 1}
        autoPlay={true}
        pauseOnHover
        sx={{ width: '100%' }}
      >
        {
          items.map((item) => (
            <Card key={item.src} sx={{ width: '100%', height: '100%', boxSizing: 'border-box', padding: ' 20px 10px' }} >
              <CardMedia>
                <Box>
                  <Img src={item.src} />
                </Box>
              </CardMedia>
              <CardContent sx={{ height: '90px', marginBottom: '20px', paddingBottom: '0px' }}>

                <Typography variant='h6' sx={{ whiteSpace: 'normal' }}>
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button sx={{ color: 'primary.main', border: '4px solid', borderColor: 'primary.main', width: '100%', borderRadius: '20px' }}
                  onClick={(e) => handleClickShowPictures(e, item)}>
                  Переглянути фото
                </Button>
              </CardActions>
            </Card>))
        }
      </Carousel>

    </>
  )
}

const GoodDeeds = ({ setActiveBlock }: IOurMissionProps) => {
  const { t } = useTranslation()

  return (
    <BlockContainer setActiveAnchor={setActiveBlock} anchor={'good-deeds'} direction='column'>
      <Box>
        <Title anchor={'good-deeds'}
          variant="secondary"
          name={t('goodDeeds.title')} />
      </Box>
      <Carousell blockAnchor={'good-deeds'} />

    </BlockContainer>
  )
}

export default GoodDeeds
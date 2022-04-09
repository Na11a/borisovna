import React, { useEffect } from 'react'
import { MainLayout } from '../'
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
const items = [{ index: 1, name: 'title' }, { index: 2, name: 'description' }]

export default function Main() {
    const { t } = useTranslation()
    const title = t('title').toLowerCase()
    const description = t('description').toLowerCase()
    return (
        <MainLayout>

            <Box color='#f8f8fb' paddingTop='50px'>
                <Box sx={{ textTransform: 'capitalize', typography: 'h4', textAlign: 'center', marginBottom: '3rem' }}>
                    {title}
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography
                        sx={{
                            typography: 'h5',
                            width: '80rem',
                            marginX: 'auto',
                            '&:first-letter': {
                                textTransform: 'uppercase'
                            }
                        }}
                        children={description}
                    />
                </Box>
            </Box>
        </MainLayout>
    )
}

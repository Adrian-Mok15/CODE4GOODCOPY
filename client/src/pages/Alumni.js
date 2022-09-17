import React from 'react'
import styled, { withTheme } from 'styled-components'
import {Card, Box, Typography, CardContent, CardMedia, Button} from '@mui/material'
import sendIt from './SendEmail'

const Alumni = () => {
  return (

    <Page>

    <Typography sx = {{ fontFamily: "Raleway", fontSize: '30px'}}> Alumni Portal </Typography>

    <AlumniCard>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5">
            Alumni
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            First Last
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
      />
    </AlumniCard>


    <AlumniCard>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5">
            Alumni
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            First Last
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
      />
    </AlumniCard>

    <AlumniCard>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5">
            Alumni
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            First Last
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
      />
    </AlumniCard>


    <Button onClick={sendIt}> Email JS - Send Email Test </Button>

    </Page>
  )
}

export default Alumni;


const AlumniCard = styled(Card)({
  display: 'inline-block', padding: '10px', margin: '30px'
});

const Page = styled.div`
  z-index: 200;
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: #F7E9CC;
  allign-items: 
`
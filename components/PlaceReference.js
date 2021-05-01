import React from 'react'
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography
} from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import { makeStyles } from '@material-ui/core/styles'

const PlaceReference = () => {
  const classes = useStyles()

  return (
    <Container maxWidth='lg'>
      <Box mb={16}>
        <Box mb={4}>
          <Typography align='center' variant='h5'>{`More about currency exchange in Mississauga`}</Typography>
        </Box>
        <Box display='flex' justifyContent='center' my={4}>
          <Divider classes={{ root: classes.divider }} />
        </Box>
        <Container maxWidth='md'>
          <Typography align='center' variant='body1'>{`Missisauga is a city in the Canadian province of Ontario. It is situated on the shores of 
          Lake Ontario in the Regional Municipality of Peel, bordering Toronto to the east. With a population of 721,599 as 
          of the 2016 census, Mississauga is the sixth-most populous minucipality in Canada, third-most in Ontario, 
          and second-most in the Greater Toronto Area.`}</Typography>
        </Container>
        <Grid container spacing={0}>
          {Array.from({length: 3}, (item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box mx={4} my={8}>
                <Skeleton variant='rect' width='100%' height='450px' />
              </Box>
            </Grid>
            ))}
        </Grid>
        <Box display='flex' justifyContent='center'>
          <Button variant='outlined' color='primary' classes={{ label: classes.button }}>{`Get your transfer money account`}</Button>
        </Box>
      </Box>
    </Container>
  )
}

const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.pxToRem(16),
    fontWeight: 'regular',
    textTransform: 'none',
  },
  divider: {
    width: '180px',
    height: '5px',
    backgroundColor: theme.palette.primary.main,
  },
}))

export default PlaceReference

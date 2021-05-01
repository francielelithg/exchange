import React from 'react'
import {
  Container,
  Box,
  Button,
  Divider,
  Grid,
  Typography
} from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import { makeStyles } from '@material-ui/core/styles'

const Introduction = () => {
  const classes = useStyles()

  return (
    <Container maxWidth='lg'>
      <Box mt={30} mb={16}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={5}>
            <Box my={4}>
              <Typography variant='h5'>Compare our transparent rates to other Mississauga currency exchange services</Typography>
            </Box>
            <Divider classes={{ root: classes.divider }} />
            <Box my={4}>
              <Typography variant='body1'>We make it easy for you to know how much you'll get when you use our CAD to USD calculator. 
                We're fully transparent about this because we're confident in our competitive exchange rates. 
                Go ahead and compare our rates with other Toronto money exchanges 
                so you can ensure you're getting the best exchange rates.</Typography>
            </Box>
            <Box my={4}>
              <Typography variant='body1'>We believe it's unfair that certain financial institutions continue charging such high fees when 
                it comes to your foreign exchange needs, especially in such delicate times.</Typography>
            </Box>
            <Box my={4}>
              <Button variant='contained' color='primary' classes={{ label: classes.button }} disableElevation>Start exchanging now!</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={7} className={classes.image}>
            <Skeleton variant='rect' width='100%' height='100%' />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.secondary.light,
    fontSize: theme.typography.pxToRem(16),
    fontWeight: 'regular',
    textTransform: 'none',
  },
  divider: {
    width: '150px',
    height: '5px',
    backgroundColor: theme.palette.primary.main,
  },
  image: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(6),
    },
    [theme.breakpoints.down('md')]: {
      height: '300px',
    },
  }
}))

export default Introduction

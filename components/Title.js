import React, { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const Title = props => {
  const classes = useStyles()
  const [pair, setPair] = useState(props.currenciesPair)
  
  useEffect(() => {
    setPair(props.currenciesPair)
  }, [props.currenciesPair])

  const string = pair ? `${pair.source} to ${pair.target}` : `money abroad`

  return (
    <Container maxWidth='md'>
      <Box mt={16} pb={16} px={4}>
        <Typography align='center' variant='h2' className={classes.title}>{`Looking to exchange ${string}? Get the best 
        currency exchange rates in Mississauga`}</Typography>
        <Box mb={4} />
        <Typography align='center' variant='h3' className={classes.subtitle}>{`Get the most out of your money with dependably 
        better exchange rates than top banks.`}</Typography>
      </Box>
    </Container>
  )
}

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.secondary.light,
    textShadow: '2px 2px 3px rgba(0, 0, 0, 0.15)',
  },
  subtitle: {
    color: theme.palette.secondary.light,
  }
}))

export default Title

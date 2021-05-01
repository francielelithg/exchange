import React from 'react'
import {
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const Logo = () => {
  const classes = useStyles()

  return (
    <Typography variant='h1' className={classes.logo}>{`Remitbee`}</Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  logo: {
    color: theme.palette.secondary.light,
    cursor: 'pointer'
  }
}))

export default Logo

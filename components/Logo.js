import React from 'react'
import {
  Link,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const Logo = () => {
  const classes = useStyles()

  return (
    <Link underline='none' href="/">
      <Typography variant='h1' className={classes.logo}>{`Remitbee`}</Typography>
    </Link>
  )
}

const useStyles = makeStyles((theme) => ({
  logo: {
    color: theme.palette.secondary.light,
    cursor: 'pointer'
  }
}))

export default Logo

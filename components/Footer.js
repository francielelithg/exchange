import React from 'react'
import {
  Box,
  Grid,
  Link,
  Container,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const Footer = () => {
  const classes = useStyles()

  return (
    <Container maxWidth='lg'>
      <Box mt={4} mb={8}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={3}>
            <Box my={4}>
              <Typography variant='h6'>{`Company`}</Typography>
            </Box>
            <Link href='#' className={classes.link}>{`About Remitbee`}</Link>
            <Link href='#' className={classes.link}>{`Wallet`}</Link>
            <Link href='#' className={classes.link}>{`Refer & earn`}</Link>
            <Link href='#' className={classes.link}>{`Blog`}</Link>
            <Link href='#' className={classes.link}>{`Careers`}</Link>
            <Link href='#' className={classes.link}>{`Send money to India`}</Link>
            <Link href='#' className={classes.link}>{`Send money to Sri Lanka`}</Link>
            <Link href='#' className={classes.link}>{`Send money to Philippines`}</Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box my={4}>
              <Typography variant='h6'>{`Help and support`}</Typography>
            </Box>
            <Link href='#' className={classes.link}>{`Help center`}</Link>
            <Link href='#' className={classes.link}>{`Contact us`}</Link>
            <Link href='#' className={classes.link}>{`How to pay & fees`}</Link>
            <Link href='#' className={classes.link}>{`Verification`}</Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box my={4}>
              <Typography variant='h6'>{`Resources`}</Typography>
            </Box>
            <Link href='#' className={classes.link}>{`Terms & conditions`}</Link>
            <Link href='#' className={classes.link}>{`Privacy`}</Link>
            <Link href='#' className={classes.link}>{`Transaction security`}</Link>
            <Link href='#' className={classes.link}>{`Transaction Guarantee Policy`}</Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box my={4}>
              <Typography variant='h6'>{`Connect`}</Typography>
              <Box mt={4}>
                <Link href='#'>
                  <img
                    height='40px'
                    src='/images/playstore.png'
                    alt='Download at Google Play' />
                </Link>
                <Box ml={1} display='inline' />
                <Link href='#'>
                  <img 
                    component='img'
                    height='40px'
                    src='/images/appstore.png' 
                    alt='Download on App Store' />
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'block',
    paddingBottom: theme.spacing(2),
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.dark,
      textDecoration: 'none',
    },
    root: {
      backgroundColor: theme.palette.secondary.main,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2)',
    },
  }
}))

export default Footer

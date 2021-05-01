import React from 'react'
import Head from 'next/head'
import {
  Box,
  Button,
  Container,
  Divider,
  Typography
} from '@material-ui/core'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
import { makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'

const NotFound = () => {
  const classes = useStyles()
  const router = useRouter()

  const handleBack = () => {
    router.push('/')
  }

  return (
    <div>
      <Head>
        <title>{`Not found | Remitbee`}</title>
        <meta name='description' content='Content not available on Remitbee.' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='canonical' href='http://localhost:3000/404' />
      </Head>
      <main>
        <Container maxWidth='sm'>
          <Box mt={12}>
            <Typography variant='h1' align='center'>404</Typography>
          </Box>
          <Box mt={2} px={8}>
            <Typography variant='h6' align='center'>{`It seems you're trying to access some content that is not currently available on Remitbee.`}</Typography>
          </Box>
          <Box display='flex' justifyContent='center' mt={4}>
            <Button variant='contained' color='primary' onClick={handleBack} classes={{ label: classes.button }}>Back to home page</Button>
          </Box>
          <Box mb={12} />
        </Container>
      </main>
      <footer>
        <Divider />
        <Footer />
        <Divider />
        <Copyright />
      </footer>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.secondary.light,
    fontSize: theme.typography.pxToRem(16),
    fontWeight: 'regular',
    textTransform: 'none',
  },
}))

export default NotFound
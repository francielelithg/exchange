import React, { useState } from 'react'
import Head from 'next/head'
import {
  Box,
  Divider
} from '@material-ui/core'
import Menu from '../components/Menu'
import Title from '../components/Title'
import Convert from '../components/Convert'
import Introduction from '../components/Introduction'
import Advantages from '../components/Advantages'
import PlaceReference from '../components/PlaceReference'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
import { makeStyles } from '@material-ui/core/styles'
import countryService from '../services/contries'
import { useRouter } from 'next/router'

const Home = props => {
  const classes = useStyles()
  const router = useRouter()
  const [currencies] = useState(props.currencies)
  const [currenciesPair, setCurrenciesPair] = useState(null)

  return (
    <div>
      <Head>
        <title>{`Remitbee`}</title>
        <meta name='description' content={`Remitbee has the best fees for you to exchange money abroad`} />
        <link rel='canonical' href='http://localhost:3000/'/>
        <link rel='alternate' hrefLang='x-default' href={`http://localhost:3000${router.asPath}`} />
      </Head>

      <main>
        <div className={classes.header}>
          <Menu />
          <Title currenciesPair={currenciesPair} />
          <Box display='flex' justifyContent='center'>
            <div className={classes.convertCard}>
              <Convert currencies={currencies} update={setCurrenciesPair} />
            </div>
          </Box>
        </div>
        <Introduction />
        <Advantages />
        <PlaceReference />
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
  header: {
    width: '100%',
    backgroundColor: theme.palette.primary.dark,
  },
  convertCard: {
    marginBottom: '-106px',
    position: 'relative',
  }
}))

Home.getInitialProps = async ctx => {
  const data = await countryService.getAll()
  return {
    currencies: data.sort((a, b) => a.currencyCode.localeCompare(b.currencyCode))
  }
}

export default Home

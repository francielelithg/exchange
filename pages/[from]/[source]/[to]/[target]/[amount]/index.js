import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import {
  Box,
  Divider
} from '@material-ui/core'
import Menu from '../../../../../../components/Menu'
import Title from '../../../../../../components/Title'
import Convert from '../../../../../../components/Convert'
import Introduction from '../../../../../../components/Introduction'
import Advantages from '../../../../../../components/Advantages'
import PlaceReference from '../../../../../../components/PlaceReference'
import Footer from '../../../../../../components/Footer'
import Copyright from '../../../../../../components/Copyright'
import { makeStyles } from '@material-ui/core/styles'
import countryService from '../../../../../../services/contries'
import { useRouter } from 'next/router'

const CompareResult = props => {
  const classes = useStyles()
  const router = useRouter()
  const [currencies] = useState(props.currencies)
  const [currenciesPair, setCurrenciesPair] = useState({
    from: props.from || '',
    source: props.source || '',
    to: props.to || '',
    target: props.target || '',
    amount: props.amount || '',
  })

  useEffect(() => {
    setCurrenciesPair(router.query)
  }, [router.query])

  const title = currenciesPair ? `Exchange ${currenciesPair.source} to ${currenciesPair.target} | Remitbee` : `Remitbee`
  const description = currenciesPair ? `Remitbee has the best fees for you to exchange ${currenciesPair.source} to ${currenciesPair.target}. Give it a try!`
    : `Remitbee has the best fees for you to exchange money abroad`

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='canonical' href='http://localhost:3000/'/>
        <link rel='alternate' hrefLang='x-default' href='http://localhost:3000/'/>
      </Head>

      <main>
        <div className={classes.header}>
          <Menu />
          <Title currenciesPair={currenciesPair} />
          <Box display='flex' justifyContent='center'>
            <div className={classes.convertCard}>
              <Convert currencies={currencies} values={currenciesPair} update={setCurrenciesPair} />
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

CompareResult.getInitialProps = async (ctx) => {
  const query = ctx.query
  const currencies = await countryService.getAll()
  return {
    ...query,
    currencies: currencies.sort((a, b) => a.currencyCode.localeCompare(b.currencyCode))
  }
}

export default CompareResult

import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Backdrop,
  CircularProgress,
  Container,
  Grid,
  InputBase,
  IconButton,
  Paper,
  Typography
} from '@material-ui/core'
import { SwapHoriz, SwapVert } from '@material-ui/icons'
import CurrenciesList from './CurrenciesList'
import { makeStyles } from '@material-ui/core/styles'
import covertService from '../services/convert'
import useForm from '../hooks/useForm'
import { useRouter } from 'next/router'

const Convert = props => {
  const classes = useStyles()
  const router = useRouter()
  const [result, setResult] = useState(null)
  const [final, setFinal] = useState('')
  const [listCurrencies] = useState(props.currencies)
  const [source, setSource] = useState(router.query ? listCurrencies.find(a => a.alpha3Code === router.query.from) : null)
  const [target, setTarget] = useState(router.query ? listCurrencies.find(a => a.alpha3Code === router.query.to) : null)
  const [open, setOpen] = useState(false)

  const { values, handleChange } = useForm({
    from: router.query ? router.query.from : '',
    to: router.query ? router.query.to : '',
    amount: router.query ? router.query.amount : ''
  })

  useEffect(() => {
    const fetchData = async () => {
      const result = await covertService.convert(source.currencyCode, target.currencyCode)
      if (result.val) {
        setTimeout(() => {
          setResult(result.val)
          setFinal((parseFloat(values.amount) * result.val).toFixed(2))
          setOpen(false)
        }, 1500)
      }
    }

    if (values.from && values.from !== '' && values.to && values.to !== '' && values.amount && values.amount !== '') {
      setOpen(true)
      const sourceCountry = listCurrencies.find(a => a.alpha3Code === values.from)
      const targetCountry = listCurrencies.find(a => a.alpha3Code === values.to)
      setSource(sourceCountry)
      setTarget(targetCountry)
      fetchData()
    }
  }, [router.query])

  const handleSwap = () => {
    if (values.from && values.to) {
      [values.from, values.to] = [values.to, values.from]
      change('from', values.from)
      change('to', values.to)
    }
  }

  const change = (name, value) => {
    setResult(null)
    setFinal('')
    handleChange({
      target: {
        name: name,
        value: value
      }
    })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    setOpen(true)
    setResult(null)
    setFinal('')
    const sourceCountry = listCurrencies.find(a => a.alpha3Code === values.from)
    const targetCountry = listCurrencies.find(a => a.alpha3Code === values.to)
    setSource(sourceCountry)
    setTarget(targetCountry)
    const options = router.asPath === '/' ? {} : { shallow : true }
    router.push('/[from]/[source]/[to]/[target]/[amount]',
     `/${values.from}/${sourceCountry.currencyCode}/${values.to}/${targetCountry.currencyCode}/${values.amount}`, options)
  }

  return (
    <Container maxWidth='lg'>
      <Paper>
        <Box p={3}>
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={0}>
              <Grid item xs={12} md={4}>
                <Typography className={classes.label}>{`You have`}</Typography>
                <Paper elevation={0} variant='outlined'>
                  <Grid container spacing={0}>
                    <Grid item xs={5} className={classes.countrySelect}>
                      <Box display='flex' alignItems='center' justifyContent='center' css={{ height: '100%' }}>
                        <CurrenciesList currencies={listCurrencies} name='from' value={values.from} update={handleChange} />
                      </Box>
                    </Grid>
                    <Grid item xs={7}>
                      <Box p={2}>
                        <InputBase
                          classes={{ input: classes.value }}
                          value={values.amount}
                          name='amount'
                          onChange={handleChange}
                          type='number'
                          placeholder='0.00'
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} md={1}>
                <Box display='flex' alignItems='center' justifyContent='center' css={{ height: '100%' }}>
                  <IconButton
                    size='small'
                    color='primary'
                    classes={{ root: classes.swapButton }}
                    onClick={handleSwap}>
                    <div className={classes.sectionDesktop}><SwapHoriz /></div>
                    <div className={classes.sectionMobile}><SwapVert /></div>
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography className={classes.label}>{`You want`}</Typography>
                <Paper elevation={0} variant='outlined'>
                  <Grid container spacing={0}>
                    <Grid item xs={5} className={classes.countrySelect}>
                      <Box display='flex' alignItems='center' justifyContent='center' css={{ height: '100%' }}>
                        <CurrenciesList currencies={listCurrencies} name='to' value={values.to} update={handleChange} />
                      </Box>
                    </Grid>
                    <Grid item xs={7}>
                      <Box p={2}>
                        <InputBase
                          classes={{ input: classes.disabled }}
                          value={final}
                          placeholder='?.??'
                          disabled
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box display='flex' alignItems='center' css={{ height: '100%' }}>
                  <Button
                    fullWidth
                    size='large'
                    color='secondary'
                    variant='contained'
                    type='submit'
                    classes={{ root: classes.gridButton, label: classes.button }}
                    disabled={values.from === '' || values.to === '' || values.amount === ''}
                    disableElevation>
                    {`Exchange now`}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form >
        </Box>
        <Box display='flex'>
          <Box flexGrow={1} pb={3} px={3}>
            {result && <Typography variant='h6'>{`1 ${source.currencyCode} = ${result} ${target.currencyCode}`}</Typography>}
          </Box>
          <Box pb={3} px={3}>
            <Typography variant='h6' align='right'>{`Our exchange fee: `}<b>{`0.00`}</b></Typography>
          </Box>
        </Box>
      </Paper>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color='secondary' />
      </Backdrop>
    </Container>
  )
}

const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.secondary.light,
    fontSize: theme.typography.pxToRem(16),
    fontWeight: 'regular',
    height: '51.63px',
    textTransform: 'none',
  },
  gridButton: {
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(5, 0, 0, 4),
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(3, 0, 0, 0),
    },
  },
  label: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  swapButton: {
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(5, 0, 0, 0),
    },
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(3, 0),
    },
  },
  value: {
    color: theme.palette.primary.dark,
    fontSize: theme.typography.pxToRem(30),
    padding: '0 0 0 5px',
    fontWeight: 'bold',
  },
  disabled: {
    color: theme.palette.primary.dark,
    fontSize: theme.typography.pxToRem(30),
    padding: '0 0 0 5px',
    fontWeight: 'bold',
  },
  countrySelect: {
    backgroundColor: theme.palette.primary.main,
    borderTopLeftRadius: '3px',
    borderBottomLeftRadius: '3px',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.secondary.main,
  },
}))

export default Convert

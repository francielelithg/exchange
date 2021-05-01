import React from 'react'
import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const Advantages = () => {
  const classes = useStyles()

  return (
    <Container maxWidth='md'>
      <Box my={16} px={4}>
        <Typography align='center' variant='h5'>{`Why choose Remitbee for your currency exchange?`}</Typography>
        <Box mb={4} />
        <Box display='flex' justifyContent='center' my={4}>
          <Divider classes={{ root: classes.divider }} />
        </Box>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <Paper elevation={1} className={classes.card}>
              <Box p={2}>
                <Box my={4}>
                  <Typography variant='h6'>{`10x better than the average bank`}</Typography>
                </Box>
                <Box my={4}>
                  <Typography variant='body1'>{`Banks have gotten away with bad rates because they know most people will not question the exchange 
                  rates they're being offered. The exchange rate they offer you is a lot lower than the real exchange rate, 
                  most people don't know any better.`}</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={1} className={classes.card}>
              <Box p={2}>
                <Box my={4}>
                  <Typography variant='h6'>{`Canadian based company`}</Typography>
                </Box>
                <Box my={4}>
                  <Typography variant='body1'>{`As a Toronto foreign exchange service, we are regulated and audited by 
                  FINTRAC, an agency of Canada's government. Have peace of mind knowing your money is protected.`}</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <Paper elevation={1} className={classes.card}>
              <Box p={2}>
                <Box my={4}>
                  <Typography variant='h6'>{`Amazing customer service`}</Typography>
                </Box>
                <Box my={4}>
                  <Typography variant='body1'>{`There's nothing more frustrating than feeling like you're talking to a costumer service 
                  representative that gives you generic and rehearsed replies. We'll let the positive customer service reviews on Trustpilot 
                  and Google prove how much we care for our customers.`}</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={1} className={classes.card}>
              <Box p={2}>
                <Box my={4}>
                  <Typography variant='h6'>{`Absolutely no fees`}</Typography>
                </Box>
                <Box my={4}>
                  <Typography variant='body1'>{`On top of very competitive rates, you get to enjoy zero 
                  fees when you exchange a minimum of only.`}</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

const useStyles = makeStyles((theme) => ({
  card: {
    [theme.breakpoints.up('md')]: {
      height: '280px',
    },
    margin: theme.spacing(2),
  },
  divider: {
    width: '180px',
    height: '5px',
    backgroundColor: theme.palette.primary.main,
  },
}))

export default Advantages

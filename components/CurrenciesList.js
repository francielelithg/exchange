import React, { useState, useEffect } from 'react'
import {
  Box,
  CardMedia,
  ListItemIcon,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'
import { findFlagUrlByIso2Code } from 'country-flags-svg'
import { makeStyles } from '@material-ui/core/styles'

const CurrenciesList = props => {
  const classes = useStyles()
  const [listCurrencies] = useState(props.currencies)
  const [name] = useState(props.name)
  const [value, setValue] = useState(props.value)

  useEffect(() => {
    setValue(props.value)
  }, [props.value])

  const handleCountryChange = (event) => {
    event.persist()
    setValue(event.target.value)
    props.update(event)
  }

  return (
    <Select
      disableUnderline
      IconComponent={ExpandMore}
      classes={{ root: classes.select, icon: classes.icon }}
      value={value}
      name={name}
      renderValue={option => {
        const country = listCurrencies.filter(a => a.alpha3Code === option)[0]
        if (!country) return
        return (
          <Box display='flex'>
            <Box>
              <CardMedia
                classes={{ root: classes.root }}
                image={findFlagUrlByIso2Code(country.alpha2Code)}
                title={country.countryName} />
            </Box>
            <Box
              className={classes.selected}
              pl={1}
              display='flex'
              alignItems='center'>
              {country.currencyCode}
            </Box>
          </Box>
        )
      }}
      onChange={handleCountryChange}
    >
      {listCurrencies && listCurrencies.map((country) => (
        <MenuItem
          value={country.alpha3Code}
          key={country.countryId}>
          <ListItemIcon>
            <CardMedia classes={{ root: classes.root }} image={findFlagUrlByIso2Code(country.alpha2Code)} title={country.countryName} />
          </ListItemIcon>
          <Box>
            <Box fontWeight='fontWeightBold' display='block'>{country.currencyCode}</Box>
            <Box display='block'>
              <Typography variant='caption'>{country.countryName.length > 21 ? `${country.countryName.slice(0, 21)}...` : country.countryName}</Typography>
            </Box>
          </Box>
        </MenuItem>
      ))}
    </Select>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '38px',
    height: '38px',
    borderRadius: '27px',
    backgroundColor: theme.palette.primary.main,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2)',
  },
  select: {
    display: 'flex',
    alignItems: 'center',
    verticalAlign: 'center',
    color: theme.palette.secondary.light,
    width: '86px',
    fontSize: theme.typography.pxToRem(18),
    fontWeight: 'bold',
    '&:focus': {
      backgroundColor: 'transparent'
    },
  },
  selected: {
    width: '46px',
    fontWeight: 500,
    textAlign: 'center',
  },
  icon: {
    color: theme.palette.secondary.light,
  },
}))

export default CurrenciesList

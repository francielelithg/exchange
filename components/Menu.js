import React, { useState } from 'react'
import {
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Container,
} from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'
import Logo from './Logo'
import { makeStyles } from '@material-ui/core/styles'

const MenuHeader = () => {
  const menuOptions = [
    { name: 'Remitbee Wallet' },
    { name: 'Refer & Earn' },
    { name: 'Business' },
    { name: 'Help' }
  ]
  const classes = useStyles()
  const [mobileMoreAnchor, setMobileMoreAnchor] = useState(null)
  const [options] = useState(menuOptions)
  const isMobileMenuOpen = Boolean(mobileMoreAnchor)

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchor(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchor(null)
  }

  return (
    <Container maxWidth='lg'>
      <Box pt={8} display='flex' fontWeight='fontWeightMedium' fontSize={20} alignItems='center'>
        <Box flexGrow={1}>
          <Logo />
        </Box>
        <Box>
          <Box display='flex' flexDirection='row'>
            <div className={classes.sectionDesktop}>
              <Box display='flex' flexDirection='row' alignItems='center'>
                {options && options.map((option, index) => (
                  <Link href='#' underline='none' key={index} className={classes.link}>
                    {option.name}
                  </Link>
                ))}
              </Box>
              <Box>
                <Box display='inline' px={2}>
                  <Button
                    size='large'
                    variant='outlined'
                    disableElevation
                    classes={{ root: classes.signup, label: classes.labelSignUp }}
                  >Sign up</Button>
                </Box>
                <Box display='inline'>
                  <Button
                    size='large'
                    variant='contained'
                    disableElevation
                    classes={{ root: classes.login, label: classes.labelLogin }}
                  >Login</Button>
                </Box>
              </Box>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                className={classes.icon}
                onClick={handleMobileMenuOpen}>
                <MoreVert />
              </IconButton>
              <Menu
                anchorEl={mobileMoreAnchor}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={handleMobileMenuClose}
              >
                {options && options.map((option, index) => (
                  <MenuItem key={index}>
                    {option.name}
                  </MenuItem>
                ))}
                <Box py={1}>
                  <Divider />
                </Box>
                <MenuItem>{`Sign up`}</MenuItem>
                <MenuItem>{`Login`}</MenuItem>
              </Menu>
            </div>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(0, 6, 0, 0),
    color: theme.palette.secondary.light,
    fontSize: theme.typography.pxToRem(16),
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.primary.main
    },
  },
  signup: {
    border: 'solid 1px #ffffff',
  },
  login: {
    backgroundColor: theme.palette.secondary.light,
  },
  icon: {
    color:  theme.palette.secondary.light,
  },
  labelSignUp: {
    color: theme.palette.secondary.light,
    fontSize: theme.typography.pxToRem(16),
    fontWeight: 'regular',
    textTransform: 'none'
  },
  labelLogin: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.pxToRem(16),
    fontWeight: 'regular',
    textTransform: 'none'
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
}))

export default MenuHeader

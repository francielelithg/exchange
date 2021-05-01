import React from 'react'
import {
  Container,
  Box,
  Typography
} from '@material-ui/core'

const Copyright = () => {
  return (
    <Container maxWidth='lg'>
      <Box display='flex' my={3}>
        <Box flexGrow={1}>
          <Typography variant='caption'>{`Made with ❤️ in Canada`}</Typography>
        </Box>
        <Box>
          <Typography variant='caption' align='right'>{`© 2021 Remitbee Inc. All Rights Reserved.`}</Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default Copyright

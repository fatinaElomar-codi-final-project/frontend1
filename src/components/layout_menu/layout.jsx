import { Stack } from '@mui/system'
import React from 'react'
import Footer from '../Footer/footer'
import NavBar from '../navbar/navbar'

export default function Layout({children}) {
  return (
   <>
      <NavBar/>
      <Stack
        direction="column"
        // spacing={2}
        // paddingX={5}
        width="100%"
      >
        {children}
      </Stack>
      <Footer/>
      </>
  )
}

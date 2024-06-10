import { useState } from 'react'
import MenuItem from './components/MenuItem'
import './App.css'
import Layout from './components/Layout'
import MyRouter from './components/MyRouter'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ThemeProvider, createTheme } from '@mui/material'


// Consuming the outer theme is only required with coexisting themes, like in this documentation.
// If your app/website doesn't deal with this, you can have just:
// const theme = createTheme({ direction: 'rtl' })
const theme = createTheme({ direction: 'rtl' });

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div dir="rtl"></div>
    <MyRouter/>
    </ThemeProvider>
    </CacheProvider>
    </>
    
    
     
  )
}

export default App

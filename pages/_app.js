import TinaProvider from '../.tina/components/TinaDynamicProvider'

import '../style.css'

const App = ({ Component, pageProps }) => {
  return (
    <TinaProvider>
      <Component {...pageProps} />
    </TinaProvider>
  )
}

export default App

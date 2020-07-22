import '../styles/index.css'
import { Provider } from 'react-redux'
import { useStore } from '../lib/redux'

export default function MyApp({ Component, pageProps }) {
  const store = useStore();
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

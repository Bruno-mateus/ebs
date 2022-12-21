import { Header } from '../components/Header'
import { globalStyles } from '../styles/global'

export default function App() {
  globalStyles()

  return (
    <>
      <Header />
      <h1>Hello world</h1>
    </>
  )
}

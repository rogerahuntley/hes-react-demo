import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> // strict mode causes double rendering in dev. nice for finding bugs, but not what we're doing rn
    <App />
  // </React.StrictMode>,
)

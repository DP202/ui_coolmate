import './App.css';
import { Fragment } from 'react';
import AppRouter from './routes/AppRouter'
function App() {
  const appRouter = AppRouter()
  return <Fragment>
      {appRouter}
  </Fragment>
}

export default App;

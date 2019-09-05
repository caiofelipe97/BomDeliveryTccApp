import React from 'react'
import { Root } from 'native-base'
import { MainNavigator } from './navigators'
import { LoadingProvider } from './components/contexts/LoadingContext'
import Loading from './components/Loading'

class App extends React.Component {
  render() {
    return (
      <LoadingProvider>
        <Root>
          <MainNavigator />
        </Root>
        <Loading />
      </LoadingProvider>
    )
  }
}

export default App

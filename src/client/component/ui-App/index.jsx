
// @flow

import React from 'react'
import HelloButton from '../ui-HelloButton'
import HelloAsyncButton from '../ui-HelloAsyncButton'
import Message from '../ui-HelloMessage'
import MessageAsync from '../ui-HelloAsyncMessage'
import { APP_NAME } from '../../../shared/config'

const App = () =>
  <div>
    <h1>{APP_NAME}</h1>
    <Message />
    <HelloButton />
    <MessageAsync />
    <HelloAsyncButton />
  </div>

export default App

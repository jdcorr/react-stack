// @flow

import React from 'react'
import Helmet from 'react-helmet'

import HelloButton from '../ui-HelloButton'
import Message from '../ui-HelloMessage'

const title = 'Hello Page';

const HelloPage = () =>
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Hello App is an app to say hello' },
        { property: 'og:title', content: title },
      ]}
    />
    <h1>{ title }</h1>
    <Message />
    <HelloButton />
  </div>

export default HelloPage

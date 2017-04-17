// @flow

import React from 'react';
import Helmet from 'react-helmet';

import HelloAsyncButton from '../ui-HelloAsyncButton';
import HelloAsyncMessage from '../ui-HelloAsyncMessage';

const title = 'Async Hello Page';

const HelloAsyncPage = () =>
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Hello App is an app to say hello' },
        { property: 'og:title', content: title },
      ]}
    />
    <h1>{ title }</h1>
    <HelloAsyncMessage />
    <HelloAsyncButton />
  </div>

export default HelloAsyncPage

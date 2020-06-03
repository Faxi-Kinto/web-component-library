import React, { Suspense } from 'react';
import { addDecorator } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

addDecorator(storyFn => (
  <I18nextProvider i18n={i18n.default}>
    <Suspense fallback="loading">{storyFn()}</Suspense>
  </I18nextProvider>
));

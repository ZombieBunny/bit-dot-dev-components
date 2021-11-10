import React from 'react';
import { render } from '@testing-library/react';
import { BasicHeader } from './header.composition';

it('should render with the correct url', () => {
  const { getByText } = render(<BasicHeader />);
  const rendered = getByText('Instagram').closest('a');
  expect(rendered).toBeTruthy();
  expect(rendered).toHaveAttribute('href', '/');
});
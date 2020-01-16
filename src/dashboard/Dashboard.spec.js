// Test away

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Dashboard from './Dashboard.js';

test('Dashboard shows the controls and display', () => {
  const dashboard = render(<Dashboard />);
  expect(dashboard).toMatchSnapshot();
})

test("defaults to unlocked and open", () => {
  const dashboard = render(<Dashboard />);
  expect(dashboard.getByText(/unlocked/i));
  expect(dashboard.getByText(/open/i));
})

// Test away

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Dashboard from './Dashboard.js';

test('Dashboard renders correctly', () => {
  const dashboard = render(<Dashboard />);
  expect(dashboard).toMatchSnapshot();
})

test("gate can't be opened if locked", () => {
  const dashboard = render(<Dashboard locked={true} hasKeyCard={false} />);
  const openButton = dashboard.getByText(/open/i);
  expect(openButton).toBeDisabled();
  //expect(openButton).not.toBeEnabled();
})

test("defaults to locked and does not have key card", () => {
  const dashboard = render(<Dashboard />);
  expect(dashboard.getByText(/locked/i));
  expect(dashboard.getByText(/insert key card/i));
})

test("if locked is false and has key card", () => {
  const dashboard = render(<Dashboard locked={false} hasKeyCard={true} />);
  expect(dashboard.getByText(/unlocked/i));
  expect(dashboard.getByText(/remove key card/i));
})

test("button contains locked className when locked", () => {
  const dashboard = render(<Dashboard locked={true} />);
  const button = dashboard.getByText(/locked/i);
  expect(button.classList.contains('locked').toBe(true));
})

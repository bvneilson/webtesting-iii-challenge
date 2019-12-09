// Test away!

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Display from './Display.js';

test("displays if gate is open/closed and if it is locked/unlocked", () => {
  const display = render(<Display />);
  expect(display.getByText(/open/i));
  expect(display.getByText(/unlocked/i));
})

test("displays 'Closed' if the closed prop is true and 'Open' if otherwise", () => {
  const display = render(<Display closed={true} />);
  expect(display.getByText(/closed/i));
})

test("displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise", () => {
  const display = render(<Display locked={true} />);
  expect(display.getByText(/locked/i));
})

test("when locked or closed use the red-led class", () => {
  const display = render(<Display closed={true} locked={true} />);
  const closed = display.getByText(/closed/i);
  const locked = display.getByText(/locked/i);
  expect(closed.classList.contains('red-led')).toBe(true);
  expect(locked.classList.contains('red-led')).toBe(true);
})

test("when unlocked or open use the green-led class", () => {
  const display = render(<Display />);
  const open = display.getByText(/open/i);
  const unlocked = display.getByText(/unlocked/i);
  expect(open.classList.contains('green-led')).toBe(true);
  expect(unlocked.classList.contains('green-led')).toBe(true);
})

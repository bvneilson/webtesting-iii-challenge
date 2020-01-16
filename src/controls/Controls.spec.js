// Test away!

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Controls from './Controls.js';

test("gate can't be closed or opened if locked", () => {
  const controls = render(<Controls locked={true} closed={true} />);
  const openButton = controls.getByText(/Open Gate/i);
  expect(openButton).toBeDisabled();
  //expect(openButton).not.toBeEnabled();
})

test("provide buttons to toggle the closed and locked states", () => {
  const controls = render(<Controls />);
  expect(controls.getByText(/Close Gate/i));
  expect(controls.getByText(/Lock Gate/i));
})

test("buttons' text changes to reflect the state the door will be in if clicked", () => {
  const controls = render(<Controls closed={true} />);
  const lockButton = controls.getByText(/Open Gate/i);
  expect(controls.getByText(/Open Gate/i));
  expect(lockButton).toBeEnabled();
})

test("the closed toggle button is disabled if the gate is locked", () => {
  const controls = render(<Controls locked={true} closed={true} />);
  const openButton = controls.getByText(/Open Gate/i);
  expect(openButton).toBeDisabled();
})

test("the locked toggle button is disabled if the gate is open", () => {
  const controls = render(<Controls />);
  const lockButton = controls.getByText(/Lock Gate/i);
  expect(lockButton).toBeDisabled();
})

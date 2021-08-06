import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import userEvent from "@testing-library/user-event";
import App from './App';



test('ToDo', () => {
  const { getByText, getByLabelText } = render(<App />);
  
  // after rendering the components
  // use DOM APIs (query selector) to make assertions
  expect(getByText('Add an item:')).not.toBeNull();


});

test('add items to list', () => {
  const { findByText, getByLabelText } = render(<App />);
  
  const input = getByLabelText('todo-input');
  fireEvent.change(input, { target: { value: '23' } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

  expect(findByText('23')).toBeTruthy();

});

test("user-events allows users to add...", () => {
  const { findByText, getByLabelText } = render(<App />);

  const input = getByLabelText('todo-input');

  userEvent.type(input, "Learn Spanish");
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

  findByText('Learn Spanish');


})
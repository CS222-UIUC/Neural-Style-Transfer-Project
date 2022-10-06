import { render, screen } from '@testing-library/react';
import App from './App';
import TestComponent from '../model/Main'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('test external modle module', () => {
  expect(TestComponent()).toBe(384);
});

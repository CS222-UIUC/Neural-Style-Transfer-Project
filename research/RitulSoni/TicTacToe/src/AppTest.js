import { render, screen } from '@testing-library/react';
import App from './App';


  render(<App />);
  it('Squares in Rows Add up to three', () => {
    expect(sum(1, 2)).toEqual(3);
    expect(sum(0, 3)).toEqual(3);

});

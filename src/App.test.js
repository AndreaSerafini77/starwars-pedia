import { render, screen } from '@testing-library/react';
import App from './App';

test('find an image with star wars as an Alt Text', () => {
  render(<App />);
  const spanElement = screen.getByAltText('star wars');
  expect(spanElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe('Home Page', () => {
  it('should render the main heading', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const heading = screen.getByRole('heading', {
      name: /Bienvenue dans votre parcours\s*A1 vers A2/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

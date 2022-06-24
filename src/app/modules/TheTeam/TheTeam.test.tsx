import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TheTeam from './TheTeam';

describe('<TheTeam />', () => {
  test('it should mount', () => {
    render(<TheTeam />);
    
    const theTeam = screen.getByTestId('TheTeam');

    expect(theTeam).toBeInTheDocument();
  });
});
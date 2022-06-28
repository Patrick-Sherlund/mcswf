import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToggleSwitch from './ToggleSwitch';

describe('<ToggleSwitch />', () => {
  test('it should mount', () => {
    render(<ToggleSwitch themeEventHandler={() => {}} />);

    const toggleSwitch = screen.getByTestId('ToggleSwitch');

    expect(toggleSwitch).toBeInTheDocument();
  });
});

import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StatusBar from './StatusBar';
import {PageName} from "../../global/enums/global";

describe('<StatusBar />', () => {
  test('it should mount', () => {
    render(<StatusBar pageName={PageName.GET_INVOLVED} />);

    const statusBar = screen.getByTestId('StatusBar');

    expect(statusBar).toBeInTheDocument();
  });
});

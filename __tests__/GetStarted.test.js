import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import GetStarted from '../src/components/GetStarted';

describe('GetStarted Component', () => {
  it('GetStarted renders correctly', () => {
    const onPressMock = jest.fn();
    const { getByText, getByTestId } = render(<GetStarted onPress={onPressMock} />);

    expect(getByText('Welcome to')).toBeTruthy();
    expect(getByText('PlantApp')).toBeTruthy();

    expect(
      getByText('Identify more than 3000+ plants and 88% accuracy.')
    ).toBeTruthy();

    const getStartedButton = getByText('Get Started');
    expect(getStartedButton).toBeTruthy();

    fireEvent.press(getStartedButton);
    expect(onPressMock).toHaveBeenCalled();

    expect(
      getByText('By tapping next, you are agreeing to PlantID')
    ).toBeTruthy();

    expect(getByText('Terms of Use')).toBeTruthy();
    expect(getByText('Privacy Policy.')).toBeTruthy();
  });
});

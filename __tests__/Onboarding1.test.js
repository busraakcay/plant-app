import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Onboarding1 from '../src/components/Onboarding1';

describe('Onboarding1 Component', () => {
  it('Onboarding1 renders correctly', () => {
    const onPressMock = jest.fn();
    const {getByText, getByTestId} = render(
      <Onboarding1 onPress={onPressMock} />,
    );
    expect(getByText('Take a photo to')).toBeTruthy();
    expect(getByText('identify')).toBeTruthy();
    expect(getByText('the plant!')).toBeTruthy();

    const plantImage = getByTestId('plant-image');
    expect(plantImage).toBeTruthy();

    const continueButton = getByText('Continue');
    expect(continueButton).toBeTruthy();

    fireEvent.press(continueButton);
    expect(onPressMock).toHaveBeenCalled();
  });
});

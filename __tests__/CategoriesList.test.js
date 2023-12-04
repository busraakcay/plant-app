import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import CategoriesList from '../src/components/custom/CategoriesList';

const mockStore = configureStore([]);

describe('CategoriesList Component', () => {
  it('renders loading state initially', async () => {
    const initialState = {
      categories: {
        loading: true,
        error: false,
        data: [],
      },
    };

    const store = mockStore(initialState);

    const {getByTestId} = render(
      <Provider store={store}>
        <CategoriesList />
      </Provider>,
    );

    const loadingIndicator = getByTestId('loading-indicator');
    expect(loadingIndicator).toBeTruthy();
  });

  it('renders categories when data is available', async () => {
    const initialState = {
      categories: {
        loading: false,
        error: false,
        data: [
          {
            id: 1,
            title: 'Category 1',
            image: {
              url: 'https://cms-cdn.plantapp.app/6_edbcc6988a/6_edbcc6988a.png',
            },
          },
          {
            id: 2,
            title: 'Category 2',
            image: {
              url: 'https://cms-cdn.plantapp.app/6_edbcc6988a/6_edbcc6988a.png',
            },
          },
        ],
      },
    };

    const store = mockStore(initialState);

    const {getByText} = render(
      <Provider store={store}>
        <CategoriesList />
      </Provider>,
    );

    const category1 = getByText('Category 1');
    const category2 = getByText('Category 2');
    expect(category1).toBeTruthy();
    expect(category2).toBeTruthy();
  });

  it('renders error state if there is an error', async () => {
    const initialState = {
      categories: {
        loading: false,
        error: true,
        data: [],
      },
    };

    const store = mockStore(initialState);

    const {getByText, getByTestId} = render(
      <Provider store={store}>
        <CategoriesList />
      </Provider>,
    );

    const errorMessage = getByText('Bir şeyler ters gitti!');
    expect(errorMessage).toBeTruthy();
  });
});

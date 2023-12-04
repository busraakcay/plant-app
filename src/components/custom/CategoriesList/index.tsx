import {FlatList, View} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks/reduxHooks';
import CategoriesListItem from '../CategoriesListItem';
import {styles} from './styles';
import Loading from '../ActionFeedback/Loading';
import Error from '../ActionFeedback/Error';
import { fetchCategoryData } from '../../../redux/slices/categoriesSlice';

function index(): JSX.Element {
  const categoriesLoading = useAppSelector(state => state.categories.loading);
  const categoriesError = useAppSelector(state => state.categories.error);
  const categoriesData = useAppSelector<any>(state => state.categories.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategoryData());
  }, []);

  return (
    <>
      {categoriesLoading && <Loading testID='loading-indicator' />}
      {categoriesError && <Error />}
      {categoriesData.length > 0 && (
        <View style={styles.container}>
          <FlatList
            data={categoriesData}
            keyExtractor={item => String(item.id)}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            scrollEnabled={false}
            renderItem={CategoriesListItem}
          />
        </View>
      )}
    </>
  );
}

export default index;

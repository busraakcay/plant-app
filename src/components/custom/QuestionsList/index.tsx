import {FlatList, View} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks/reduxHooks';
import {fetchQuestions} from '../../../redux/actions/questionsActions';
import QuestionsListItem from '../QuestionsListItem';
import {styles} from './styles';
import Loading from '../ActionFeedback/Loading';
import Error from '../ActionFeedback/Error';

function index(): JSX.Element {
  const questionsLoading = useAppSelector(state => state.questions.loading);
  const questionsError = useAppSelector(state => state.questions.error);
  const questionsData = useAppSelector(state => state.questions.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  return (
    <>
      {questionsLoading && <Loading />}
      {questionsError && <Error />}
      {questionsData.length > 0 && (
        <View style={styles.container}>
          <FlatList
            data={questionsData}
            keyExtractor={item => String(item.id)}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={QuestionsListItem}
          />
        </View>
      )}
    </>
  );
}

export default index;

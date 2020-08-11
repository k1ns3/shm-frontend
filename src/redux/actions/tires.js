import axios from 'axios';

export const fetchTires = () => (dispatch) => {
  axios.get('http://localhost:3001/tires').then(({ data }) => {
    dispatch(setTires(data));
  });
};

export const setTires = (items) => ({
  type: 'SET_TIRES',
  payload: items,
});

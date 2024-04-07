import axios from 'axios';

export const FETCH_USER_DATA = 'FETCH_USER_DATA';

export const fetchUserData = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/user');
    dispatch({ type: FETCH_USER_DATA, payload: response.data });
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};

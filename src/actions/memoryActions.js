import axios from 'axios';
import {
  FETCH_MEMORIES_REQUEST,
  FETCH_MEMORIES_SUCCESS,
  FETCH_MEMORIES_FAILURE,
  FETCH_MEMORY_REQUEST,
  FETCH_MEMORY_SUCCESS,
  FETCH_MEMORY_FAILURE,
  CREATE_MEMORY_REQUEST,
  CREATE_MEMORY_SUCCESS,
  CREATE_MEMORY_FAILURE,
  UPDATE_MEMORY_REQUEST,
  UPDATE_MEMORY_SUCCESS,
  UPDATE_MEMORY_FAILURE,
  DELETE_MEMORY_REQUEST,
  DELETE_MEMORY_SUCCESS,
  DELETE_MEMORY_FAILURE,
} from '../actionTypes';

export const fetchMemories = () => async (dispatch) => {
  dispatch({ type: FETCH_MEMORIES_REQUEST });

  try {
    const response = await axios.get('/api/memories');
    dispatch({ type: FETCH_MEMORIES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_MEMORIES_FAILURE, payload: error.message });
  }
};

export const fetchMemory = (id) => async (dispatch) => {
  dispatch({ type: FETCH_MEMORY_REQUEST });

  try {
    const response = await axios.get(`/api/memories/${id}`);
    dispatch({ type: FETCH_MEMORY_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_MEMORY_FAILURE, payload: error.message });
  }
};

export const createMemory = (memoryData) => async (dispatch) => {
  dispatch({ type: CREATE_MEMORY_REQUEST });

  try {
    const response = await axios.post('/api/memories', memoryData);
    dispatch({ type: CREATE_MEMORY_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: CREATE_MEMORY_FAILURE, payload: error.message });
  }
};

export const updateMemory = (id, memoryData) => async (dispatch) => {
  dispatch({ type: UPDATE_MEMORY_REQUEST });

  try {
    const response = await axios.put(`/api/memories/${id}`, memoryData);
    dispatch({ type: UPDATE_MEMORY_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: UPDATE_MEMORY_FAILURE, payload: error.message });
  }
};

export const deleteMemory = (id) => async (dispatch) => {
  dispatch({ type: DELETE_MEMORY_REQUEST });

  try {
    await axios.delete(`/api/memories/${id}`);
    dispatch({ type: DELETE_MEMORY_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: DELETE_MEMORY_FAILURE, payload: error.message });
  }
};

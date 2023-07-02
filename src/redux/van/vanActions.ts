import {
  FetchRequest,
  FetchSuccess,
  FetchFailure,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  Van
} from "./vanTypes";

export const fetchRequest = (): FetchRequest => {
  return {
    type: FETCH_REQUEST
  };
};

export const fetchSuccess = (payload: Van | Van[]): FetchSuccess => {
  return {
    type: FETCH_SUCCESS,
    payload
  };
};

export const fetchFailure = (error: string): FetchFailure => {
  return {
    type: FETCH_FAILURE,
    error
  };
};
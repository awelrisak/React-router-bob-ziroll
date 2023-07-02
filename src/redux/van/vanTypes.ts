export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export interface Van {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
}

export interface FetchRequest {
  type: typeof FETCH_REQUEST;
}

export interface FetchSuccess {
  type: typeof FETCH_SUCCESS;
  payload: Van | Van[]; 
}

export interface FetchFailure {
  type: typeof FETCH_FAILURE;
  error: string; 
}

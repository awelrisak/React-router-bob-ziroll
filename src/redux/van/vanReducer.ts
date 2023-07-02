import {
  FetchRequest,
  FetchSuccess,
  FetchFailure,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  Van
} from "./vanActionTypes";

export interface VanState {
  loading: boolean;
  vans: Van | Van[];
  error: string;
}

export const initialVansState: VanState = {
  loading: false,
  vans: [],
  error: ""
};
export const initialVanState: VanState = {
  loading: false,
  vans: {} as Van,
  error: ""
};


const vansReducer = (state: VanState = initialVansState, action: FetchRequest | FetchSuccess | FetchFailure) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        vans: action.payload,
        error: ""
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export const vanReducer = (state: VanState = initialVanState, action: FetchRequest | FetchSuccess | FetchFailure) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_SUCCESS:
      return {
        ...initialVanState,
        vans: action.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};


export default vansReducer;

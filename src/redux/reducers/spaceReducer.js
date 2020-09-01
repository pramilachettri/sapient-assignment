import { GET_INITIAL_DATA, SET_LOADING } from '../actions/types';


const initalState = {
  initialData: [],
  launchSuccessData: [],
  launchYearData: [],
  loading: false
}


export default  (state=initalState, action) =>{
 switch(action.type){
   case GET_INITIAL_DATA:
     return{
     ...state,
     initialData:action.payload,
     loading: false
    }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };    
   default:
     return state;
  }
}
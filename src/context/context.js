import { 
    SET_LOADING, 
    SET_STORIES, 
    REMOVE_STORY,
    HANDLE_PAGE,
    HANDLE_SEARCH 
    } from "../actions/actions";

import reducer from "../reducers/reducer";

const API_ENDPOINT = 'https:///hn.algolia.com/api/v1/search?';

const initialState = {
    isLoading: true,
    hits: [],
    query: `react`,
    page: 0,
    nbPages: 0
}

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const featchStories = async (url) => {
        dispatch({type:SET_LOADING});
        try{
            const response = await fetch(url);
            const data = await response.json();
            dispatch({
                type: SET_STORIES, 
                payload:{hits: data, nbPages: data.nbPages}
            })
        }
    }
}
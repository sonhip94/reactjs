var initialState = false;
//tao reducer la 1 function - tra ra state moi
 
var myReducer = (state = initialState, action) => {
	if(action.type === 'TOGGLE_STATUS'){
		state= !state;
	}
	return state;
}

export default myReducer;
var initialState = {
		by: 'status',
		value: 1
	}

//tao reducer la 1 function - tra ra state moi
 
var myReducer = (state = initialState, action) => {
	if(action.type ==='SORT'){
		var {by,value} = action.sort; //by = action.sort.by ES6

		return {
				by:by,
				value:value
			}
	}
	return state;
}

export default myReducer;
/* Reducer for posts states
    switch case on the type of action,
    Where the logic is written to change that variable, ie, state
*/

/* posts is initialize as empty if not given*/
const reducer = (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        case 'UPDATE':
        case 'LIKE':
            // .map returns an array
            // tertiary form, if if is equal return updated change else return normal
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case 'DELETE':
            // filters and returns all posts if postID isnt what was deleted
            return posts.filter((post) => post._id !== action.payload);
        default:
            return posts;
    }
}

export default reducer;
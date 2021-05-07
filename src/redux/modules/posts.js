const moduleName = 'posts';

const actions = {
  GET_POSTS: `${moduleName}/GET_POSTS`,
  DELETE_POST: `${moduleName}/DELETE_POST`,
  CREATE_POST: `${moduleName}/CREATE_POST`,
};

const initialState = {
  posts: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.GET_POSTS:
      return {
        ...state,
        posts: payload,
      };
    case actions.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== payload.id),
      };
    case actions.CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, payload],
      };
    default:
      return state;
  }
};

export const getPosts = () => async (dispatch) => {
  try {
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => dispatch({ type: actions.GET_POSTS, payload: data }));
  } catch (error) {
    console.log(error);
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });
    dispatch({ type: actions.DELETE_POST, payload: { id } });
  } catch (error) {
    console.log(error);
  }
};
export const createPost = ({ title, body }) => async (dispatch) => {
  try {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => dispatch({ type: actions.CREATE_POST, payload: data }));
  } catch (error) {
    console.log(error);
  }
};

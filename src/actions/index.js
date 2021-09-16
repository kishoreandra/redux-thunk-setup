export const sampleAction = () => async (dispatch) => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await resp.json();
  dispatch({
    type: "NEW",
    payload: data,
  });
};

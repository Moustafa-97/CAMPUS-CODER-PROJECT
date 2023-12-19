
const useAddDelete = (url, methods, constent) => {
  if (methods === "POST") {
    fetch(url, {
      method: methods,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(constent),
    });
    if (methods === "DELETE") {
      fetch(url, {
        method: methods,
      });
    }
  }
};
export default useAddDelete;

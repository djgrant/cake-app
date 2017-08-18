const url =
  "https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json";

const makeId = (title, index) =>
  title
    .split(" ")
    .join("-")
    .concat(index);

let cakesCache;

export default {
  key: "cakes",
  get() {
    if (cakesCache) {
      return Promise.resolve(cakesCache);
    }
    return fetch(url)
      .then(r => r.json())
      .then(data => {
        data = data.map((cake, i) => ({
          id: makeId(cake.title, i),
          ...cake
        }));
        cakesCache = data;
        return data;
      });
  },
  add: ({ data }) => {
    cakesCache.unshift({
      id: makeId(data.title, cakesCache.length),
      ...data
    });
    return Promise.resolve(cakesCache);
  },
  edit: ({ data, id }) => {
    cakesCache = cakesCache.map(
      cake => (cake.id === id ? { id: id, ...data } : cake)
    );
    return Promise.resolve(cakesCache);
  },
  remove: ({ id }) => {
    cakesCache = cakesCache.filter(cake => cake.id !== id);
    return Promise.resolve(cakesCache);
  }
};

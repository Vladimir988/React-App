export const getPageCount = (total, limit) => {
  return Math.ceil(total / limit);
}

export const getPagesArray = (total) => {
  let result = [];

  for (let i = 0; i < total; i++) {
    result.push(i + 1);
  }

  return result;
}
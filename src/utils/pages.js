const getPageCount = (total, limit) => {
  return Math.ceil(total / limit);
}

export default getPageCount;
// Tạo chuỗi query filter từ object
export const createFilterQuery = (queryObject) => {
  const filterQuery = Object.entries(queryObject)
    .map(([key, value]) => {
      if (value === undefined) {
        return `${key}=""`;
      }
      return `${key}=${value}`;
    })
    .join("&");
  return filterQuery;
};

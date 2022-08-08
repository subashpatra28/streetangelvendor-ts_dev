export const filterArrayOfObj = (
  arr: Array<any>,
  key: string,
  value: string,
  sort: { order: "asc" | "desc"; key: string | null } = {
    order: "asc",
    key: null,
  }
): Array<any> => {
  const result =
    arr && arr.length
      ? arr.filter((obj) => {
          return obj[key] == value;
        })
      : [];
  // console.log('sort received', sort);
  if (sort.key && result.length > 0) {
    return sortByKey(result, sort.key, sort.order);
  }
  return result;
};

export function sortByKey(
  array: Array<any>,
  key: string,
  order: "asc" | "desc"
) {
  return order === "desc"
    ? array.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        return x > y ? -1 : x < y ? 1 : 0;
      })
    : array.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        return x < y ? -1 : x > y ? 1 : 0;
      });
}

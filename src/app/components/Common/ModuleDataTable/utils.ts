export const like = (str: $TSFixMe, search: $TSFixMe) => {
  if (typeof search !== "string" || str === null) {
    return false;
  }
  search = search.replace(
    new RegExp(
      "([\\.\\\\\\+\\*\\?\\[\\^\\]\\$\\(\\)\\{\\}\\=\\!\\<\\>\\|\\:\\-])",
      "g"
    ),
    "\\$1"
  );
  search = search.replace(/%/g, ".*").replace(/_/g, ".");
  return RegExp("^" + search + "$", "gi").test(str);
};

export const resolveObjProp = (path: $TSFixMe, obj: $TSFixMe) =>
  path.split(".").reduce(function (prev: $TSFixMe, curr: $TSFixMe) {
    return prev ? prev[curr] : null;
  }, obj);

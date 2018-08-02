export const filterByProp = prop => (list, value) =>
  list.filter(item => item[prop] === value);

export const filterById = filterByProp("id");

export const filterByKeyCode = filterByProp("keyCode");

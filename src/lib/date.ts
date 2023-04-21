export function dateNewestFirst(array: any) {
  array = array.sort(function (a: number, b: number) {
    return new Date(b.data.Date) - new Date(a.data.Date);
  });
  return array;
}

export function dateOldestFirst(array: any) {
  array = array.sort(function (a: number, b: number) {
    return new Date(a.data.Date) - new Date(b.data.Date);
  });
  return array;
}

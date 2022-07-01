export const sortByValue = <T, TKey extends keyof T>(
  array: T[],
  sortValue: TKey
) => {
  const sortedArr = [...array].sort((a, b) => {
    if (a[sortValue] < b[sortValue]) return -1;
    if (a[sortValue] > b[sortValue]) return 1;
    return 0;
  });

  return sortedArr;
};

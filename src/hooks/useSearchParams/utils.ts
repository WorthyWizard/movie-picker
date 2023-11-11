import { SearchParams } from ".";

export const parseNativeSearchParams = <T extends SearchParams>(
  searchParams: URLSearchParams
) => {
  return Object.fromEntries([...searchParams]) as T;
};

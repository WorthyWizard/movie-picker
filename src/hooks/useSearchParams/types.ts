import { NavigateOptions } from "react-router-dom";

export type SearchParams = Record<string, string>;

export type SetSearchParamsDispatch<T extends SearchParams> = (
  params: Partial<T> | ((prevSearchParams: T) => T),
  navigateOpts?: NavigateOptions
) => void;

export type UseSearchParamsReturnValue<T extends SearchParams> = [
  T,
  SetSearchParamsDispatch<T>,
];

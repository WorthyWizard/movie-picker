import { useCallback, useEffect } from "react";
import {
  createSearchParams,
  NavigateOptions,
  useSearchParams as useRouterSearchParams,
} from "react-router-dom";

import {
  SearchParams,
  SetSearchParamsDispatch,
  UseSearchParamsReturnValue,
} from "./types";
import { parseNativeSearchParams } from "./utils";

export const useSearchParams = <T extends SearchParams = SearchParams>(
  defaultValues?: T,
  globalNavigateOptions?: NavigateOptions
): UseSearchParamsReturnValue<T> => {
  const [searchParams, setSearchParams] = useRouterSearchParams();

  useEffect(() => {
    updateSearchParams((prevParams) => ({
      ...defaultValues,
      ...prevParams,
    }));
  }, []);

  const parsedSeachParams = parseNativeSearchParams<T>(searchParams);

  const updateSearchParams: SetSearchParamsDispatch<T> = useCallback(
    (params, navigateOpts) => {
      switch (typeof params) {
        case "object":
          setSearchParams(
            createSearchParams({
              ...(params as T),
            }),
            {
              ...globalNavigateOptions,
              ...navigateOpts,
            }
          );
          break;
        case "function":
          setSearchParams(
            (prevSearchParams) => {
              return createSearchParams({
                ...params(parseNativeSearchParams(prevSearchParams)),
              });
            },
            {
              ...globalNavigateOptions,
              ...navigateOpts,
            }
          );
          break;
      }
    },
    [setSearchParams]
  );

  return [parsedSeachParams, updateSearchParams];
};

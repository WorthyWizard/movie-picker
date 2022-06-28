import useLazyInput from "@/hooks/useLazyInput";
import {
  ChangeEventHandler,
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  useEffect,
  useLayoutEffect,
} from "react";
import s from "./Search.module.css";

interface SearchProps {
  onSearch: (value: string) => void;
  searchQueryParam?: string;
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

const Search: FC<SearchProps> = (props) => {
  const { onSearch, searchQueryParam, inputProps } = props;

  const [lazyValue, setValue, realtimeValue] = useLazyInput(searchQueryParam);

  useEffect(() => {
    if (realtimeValue.length > 2) {
      onSearch(lazyValue);
    }
  }, [lazyValue]);

  const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={s.SearchInputWrapper}>
      <input
        type="text"
        placeholder="Type at least 3 characters"
        onChange={inputChangeHandler}
        value={realtimeValue}
        {...inputProps}
      />
    </div>
  );
};

export default Search;

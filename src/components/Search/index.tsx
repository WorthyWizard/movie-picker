import {
  ChangeEventHandler,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
} from "react";

import { useLazyInput } from "@/hooks/useLazyInput";

import s from "./styles.module.css";

interface Props {
  onSearch: (value: string) => void;
  initialValue?: string;
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

export const Search = (props: Props) => {
  const { onSearch, initialValue, inputProps } = props;

  const [lazyValue, setValue, realtimeValue] = useLazyInput(initialValue);

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
        autoFocus
        type="text"
        placeholder="Type at least 3 characters"
        onChange={inputChangeHandler}
        value={realtimeValue}
        {...inputProps}
      />
    </div>
  );
};

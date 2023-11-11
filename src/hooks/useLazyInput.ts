import { useCallback, useEffect, useRef, useState } from "react";

export const useLazyInput = <T extends string = string>(
  initialValue?: T,
  delay: number = 700
): [string, (value: string) => void, string] => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [lazyInputValue, setLazyInputValue] = useState<string>(
    initialValue ?? ""
  );
  const [realtimeInputValue, setRealtimeInputValue] = useState<string>(
    initialValue ?? ""
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [lazyInputValue]);

  const setValueWithDelay = useCallback((text: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(
      () => setLazyInputValue(text.toLowerCase()),
      delay
    );
  }, []);

  const setInputValue = useCallback((value: string) => {
    setRealtimeInputValue(value);
    setValueWithDelay(value);
  }, []);

  return [lazyInputValue, setInputValue, realtimeInputValue];
};

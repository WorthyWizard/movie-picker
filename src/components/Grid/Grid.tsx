import React, { FC, memo } from "react";

import s from "./Grid.module.css";

interface GridProps {
  elements: JSX.Element[];
}

const Grid: FC<GridProps> = ({ elements }) => {
  return (
    <div className={s.Grid}>
      <div className={s.GridInner}>{elements}</div>
    </div>
  );
};

export default memo(Grid);

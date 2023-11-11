import { ReactNode } from "react";
import { FiCheck, FiPlus } from "react-icons/fi";
import {
  MdClear,
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
  MdPlayArrow,
} from "react-icons/md";
import { Stack } from "@mui/material";

import { IconButton } from "@/components/UI";
import { MovieControlsTypes } from "@/types/common";

interface Props {
  type: MovieControlsTypes;
  isInWatchlist?: boolean;
  onPlay?: () => void;
  onRemove?: () => void;
  onAddToWatchlist?: () => void;
}

export const MovieControls = (props: Props) => {
  const {
    type,
    isInWatchlist = false,
    onRemove,
    onPlay,
    onAddToWatchlist,
  } = props;

  let controls: ReactNode | null = null;

  const watchlist = (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <IconButton color="primary" size="medium" onClick={onPlay}>
        <MdPlayArrow />
      </IconButton>
      <IconButton color="error" size="medium" onClick={onRemove}>
        <MdClear />
      </IconButton>
    </Stack>
  );

  const restricted = (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <IconButton color="primary" size="medium" onClick={onAddToWatchlist}>
        {isInWatchlist ? <FiCheck /> : <FiPlus />}
      </IconButton>
      <IconButton color="primary" size="medium" onClick={onPlay}>
        <MdPlayArrow />
      </IconButton>
    </Stack>
  );

  const full = (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <IconButton color="primary" size="medium" onClick={onAddToWatchlist}>
        {isInWatchlist ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
      </IconButton>
      <IconButton color="primary" size="large" onClick={onPlay}>
        <MdPlayArrow />
      </IconButton>
      <IconButton color="error" size="medium" onClick={onRemove}>
        <MdClear />
      </IconButton>
    </Stack>
  );

  switch (type) {
    case "watchlist":
      controls = watchlist;
      break;
    case "restricted":
      controls = restricted;
      break;
    case "full":
      controls = full;
      break;
    default:
      controls = restricted;
  }

  return controls;
};

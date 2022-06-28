import { FC, ReactNode } from "react";
import { MovieControlsTypes } from "@/types/common";

import { Stack } from "@mui/material";
import {
  MdClear,
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
  MdPlayArrow,
} from "react-icons/md";
import { FiPlus, FiCheck } from "react-icons/fi";
import { IconButton } from "@/components/UI";

interface MovieControlsProps {
  type: MovieControlsTypes;
  isInWatchlist?: boolean;
  onPlay?: () => void;
  onRemove?: () => void;
  onAddToWatchlist?: () => void;
}

const MovieControls: FC<MovieControlsProps> = (props) => {
  const {
    type,
    isInWatchlist = false,
    onRemove,
    onPlay,
    onAddToWatchlist,
  } = props;

  let controls: ReactNode | null = null;

  let watchlist = (
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

  let restricted = (
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

  let full = (
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

export default MovieControls;

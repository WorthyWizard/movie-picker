import { DetailedHTMLProps, IframeHTMLAttributes } from "react";

import { VideoEndpoints } from "@/api/videoEndpoints";
import { VideoTypes } from "@/types/common";

import s from "./styles.module.css";

interface Props {
  videoId: string;
  type: VideoTypes;
  ratio?: number;
  iframeProps?: DetailedHTMLProps<
    IframeHTMLAttributes<HTMLIFrameElement>,
    HTMLIFrameElement
  >;
}

export const Video = (props: Props) => {
  const { type, iframeProps, videoId, ratio } = props;
  const { width } = iframeProps || {};

  let src: string = "";
  const height = Number(width) / (ratio ?? 1);

  switch (type) {
    case "youtube":
      src = VideoEndpoints.youtube(videoId);
      break;
  }

  return (
    <div className={s.Video}>
      <iframe
        className={s.VideoFrame}
        width={width}
        height={height}
        src={src}
        allowFullScreen={true}
        loading="lazy"
      />
    </div>
  );
};

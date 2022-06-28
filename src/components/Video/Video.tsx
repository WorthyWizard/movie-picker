import { DetailedHTMLProps, FC, IframeHTMLAttributes } from "react";
import { VideoTypes } from "@/types/common";

import s from "./Video.module.css";
import { VideoEndpoints } from "@/api/videoEndpoints";

interface VideoProps {
  videoId: string;
  type: VideoTypes;
  ratio?: number;
  iframeProps?: DetailedHTMLProps<
    IframeHTMLAttributes<HTMLIFrameElement>,
    HTMLIFrameElement
  >;
}

const Video: FC<VideoProps> = (props) => {
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
        frameBorder="0"
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Video;

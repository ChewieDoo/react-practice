interface Props {
  videoUrl: string;
  width?: string;
  height?: string;
  frameBorder?: string;
}

const VideoPlayer = ({
  videoUrl,
  width = "560",
  height = "315",
  frameBorder = "0",
}: Props) => {
  return (
    <div>
      <iframe
        width={width}
        height={height}
        src={videoUrl}
        title="Video Player"
        frameBorder={frameBorder}
        allowFullScreen></iframe>
    </div>
  );
};

export default VideoPlayer;

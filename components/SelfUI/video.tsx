interface VideoProps {
  className?: string;
  width: string;
  height: string;
  src: string;
  type: string;
  muted?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
}

export function Video({ width, height, src, type, className, muted, autoPlay, loop }: VideoProps) {
  return (
    <video
      className={className}
      width={width}
      height={height}
      muted={muted}
      autoPlay={autoPlay}
      loop={loop}
      preload="none"
    >
      <source src={src} type={type} />
    </video>
  );
}

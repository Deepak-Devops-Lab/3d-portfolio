import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = ({ image, alt, video, link }: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleMouseEnter = async () => {
    if (!video) return;

    setIsVideo(true);

    try {
      const response = await fetch(`/assets/${video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideoUrl(blobUrl);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="disable"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
      >
        {link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}

        <img
          src={image}
          alt={alt}
          loading="lazy"
          draggable={false}
        />

        {isVideo && (
          <video
            src={videoUrl}
            autoPlay
            muted
            playsInline
            loop
          />
        )}
      </a>
    </div>
  );
};

export default WorkImage;

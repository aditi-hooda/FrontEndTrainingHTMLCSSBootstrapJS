import React from "react";

export default function VideoComponents(props) {
  const TrimVideo = (e, trim) => {
    const id = e.target.id;
    const video = document.getElementById(id);
    if (video.currentTime < trim.startTime) video.currentTime = trim.startTime;
    // video.play();
    setInterval(function () {
      if (video.currentTime > trim.endTime) {
        video.currentTime = trim.endTime;
        video.pause();
      }
    }, 1000);
  };
  return (
    <div className="row" key={props.key} id={props.data.id}>
      <h2
        data-bs-toggle="collapse"
        data-bs-target={`#${props.data.id}Collapsed`}
        aria-controls={`${props.data.id}Collapsed`}
        className="collapsed"
        aria-expanded="false"
      >
        {props.data.title}
      </h2>
      <div
        id={`${props.data.id}Collapsed`}
        aria-expanded="false"
        className="collapse"
      >
        {props.data.trim ? (
          <video
            id={`${props.data.id}Video`}
            controls
            onCanPlay={(e) => TrimVideo(e, props.data.trim)}
          >
            <source src={props.data.href} type="video/mp4" />
            {props.data.subtitles && (
              <track
                label="English"
                kind="subtitles"
                srcLang="en"
                src={props.data.subtitles}
                default
              />
            )}
          </video>
        ) : (
          <video controls src={props.data.href} type="video/mp4"></video>
        )}
      </div>
    </div>
  );
}

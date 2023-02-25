import React from "react";
import ReadingComponents from "../../../Components/ReadingComponent";
import VideoComponents from "../../../Components/VideoComponent";
import "./Home.scss";

export default function Home(props) {
  
  return (
    <div className="container material">
      {props.data &&
        props.data.map((d, i) => {
          if (d.type === "video") {
            return(
                <VideoComponents key={i} data ={d}/>
            )
          } else if (d.type === "reading") {
            return(
                <ReadingComponents key={i} data={d}/>
            )
          }
        })}
    </div>
  );
}

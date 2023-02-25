import React from "react";

export default function ReadingComponents(props) {
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
        {props.data.reading &&
          props.data.reading.map((r, j) => {
            switch (r.tag) {
              case "p":
                return <p key={j}>{r.data}</p>;
              case "a":
                return (
                  <a href={r.data} target="_blank" key={j}>
                    {r.text ?? r.data}
                  </a>
                );
              case "img":
                return <img src={r.data} key={j} />;
            }
          })}
      </div>
    </div>
  );
}

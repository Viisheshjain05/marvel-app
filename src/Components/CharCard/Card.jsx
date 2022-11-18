import React from "react";

const Card = (props) => {
  let { id, thumbnail, name } = props.char;
  let imgPath = thumbnail.path + `/portrait_incredible.` + thumbnail.extension;

  return (
    <div className="container">
      <div className="card" key={id}>
        <img src={imgPath} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;

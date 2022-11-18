import React from "react";

const Card = ({ data, text }) => {
  return (
    <div className="container">
      {data?.length > 0 &&
        data.map((item) => {
          return (
            <div className="card" key={item.id}>
              <img
                src={
                  item.thumbnail.path +
                  `/portrait_incredible.` +
                  item.thumbnail.extension
                }
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Card;

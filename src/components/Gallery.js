import React from "react";
import Lightbox from "bs5-lightbox";

function Gallery({ items, type }) {
  const onClick = e => {
    e.preventDefault();
    const el = e.currentTarget;
    const lightbox = new Lightbox(el);
    lightbox.show();
  };
  return (
    <div className='row photos gallery'>
      {items.map(item => {
        const { id, link, thumb, desc } = item;
        const typeName = type;
        return (
          <div key={id} className='col-sm-6 col-md-4 col-lg-3 item'>
            <a
              data-toggle='lightbox'
              data-gallery={typeName ? typeName : ""}
              onClick={onClick}
              href={link}
              data-caption={desc}>
              <img
                alt='alt-text'
                className='img-fluid'
                style={{
                  pointerEvents: "none",
                }}
                src={thumb}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;

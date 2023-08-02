import React from "react";
import Lightbox from "bs5-lightbox";

function Gallery({ items, type }) {
  const options = {
    keyboard: true,
    size: "fullscreen",
  };
  const onClick = e => {
    e.preventDefault();
    const el = e.currentTarget;
    const lightbox = new Lightbox(el, options);
    lightbox.show();
  };
  return (
    <div className='row photos gallery'>
      {items.map(item => {
        const { id, link, thumb, desc, linkType } = item;
        const typeName = type;
        return (
          <div key={id} className='col-sm-6 col-md-4 col-lg-3 item'>
            <a
              target={item.target ? "_blank" : ""}
              data-toggle={!item.target ? "lightbox" : false}
              data-size='fullscreen'
              data-gallery={typeName ? typeName : ""}
              onClick={!item.target ? onClick : () => {}}
              href={link}
              data-caption={desc}
              data-type={linkType}
              rel='noreferrer'>
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

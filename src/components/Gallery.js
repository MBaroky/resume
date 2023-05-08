import React from 'react';
import Lightbox from 'bs5-lightbox'

function Gallery({items, types}) {

  const onClick = e => {
    e.preventDefault();
    const el = e.target;
    const lightbox = new Lightbox(el);
    lightbox.show();
    console.log(el);
  };
    return (
    <div className='row photos gallery'>
        {items.map(item => {
            const {id, type, link, thumb} = item
            const typeName = types.find(({id})=>id === type)
            return (
              <div
                key={id}
                className='col-sm-6 col-md-4 col-lg-3 item'>
                <a
                  data-toggle='lightbox'
                  data-gallery={typeName? typeName.name:""}
                  onClick={onClick}
                  href={link}
                  data-caption=''>
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
            )})}
      </div>
     );
}

export default Gallery;
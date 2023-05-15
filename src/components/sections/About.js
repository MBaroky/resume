import React, { Fragment, useEffect, SVGProps  } from "react";
import {useInView} from 'react-cool-inview'
import Icon from '../Icon'
import { ReactComponent as ArmyIcon } from "../../icons/army.svg";
import { ReactComponent as WeddingRing } from "../../icons/married.svg";
import { ReactComponent as Cake } from "../../icons/cake.svg";
import { ReactComponent as LocationPin } from "../../icons/location.svg";

function About({content}) {
  const icons =  {
    "social-state": WeddingRing,
    "martial-state":ArmyIcon,
    "birthday":Cake,
    "address":LocationPin
  }


  const { observe, inView } = useInView({
    // Stop observe when the target enters the viewport, so the "inView" only triggered once
    unobserveOnEnter: true,
    // Shrink the root margin, so the animation will be triggered once the target reach a fixed amount of visible
    rootMargin: "-100px 0px",
  });

  // repeated props in sub elements
  const sharedAosProps = (direction, delay) => ({
    "data-aos": `fade-${direction}`,
    "data-aos-delay": delay,
    className: `aos-init ${
      inView ? "aos-animate" : ""
    }`,
  });
  return (
    <section id='about' className='p-lg-4'>
      {content
            ?
      (<div className='card bg-transparent p-4 border-0'>
        <div className='card-header bg-dark py-3 px-0'>
          <h6 className='fw-bold m-0'>
            <strong>ABOUT</strong>
          </h6>
        </div>
        <div className='card-body px-0' ref={observe}>
          <ul>
            {content.bullets.map((bullet, index) =>
            <li key={index} {...sharedAosProps('up', index * 200 )}>
              {bullet}
              <br />
            </li>)}
          </ul>
        </div>
        <div className='card-header bg-dark py-3 px-0'></div>
        <div className='card-body px-0'>
          <div className='row row-cols-4 dl-horizontal'>
            {content.icons.map((icon, index)=>(
              <Fragment key={index}>
                <div className='col-2 text-end overflow-hidden'>
                  <div {...sharedAosProps('left', index * 200 )}>

                    <Icon component={icons[icon.class]} />
                  </div>

                </div>
                <div className='col-4 overflow-hidden'>
                  <p  {...sharedAosProps('right',  index * 200 )}>{icon.label}</p>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>)
      :'Loading'}
    </section>
  );
}

export default About;

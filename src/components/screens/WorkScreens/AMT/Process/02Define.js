import React from 'react';

import BuiltIn from '../../../../core-ui/BuiltIn/BuiltIn';

import UserFlow01 from '../../../../../assets/works/AMT/UserFlow_01.png';
import UserFlow02 from '../../../../../assets/works/AMT/UserFlow_02.png';
import SiteMap from '../../../../../assets/works/AMT/SiteMap.jpg';
import Sketch01 from '../../../../../assets/works/AMT/Sketch_01.jpg';
import Sketch02 from '../../../../../assets/works/AMT/Sketch_02.jpg';

import WireFrame01 from '../../../../../assets/works/AMT/login_screen.jpg';
import WireFrame02 from '../../../../../assets/works/AMT/catalog.jpg';
import WireFrame03 from '../../../../../assets/works/AMT/category.jpg';
import WireFrame04 from '../../../../../assets/works/AMT/product.jpg';
import WireFrame05 from '../../../../../assets/works/AMT/confirmation.jpg';
import WireFrame06 from '../../../../../assets/works/AMT/cart.jpg';
import WireFrame07 from '../../../../../assets/works/AMT/checkout.jpg';
import WireFrame08 from '../../../../../assets/works/AMT/order_summary.jpg';



const Define = () => {
  return (
    <>
      <div className="story_04 mb-4 md:mb-24">
        <BuiltIn
          subHeaderContent="User Flows"
          subHeaderClass="mb-4" />
        <div className="story_04-1">
          <h6>User story 1: As a user, I want to pick an item and add it to my cart.</h6>
          <picture>
            <source
              media="(max-width: 767px)"
              srcset={UserFlow01}
            />
            <img className="mb-12" src={UserFlow01} alt="user flow 1" />
          </picture>
        </div>

        <div className="story_04-2">
          <h6>User story 2: As a user, I want to checkout and place a request.</h6>
          <picture>
            <source
              media="(max-width: 767px)"
              srcset={UserFlow02}
            />
            <img src={UserFlow02} alt="user flow 2" />
          </picture>
        </div>
      </div>

      <div className="story_05 mb-4 md:mb-24">
        <BuiltIn
          subHeaderContent="Site Map"
          subHeaderClass="mb-4" />
        <picture>
          <source
            media="(max-width: 767px)"
            srcset={SiteMap}
          />
          <img className="mb-12" src={SiteMap} alt="asset managment tool sitemap" />
        </picture>
      </div>

      <div className="story_05 mb-4 md:mb-24">
        <div className="flex flex-col md:flex-row">
          <div className="sketch_content mr-3">
            <BuiltIn
              subHeaderContent="Sketches"
              subHeaderClass="mb-4" />
            <picture>
              <source
                media="(max-width: 767px)"
                srcset={Sketch01}
              />
              <img className="mb-12" src={Sketch01} alt="sketch" />
            </picture>
          </div>

          <div className="storyboard_content">
            <BuiltIn
              subHeaderContent="Storyboarding"
              subHeaderClass="mb-4" />
            <picture>
              <source
                media="(max-width: 767px)"
                srcset={Sketch02}
              />
              <img className="mb-12" src={Sketch02} alt="storyboarding" />
            </picture>
          </div>
        </div>
      </div>

      <div className="story_06">
        <BuiltIn
          subHeaderContent="Wireframes"
          subHeaderClass="mb-4" />

        <div className="Carousel Carousel_desktop content flex flex-nowrap justify-between Carousel_recent--wrapper  Carousel_desktop_recent--wrapper">
          <div className="mr-2 Carousel_recent Carousel_desktop_recent">
            <img src={WireFrame01} alt="wireframe 1" />
          </div>
          <div className="mx-2 Carousel_recent Carousel_desktop_recent">
            <img src={WireFrame02} alt="wireframe 2" />
          </div>
          <div className="mx-2 Carousel_recent Carousel_desktop_recent">
            <img src={WireFrame03} alt="wireframe 3" />
          </div>
          <div className="ml-2 Carousel_recent Carousel_desktop_recent">
            <img src={WireFrame04} alt="wireframe 4" />
          </div>
          <div className="ml-2 Carousel_recent Carousel_desktop_recent">
            <img src={WireFrame05} alt="wireframe 5" />
          </div>
          <div className="ml-2 Carousel_recent Carousel_desktop_recent">
            <img src={WireFrame06} alt="wireframe 6" />
          </div>
          <div className="ml-2 Carousel_recent Carousel_desktop_recent">
            <img src={WireFrame07} alt="wireframe 7" />
          </div>
          <div className="ml-2 Carousel_recent Carousel_desktop_recent">
            <img src={WireFrame08} alt="wireframe 8" />
          </div>
        </div>
      </div>


    </>
  )
}

export default Define

import React from 'react';
import "./FeaturedStory.scss";

import FixedButtonLink from '../../core-ui/Button/FixedButtonLink';



const FeaturedStory = ({ alt, bgImage, mobileBgImage, headline, headlineMobile, paragraphContent, caseStudyLink }) => {
    return (
        <div className="FeaturedStory relative">
            <div className="background">
                <picture>
                    <source media="(max-width: 767px)" srcSet={mobileBgImage} />
                    <img className="sds_full" src={bgImage} alt={alt} />
                </picture>

            </div>
            <div className="content-overlay">
                <h2 className="FeaturedStory_header">{headline}</h2>
                <h2 className="FeaturedStory_headerMobile">{headlineMobile}</h2>
                <p className="FeaturedStory_paragraph">{paragraphContent}</p>
                <FixedButtonLink addClass="" variant="red" textContent="CASE STUDY" linkTo={caseStudyLink} />
            </div>
        </div >
    )
};

export default FeaturedStory;
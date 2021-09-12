import React from 'react';

import BuiltIn from '../../../../core-ui/BuiltIn/BuiltIn';

import UserPersona from '../../../../../assets/091021/case_study_localeyez/persona/personas.png';

const Discover = () => {
  return (
    <>
      <div className="story_01 mb-4 md:mb-24">
        <BuiltIn
          subHeaderContent="Competitive Analysis"
          subHeaderClass="mb-8"
        />
        <ul className="mb-8">
          <li className="mb-4">&bull; <strong>Airbnb Experiences: </strong>This is Airbnb's initiative to build connections between its visiting customers and locals. Users can choose categories, hosts, and locations to find something that interests them. Categories for experiences include animals, cooking, adventures, and more. Choosing a host allows users to select an experience by clicking on an image of a person and a description of the activity, such as "mole cooking class with an Indigenous cook." And users can search for locations to stay in either locally or around the world.</li>
          <li className="mb-4">&bull; <strong>Class Pass: </strong>Classpass is a fitness membership that gives its customers a range of exciting workout choices. Founded in 2013, ClassPass has over 8,000 partners in 39 cities worldwide, allowing its users to work out wherever they live and travel. Its proprietary technology lets users choose from over a million fitness classes in an easy booking process.</li>
          <li className="mb-4">&bull; <strong>Foursquare: </strong>Foursquare is a location technology company that consists of two apps, Foursquare and Swarm. Their B2B offerings include Places (for developers), Pinpoint and Attribution (for marketers), and Place Insights (for analysts, based on the world's largest foot traffic panel).</li>
          <li className="mb-4">&bull; <strong>Meetup: </strong>Meetup is an online service used to create groups that host local in-person events. The company had more than 35 million users as of 2017. Customers can use Meetup for networking purposes, to make new friends, or to find an activity group.</li>
        </ul>

        <div className="story_02 mb-4 md:mb-24">
          <BuiltIn
            subHeaderContent="User Persona"
            subHeaderClass="mb-4" />

          <div className="mb-24">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={UserPersona}
              />
              <img className="w-full" src={UserPersona} alt="User Persona: Julieta Herrera" />
            </picture>
          </div>
        </div>
      </div>
    </>
  )

}

export default Discover;

import React from 'react';

import HeaderContentModule from '../../core-ui/ContentModule/HeaderContentModule';
import LayeredContentModule from '../../core-ui/ContentModule/LayeredContentModule';

import BusUpThumbnail from '../../../assets/works/BusUp/busup_demo.png';
import AMTThumbnail from '../../../assets/works/AMT/wcd_demo.png';
import BlueBlob from '../../../assets/blob-blue.svg';
import GreenBlob from '../../../assets/blob-green.svg';

const WorksScreen = () => {
  return (
    <div className="WorksScreen">
      <HeaderContentModule
        addClass="text-center"
        headerContent="Projects"
        headerTwoContent="" />

      <LayeredContentModule
        blob={GreenBlob}
        imageDirection="ImageOnRight"
        imageMargin="ImageOnRight_margin"
        imageAlt="Asset Management Tool prototype"
        imageBlobAlt="null"
        mobileClass="mb-10"
        desktopClass="mb-8"
        addImage={AMTThumbnail}
        headerContent="Asset Management Tool"
        linkTo="/works/case-study-amt"
        paragraphContent="An effective way for businesses to manage their inventory and provide to employees a quick access to it."
        variant="red" />

      <LayeredContentModule
        blob={BlueBlob}
        imageDirection="ImageOnLeft"
        imageMargin="ImageOnLeft_margin"
        imageAlt="Bus Up prototype"
        imageBlobAlt="null"
        addImage={BusUpThumbnail}
        headerContent="BusUp Mobile App"
        linkTo="/works/case-study-busup"
        paragraphContent="A mobile app that provides real-time information for bus locations, bus schedules and directions for the daily bus traveller."
        variant="red"
        mobileClass="mb-10"
        desktopClass="mb-8" />

    </div>
  )
}

export default WorksScreen

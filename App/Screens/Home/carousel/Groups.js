import React, {PureComponent} from 'react';
import {  View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from './index.style';
import SliderEntry from './SliderEntry';
import { sliderWidth, itemWidth } from './SliderEntry.style';

export default class GroupCarousel extends PureComponent {
  
  render() {
    return (
      <View style={styles.exampleContainer}>
      <Carousel
        ref={c => this._slider1Ref = c}
        data={this.props.groups}
        renderItem={this._renderItemWithParallax}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        hasParallaxImages={true}
        firstItem={1}
        inactiveSlideScale={0.94}
        inactiveSlideOpacity={0.7}
        activeSlideAlignment={'start'}
        containerCustomStyle={styles.slider}
        contentContainerCustomStyle={styles.sliderContentContainer}
        loop={true}
        loopClonesPerSide={2}
        autoplay={true}
        autoplayDelay={500}
        autoplayInterval={3000}
        onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
      />
      
  </View>
    );
  }
   _renderItemWithParallax ({item, index}) {
    return (
        <SliderEntry
          data={item}
          index={index}
        />
    );
}
  
}


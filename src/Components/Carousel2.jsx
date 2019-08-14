/*import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image10 from '../../dist/images/slide10.jpg';
import Image11 from '../../dist/images/slide11.jpg';
import Image12 from '../../dist/images/slide12.jpg';
import Image13 from '../../dist/images/slide13.jpg';
import Image14 from '../../dist/images/slide14.jpg';
import Image15 from '../../dist/images/slide15.jpg';
import Image16 from '../../dist/images/slide16.jpg';
import Image17 from '../../dist/images/slide17.jpg';
import Image18 from '../../dist/images/slide18.jpg';


const items = [
  {
    src: Image10
  },
  {
    src: Image11
  },
  {
    src: Image12
  },
  {
    src: Image13
  },
  {
    src: Image14
  },
  {
    src: Image15
  },
  {
    src: Image16
  },
  {
    src: Image17
  },
  {
    src: Image18
  }
];

class Example2 extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} />

        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default Example2;*/
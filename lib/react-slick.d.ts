declare module "react-slick" {
    import { ComponentType, CSSProperties } from "react";
  
    export interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      autoplaySpeed?: number;
      arrows?: boolean;
      initialSlide?: number;
      responsive?: Array<{
        breakpoint: number;
        settings: Partial<Settings>;
      }>;
      [key: string]: any;
    }
  
    export interface SliderProps extends Settings {
      className?: string;
      style?: CSSProperties;
    }
  
    const Slider: ComponentType<SliderProps>;
  
    export default Slider;
  }
  
export interface Game {
  id: number;
  name: string;
  type: string;
  image: string;
  provider?: string;
  demoUrl?: string;
}

export interface GameSliderProps {
  title: string;
  icon?: React.ReactNode;
  array: Game[];
  type: string;
  sliderQuantity: number;
}

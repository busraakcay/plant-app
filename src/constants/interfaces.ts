export interface Question {
  id: number;
  title: string;
  image_uri: string;
}

export interface Category {
  id: number;
  name: string;
  title: string;
  image: {
    width: number;
    height: number;
    size: number;
    url: string;
  };
}

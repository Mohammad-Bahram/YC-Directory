/* eslint-disable @typescript-eslint/no-explicit-any */
export interface StartupCardType {
  _createdAt: string | any;
  views: number;
  author: { _id: number; name: string };
  _id: number;
  description: string;
  image: { src: string }|any;
  category: string;
  title: string;
}
/* eslint-enable @typescript-eslint/no-explicit-any */
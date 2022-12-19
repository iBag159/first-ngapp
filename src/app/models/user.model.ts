export interface User {
  name: string,
  age: number,
  gender: string,
  email: string,
  isSingle: boolean,
  avatar: string,
  picture: {
    large: string,
    medium: string,
    thumbnail: string
  }
}
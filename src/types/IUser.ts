export interface IUser {
  id: number;
  email: string;
  username: string;
  address: IAddress;
}

export interface IAddress {
  street: string;
  city: string;
  zipcode: string;
}

// types

type User = {
  readonly id: number;
  name: string;
  isAdmin: boolean;
};

type Address = {
  street: string;
  houseNr: number;
  town?: string;
};

type UserWithAddress = User &
  Address & {
    postCode: number;
  };

const user2: UserWithAddress = {
  id: 2,
  name: 'Jane',
  isAdmin: false,
  street: 'Main st.',
  houseNr: 12,
  town: 'New York',
  postCode: 10001,
};

// interface

interface UserInterface {
  readonly id: number;
  name: string;
  isAdmin: boolean;
}

interface AddressInterface {
  street: string;
  houseNr: number;
  town: string;
  county?: string;
}

interface UserWithAddressInterface extends UserInterface, AddressInterface {}

// reopening interface
interface UserWithAddressInterface {
  postCode: number;
}

const us1: UserInterface = {
  id: 5,
  name: 'Jill',
  isAdmin: false,
};

const us2: UserWithAddressInterface = {
  id: 6,
  name: 'Jack',
  isAdmin: true,
  street: 'Main st.',
  houseNr: 12,
  town: 'New York',
  county: 'NY',
  postCode: 10001,
};

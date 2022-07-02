import { ILocation } from 'app/entities/location/location.model';

export interface ICustomer {
  id?: number;
  name?: string | null;
  location?: ILocation | null;
}

export class Customer implements ICustomer {
  constructor(public id?: number, public name?: string | null, public location?: ILocation | null) {}
}

export function getCustomerIdentifier(customer: ICustomer): number | undefined {
  return customer.id;
}

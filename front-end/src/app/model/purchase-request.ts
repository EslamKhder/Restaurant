import {Client} from './client';
import {Address} from './address';
import {RequestOrder} from './request-order';
import {Item} from './item';

export class PurchaseRequest {
  client: Client;
  fromAddress: Address;
  toAddress: Address;
  requestOrder: RequestOrder;
  items: Item[];
}

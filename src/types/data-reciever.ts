export interface DataReciever<SchemaType> {
  name: string;
  type: string;
  content: Array<SchemaType>;
  recieve(content: object): boolean;
}
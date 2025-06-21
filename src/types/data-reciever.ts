export interface DataReciever<SchemaType> {
	type: string;
	content: Array<SchemaType>;
	recieve(content: string): boolean;
}

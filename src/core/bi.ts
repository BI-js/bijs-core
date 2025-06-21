import type { DataReciever } from "@/types/data-reciever";

export class BI<SchemaType extends object> {
	private content: Array<SchemaType>;

	constructor(private reciever: DataReciever<SchemaType>) {
		this.content = [...reciever.content];
	}

	filter<TargetColumn extends keyof SchemaType>(
		by: TargetColumn,
		when: (target: SchemaType[TargetColumn]) => boolean,
	): void {}

	sort(by: keyof SchemaType): void {}

	order(by: keyof SchemaType): void {}

	serialize(): string {
    // O método Serialize vai processar o Reciever, com base nas operações de filter, sort e order.
		return JSON.stringify({});
	}
}

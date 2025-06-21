import type { DataReciever } from "@/types/data-reciever";

export class BI<SchemaType extends object> {
  constructor(private reciever: DataReciever<SchemaType>) {}

  filter(by: keyof SchemaType, ) {}

  sort() {}

  serialize(): string {
    return JSON.stringify({});
  }
}
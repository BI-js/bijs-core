import type { DataReciever } from "@/types/data-reciever";

export class JSONDataReciever<SchemaType>
	implements DataReciever<SchemaType>
{
	public type = "json";
	public content: Array<SchemaType> = [];

	recieve(content: string): boolean {
		try {
			const preContent = JSON.parse(content) as Array<SchemaType>;

			this.content = preContent;

			return true;
		} catch (_) {
			return false;
		}
	}
}

type Aluno = {
	turma: string;
	nome: string;
	nota1: number;
	nota2: number;
};

const data: Array<Aluno> = [
	{ turma: "A", nome: "Alan", nota1: 6, nota2: 8 },
	{ turma: "A", nome: "Beatriz", nota1: 7.5, nota2: 9 },
	{ turma: "A", nome: "Carlos", nota1: 5.5, nota2: 6 },
	{ turma: "A", nome: "Diana", nota1: 10, nota2: 10 },
	{ turma: "B", nome: "Eduardo", nota1: 4, nota2: 5.5 },
	{ turma: "B", nome: "Fernanda", nota1: 8, nota2: 8.5 },
	{ turma: "B", nome: "Gabriel", nota1: 6.5, nota2: 7 },
	{ turma: "C", nome: "Helena", nota1: 9.5, nota2: 9 },
	{ turma: "C", nome: "Igor", nota1: 3, nota2: 4 },
	{ turma: "C", nome: "Juliana", nota1: 7, nota2: 6.5 },
];

const serializedData = JSON.stringify(data);

const json = new JSONDataReciever<typeof data[0]>();

json.recieve(serializedData);

console.log(json.content[0])

import cluster from "node:cluster";
import { randomUUID } from "node:crypto";
import { createReadStream } from "node:fs";
import { cpus } from "node:os";

if (!cluster.isPrimary && process.send) {
	process.send(`Hello From ${process.env.workerPID}`);

	process.exit(0);
}

const numberOfCPUs = cpus();
let availableCPUs = numberOfCPUs;

const mainStream = await createReadStream("./content.json", {
	encoding: "utf-8",
}).toArray();

// let remainingBuffers = mainStream.length;

if (cluster.isPrimary) {
	console.log(`${process.pid} is running`);

	// while (remainingBuffers > 0) {
	// }
	const worker = cluster.fork({ workerPID: randomUUID() });

	worker.on("message", (msg) => {
		console.log("Mensagem do worker:", msg);
	});
}

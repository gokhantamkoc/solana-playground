import { Connection } from "@solana/web3.js";

import { config } from "dotenv";

config();

export const connection = new Connection(process.env.CLUSTER_API_URL!, "confirmed");

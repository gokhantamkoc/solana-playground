import { Connection, Keypair } from "@solana/web3.js";
import { mnemonicToSeedSync } from "bip39";

import { config } from "dotenv";

config();

const connection = new Connection(process.env.CLUSTER_API_URL!, "confirmed");

const getWalletFromMnemonic = (mnemonic: string): Keypair => {
	const seed = mnemonicToSeedSync(mnemonic, "");
	return Keypair.fromSeed(seed.slice(0, 32));
}

export const getWallet = (): Keypair | undefined => {
	if (process.env.WALLET_IMPORT_METHOD === "PHRASE") {
		console.log("restoring wallet from mnemoic phrase");
		const mnemonic = `${process.env.MNEMONIC_PHRASE_1} ${process.env.MNEMONIC_PHRASE_2} ${process.env.MNEMONIC_PHRASE_3} ${process.env.MNEMONIC_PHRASE_4} ${process.env.MNEMONIC_PHRASE_5} ${process.env.MNEMONIC_PHRASE_6} ${process.env.MNEMONIC_PHRASE_7} ${process.env.MNEMONIC_PHRASE_8} ${process.env.MNEMONIC_PHRASE_9} ${process.env.MNEMONIC_PHRASE_10} ${process.env.MNEMONIC_PHRASE_11} ${process.env.MNEMONIC_PHRASE_12}`;
		return getWalletFromMnemonic(mnemonic);
	}
	return undefined;
}
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { connection } from "./connectingToEnvironment";

import { getWallet } from "./restoreWallet";

const doAirdrop = async () => {
	const walletPublicKey = getWallet()!.publicKey;
	try {
		const airdropSignature = await connection.requestAirdrop(
			walletPublicKey,
			LAMPORTS_PER_SOL
		);
		console.log("airdrop requested");
		const latestBlockHash = await connection.getLatestBlockhash();
		await connection.confirmTransaction(
			{
				blockhash: latestBlockHash.blockhash,
				lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
				signature: airdropSignature,
			}
		);
		console.log(`20 SOL is airdropped to ${walletPublicKey.toBase58()}`);
	} catch (err) {
		console.error(`airdrop request failed for ${walletPublicKey.toBase58()}`);
		console.error(err);
	}
}

doAirdrop();

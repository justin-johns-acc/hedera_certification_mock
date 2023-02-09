import { ContractFunctionParameters,  } from '@hashgraph/sdk';
import { hethers } from '@hashgraph/hethers';

import contractCompiled from '../artifacts/contracts/LookupContract.sol/LookupContract.json' assert { type: "json" };

import { deployContract, exeContractFunction, exeContractQuery } from '../utils/contractUtils.js';

async function main() {

	// helper function to decode fucntion execution output
	const abicoder = new hethers.utils.AbiCoder();

	// deploy contract and get contract id
	// const contractId = await deployContract(
	// 	contractCompiled.bytecode,
	// 	new ContractFunctionParameters().addString("Justin").addUint256(12345)
	// 	);

	const contractId = "0.0.3417850";

	const initialData = await exeContractQuery(
		'getMobileNumber',
		new ContractFunctionParameters().addString("Justin"),
		contractId
		);

	console.log('Initial data:', initialData);

	// execute function one and get results
	const result1Encoded = await exeContractFunction(
		'setMobileNumber',
		new ContractFunctionParameters().addString("Alice").addUint256(56986),
		contractId
		);

	// const result1 = abicoder.decode(['uint16'], result1Encoded);

	console.log('Function 1 Output :', result1Encoded);

	// // execute function two and get results
	// const data = await exeContractQuery(
	// 	'getMobileNumber',
	// 	null,
	// 	contractId
	// 	);

	// console.log('data after setting:', data);

	process.exit();
}

main();

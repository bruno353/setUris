var { ethers, BigNumber } = require('ethers')
const implementationABI = require('./nft.json');


const web3Provider = new ethers.providers.JsonRpcProvider("https://polygon-mainnet.g.alchemy.com/v2/na34V2wPZksuxFnkFxeebWVexYWG_SnR");
const walletEther = new ethers.Wallet("passar sua private key aqui");
const connectedWallet = walletEther.connect(web3Provider);

//passar sempre o address do contrato Proxy com a abi do contrato implementation:
const newcontract = new ethers.Contract("0x2Eb082B375B8BA0AaE5192142a7eCE2B8ec73786", implementationABI, web3Provider);



//abis:
async function main () {

  const contractSigner = await newcontract.connect(connectedWallet);
  const transaction = await contractSigner.setURIs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], ["https://raw.githubusercontent.com/Weird-Band/OficialMetadata/main/Weird%20Band%20Collection%20One/weirdBandMetadata01.json",	"https://raw.githubusercontent.com/Weird-Band/OficialMetadata/main/Weird%20Band%20Collection%20One/weirdBandMetadata02.json",	"https://raw.githubusercontent.com/Weird-Band/OficialMetadata/main/Weird%20Band%20Collection%20One/weirdBandMetadata03.json",	"https://raw.githubusercontent.com/Weird-Band/OficialMetadata/main/Weird%20Band%20Collection%20One/weirdBandMetadata04.json",	"https://raw.githubusercontent.com/Weird-Band/OficialMetadata/main/Weird%20Band%20Collection%20One/weirdBandMetadata05.json",	"https://raw.githubusercontent.com/Weird-Band/OficialMetadata/main/Weird%20Band%20Collection%20One/weirdBandMetadata06.json",	"https://raw.githubusercontent.com/Weird-Band/OficialMetadata/main/Weird%20Band%20Collection%20One/weirdBandMetadata07.json",	"https://raw.githubusercontent.com/Weird-Band/OficialMetadata/main/Weird%20Band%20Collection%20One/weirdBandMetadata08.json",	"https://raw.githubusercontent.com/Weird-Band/OficialMetadata/main/Weird%20Band%20Collection%20One/weirdBandMetadata09.json",	"https://raw.githubusercontent.com/Weird-Band/OficialMetadata/main/Weird%20Band%20Collection%20One/weirdBandMetadata10.json",	"https://raw.githubusercontent.com/Weird-Band/OficialMetadata/main/Weird%20Band%20Collection%20One/weirdBandMetadata11.json",	"https://raw.githubusercontent.com/Weird-Band/OficialMetadata/main/Weird%20Band%20Collection%20One/weirdBandMetadata12.json",	"https://raw.githubusercontent.com/Weird-Band/OficialMetadata/main/Weird%20Band%20Collection%20One/weirdBandMetadata13.json",	"https://raw.githubusercontent.com/Weird-Band/OficialMetadata/main/Weird%20Band%20Collection%20One/weirdBandMetadata14.json",	"https://raw.githubusercontent.com/Weird-Band/OficialMetadata/main/Weird%20Band%20Collection%20One/weirdBandMetadata15.json",	"https://raw.githubusercontent.com/Weird-Band/OficialMetadata/main/Weird%20Band%20Collection%20One/weirdBandMetadata16.json",	"https://raw.githubusercontent.com/Weird-Band/OficialMetadata/main/Weird%20Band%20Collection%20One/weirdBandMetadata17.json",	"https://raw.githubusercontent.com/Weird-Band/OficialMetadata/main/Weird%20Band%20Collection%20One/weirdBandMetadata18.json",	"https://raw.githubusercontent.com/Weird-Band/OficialMetadata/main/Weird%20Band%20Collection%20One/weirdBandMetadata19.json",	"https://raw.githubusercontent.com/Weird-Band/OficialMetadata/main/Weird%20Band%20Collection%20One/weirdBandMetadata20.json",	"https://raw.githubusercontent.com/Weird-Band/OficialMetadata/main/Weird%20Band%20Collection%20One/weirdBandMetadata21.json",	"https://raw.githubusercontent.com/Weird-Band/OficialMetadata/main/Weird%20Band%20Collection%20One/weirdBandMetadata22.json",	"https://raw.githubusercontent.com/Weird-Band/OficialMetadata/main/Weird%20Band%20Collection%20One/weirdBandMetadata23.json",	"https://raw.githubusercontent.com/Weird-Band/OficialMetadata/main/Weird%20Band%20Collection%20One/weirdBandMetadata24.json"]);

  console.log(transaction)

}

main()

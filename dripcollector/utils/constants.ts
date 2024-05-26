import { createThirdwebClient,defineChain, getContract} from 'thirdweb';

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;

export const client = createThirdwebClient({
    clientId: CLIENT_ID as string,
});

export const chain = defineChain({
    id: 56,
    rpc: "https://bsc-dataseed1.binance.org/",
});


const contractAddress = "0x9A8503863FBF956414f6A914B84008D0926795AE";
const BUSD_Address = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
const DripPriceReaderAddress = "0x64A4C814311bd6AcDc589aA907b19920404B9A0D";

const DripPriceReader_ABI =[{"inputs":[],"name":"getAllStats","outputs":[{"internalType":"uint256","name":"bnbPrice","type":"uint256"},{"internalType":"uint256","name":"dripBnbRatio","type":"uint256"},{"internalType":"uint256","name":"dripFountainPrice","type":"uint256"},{"internalType":"uint256","name":"dripPcsPrice","type":"uint256"},{"internalType":"uint256","name":"br34pBnbRatio","type":"uint256"},{"internalType":"uint256","name":"br34pPrice","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBnbPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBr34pBnbRatio","outputs":[{"internalType":"uint256","name":"br34pBnbRatio","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBr34pPrice","outputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDripBnbRatio","outputs":[{"internalType":"uint256","name":"dripBnbRatio","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDripFoundtainPrice","outputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDripPcsPrice","outputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"}] as const;

const BUSD_Contract_ABI_Approve = [
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
]as const;

const contractABI =[
	{
	  "type": "event",
	  "name": "OwnershipTransferred",
	  "inputs": [
		{
		  "type": "address",
		  "name": "previousOwner",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "address",
		  "name": "newOwner",
		  "indexed": true,
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "function",
	  "name": "BNB_Balance",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "BUSD",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "address",
		  "name": "",
		  "internalType": "contract IERC20"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "BUSD_Balance",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "BuyDripUsingContract_BNB",
	  "inputs": [
		{
		  "type": "uint256",
		  "name": "BNB_Amount",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "BuyDripUsingContract_BUSD",
	  "inputs": [
		{
		  "type": "uint256",
		  "name": "Busd_Amount",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "DRIP",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "address",
		  "name": "",
		  "internalType": "contract IERC20"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "DRIP_Balance",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "DepositBNB",
	  "inputs": [],
	  "outputs": [],
	  "stateMutability": "payable"
	},
	{
	  "type": "function",
	  "name": "DepositDripUsingBNB_FromWallet",
	  "inputs": [],
	  "outputs": [],
	  "stateMutability": "payable"
	},
	{
	  "type": "function",
	  "name": "DepositDripWithBUSD_FromWallet",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "amountBought",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "Link",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "string",
		  "name": "",
		  "internalType": "string"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "SellContractDrip",
	  "inputs": [
		{
		  "type": "uint256",
		  "name": "DripToSell",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "SetLink",
	  "inputs": [
		{
		  "type": "string",
		  "name": "TheLink",
		  "internalType": "string"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "Swap_WBNB_To_BNB",
	  "inputs": [
		{
		  "type": "uint248",
		  "name": "WBNB_Amount",
		  "internalType": "uint248"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "TaxVault",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "address",
		  "name": "",
		  "internalType": "address"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "Total_Drip_Burnt",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "TransferDripToTaxVault",
	  "inputs": [
		{
		  "type": "uint256",
		  "name": "Amount",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "WBNB",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "address",
		  "name": "",
		  "internalType": "contract IWETH"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "WBNB_Balance",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "WithdrawBNB",
	  "inputs": [
		{
		  "type": "address",
		  "name": "Receiver",
		  "internalType": "address payable"
		},
		{
		  "type": "uint256",
		  "name": "Amount",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "WithdrawBUSD",
	  "inputs": [
		{
		  "type": "address",
		  "name": "Receiver",
		  "internalType": "address payable"
		},
		{
		  "type": "uint256",
		  "name": "Amount",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "WithdrawDRIP",
	  "inputs": [
		{
		  "type": "address",
		  "name": "Receiver",
		  "internalType": "address payable"
		},
		{
		  "type": "uint256",
		  "name": "Amount",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "WithdrawEverything",
	  "inputs": [
		{
		  "type": "address",
		  "name": "Receiver",
		  "internalType": "address payable"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "fountain",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "address",
		  "name": "",
		  "internalType": "contract IFountain"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "owner",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "address",
		  "name": "",
		  "internalType": "address"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "renounceOwnership",
	  "inputs": [],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "router",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "address",
		  "name": "",
		  "internalType": "contract IPancakeRouter02"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "transferOwnership",
	  "inputs": [
		{
		  "type": "address",
		  "name": "newOwner",
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "weth",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "address",
		  "name": "",
		  "internalType": "contract IWETH"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "receive",
	  "name": "",
	  "inputs": [],
	  "outputs": [],
	  "stateMutability": "payable"
	}
  ] as const;
  export const CONTRACT = getContract({
    client: client,
    chain: chain,
    address: contractAddress,
    abi: contractABI,
  })
  export const BUSD_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: BUSD_Address,
    abi: BUSD_Contract_ABI_Approve,
  })
  export const DripPriceReaderContract = getContract({
    client: client,
    chain: chain,
    address: DripPriceReaderAddress,
    abi: DripPriceReader_ABI,
  })
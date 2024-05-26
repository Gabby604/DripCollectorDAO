import { TransactionButton, useReadContract } from "thirdweb/react";
import { BUSD_CONTRACT, CONTRACT, DripPriceReaderContract } from "../utils/constants";
import { prepareContractCall ,toWei,toEther, sendTransaction, sendAndConfirmTransaction} from "thirdweb";
import "./DripCollectorModule.css";
import {useState } from "react";
const DripCollector: React.FC = () => {

    const { data: GetDRIP_Balance, isLoading: isLoading_GetDRIP_Balance} = useReadContract({
        contract: CONTRACT,
        method:"DRIP_Balance"
    });
    const {  data: GetBUSD_Balance, isLoading: isLoading_GetBUSD_Balance } = useReadContract({
        contract: CONTRACT,
        method:"BUSD_Balance"
    });
    const {  data: GetBNB_Balance, isLoading: isLoading_GetBNB_Balance} = useReadContract({
        contract: CONTRACT,
        method:"BNB_Balance"
    });
    const { data: GetWBNB_Balance, isLoading: isLoading_GetWBNB_Balance} = useReadContract({
        contract: CONTRACT,
        method:"WBNB_Balance"
    });
    const { data: TotalDRIP_Burnt, isLoading: isLoading_TotalDRIP_Burnt} = useReadContract({
        contract: CONTRACT,
        method:"Total_Drip_Burnt"
    });
    const { data: Link, isLoading: isLoading_Link} = useReadContract({
      contract: CONTRACT,
      method:"Link"
    });
    const {  data: DripPrice, isLoading: isLoading_DripPrice} = useReadContract({
      contract: DripPriceReaderContract,
      method:"getDripPcsPrice"
    });
    const {  data: BNBPrice, isLoading: isLoading_BNBPrice} = useReadContract({
      contract: DripPriceReaderContract,
      method:"getBnbPrice"
    });

    const [DepositDripUsingBNB_Pop, SetDepositDripUsingBNB_Pop] = useState(false);
    const [DepositDripUsingBNB_Amount, setDepositDripUsingBNB_Amount] = useState<any>("");
    const CloseDepositDripUsingBNB_Pop = () => {
      SetDepositDripUsingBNB_Pop(false);
    };
    const OpenDepositDripUsingBNB_Pop = () => {
      SetDepositDripUsingBNB_Pop(true);
    };
    const handleDepositDripUsingBNB_Amount = async(event: React.ChangeEvent<HTMLInputElement>) => {
      setDepositDripUsingBNB_Amount(event.target.value);
    };


    const [DepositDripUsingBUSD_Pop, SetDepositDripUsingBUSD_Pop] = useState(false);
    const [DepositDripUsingBUSD_Amount, setDepositDripUsingBUSD_Amount] = useState<any>("");
    const CloseDepositDripUsingBUSD_Pop = () => {
      SetDepositDripUsingBUSD_Pop(false);
    };
    const OpenDepositDripUsingBUSD_Pop = () => {
      SetDepositDripUsingBUSD_Pop(true);
    };
    const handleDepositDripUsingBUSD_Amount = async(event: React.ChangeEvent<HTMLInputElement>) => {
      setDepositDripUsingBUSD_Amount(event.target.value);
    };

    const [BuyDripWithContractBNB_pop, SetBuyDripWithContractBNB_Pop] = useState(false);
    const [BuyDripWithContractBNB_Amount, setBuyDripWithContractBNB_Amount] = useState<any>("");
    const CloseBuyDripWithContractBNB_pop = () => {
      SetBuyDripWithContractBNB_Pop(false);
    };
    const OpenBuyDripWithContractBNB_pop = () => {
      SetBuyDripWithContractBNB_Pop(true);
    };
    const handleBuyDripWithContractBNB_Amountt = async(event: React.ChangeEvent<HTMLInputElement>) => {
      setBuyDripWithContractBNB_Amount(event.target.value);
    };

    const [BuyDripWithContractBUSD_pop, SetBuyDripWithContractBUSD_Pop] = useState(false);
    const [BuyDripWithContractBUSD_Amount, setBuyDripWithContractBUSD_Amount] = useState<any>("");
    const CloseBuyDripWithContractBUSD_pop = () => {
      SetBuyDripWithContractBUSD_Pop(false);
    };
    const OpenBuyDripWithContractBUSD_pop = () => {
      SetBuyDripWithContractBUSD_Pop(true);
    };
    const handleBuyDripWithContractBUSD_Amountt = async(event: React.ChangeEvent<HTMLInputElement>) => {
      setBuyDripWithContractBUSD_Amount(event.target.value);
    };


    const [DepositBNB_Pop, SetDepositBNB_Pop] = useState(false);
    const [DepositBNBAmount, setDepositBNBAmount] = useState<any>("");
    const CloseDepositBNB_Pop = () => {
      SetDepositBNB_Pop(false);
    };
    const OpenDepositBNB_Pop = () => {
      SetDepositBNB_Pop(true);
    };
    const handleDepositBNBAmount = async(event: React.ChangeEvent<HTMLInputElement>) => {
      setDepositBNBAmount(event.target.value);
    };

    const [SellContractDRIP_Pop, SetSellContractDRIP_Pop] = useState(false);
    const [SellContratDrip_Amount, setSellContratDrip_Amount] = useState<any>("");
    const CloseSellContractDRIP_Pop = () => {
      SetSellContractDRIP_Pop(false);
    };
    const OpenSellContractDRIP_Pop = () => {
      SetSellContractDRIP_Pop(true);
    };
    const handleSellContratDrip_Amount = async(event: React.ChangeEvent<HTMLInputElement>) => {
      setSellContratDrip_Amount(event.target.value);
    };

    const [TransferDripToTaxVault_Pop, SetTransferDripToTaxVault_Pop] = useState(false);
    const [TransferDripToTaxVault_Amount, setTransferDripToTaxVault_Amount] = useState<any>("");
    const CloseTransferDripToTaxVault_Pop = () => {
      SetTransferDripToTaxVault_Pop(false);
    };
    const OpenTransferDripToTaxVault_Pop = () => {
      SetTransferDripToTaxVault_Pop(true);
    };
    const handleTransferDripToTaxVault_Amount = async(event: React.ChangeEvent<HTMLInputElement>) => {
      setTransferDripToTaxVault_Amount(event.target.value);
    };


    const [WithdrawBUSD_Pop, SetWithdrawBUSD_Pop] = useState(false);
    const [WithdrawBUSD_Amount, setWithdrawBUSD_Amount] = useState<any>("");
    const CloseWithdrawBUSD_Pop = () => {
      SetWithdrawBUSD_Pop(false);
    };
    const OpenWithdrawBUSD_Pop = () => {
      SetWithdrawBUSD_Pop(true);
    };
    const handleWithdrawBUSD_Amount = async(event: React.ChangeEvent<HTMLInputElement>) => {
      setWithdrawBUSD_Amount(event.target.value);
    };

    const [WithdrawBNB_Pop, SetWithdrawBNB_Pop] = useState(false);
    const [WithdrawBNB_Amount, setWithdrawBNB_Amount] = useState<any>("");
    const CloseWithdrawBNB_Pop = () => {
      SetWithdrawBNB_Pop(false);
    };
    const OpenWithdrawBNB_Pop = () => {
      SetWithdrawBNB_Pop(true);
    };
    const handleWithdrawBNB_Amount = async(event: React.ChangeEvent<HTMLInputElement>) => {
      setWithdrawBNB_Amount(event.target.value);
    };

    const [SwapWBNBTOBNB_Pop, SetSwapWBNBTOBNB_Pop] = useState(false);
    const [SwapWBNBTOBNB_Amount, setSwapWBNBTOBNB_Amount] = useState<any>("");
    const CloseSwapWBNBTOBNB_Pop = () => {
      SetSwapWBNBTOBNB_Pop(false);
    };
    const OpenSwapWBNBTOBNB_Pop = () => {
      SetSwapWBNBTOBNB_Pop(true);
    };
    const handleSwapWBNBTOBNB_Amount= async(event: React.ChangeEvent<HTMLInputElement>) => {
      setSwapWBNBTOBNB_Amount(event.target.value);
    };


    const [WithdrawDRIP_Pop, SetWithdrawDRI_Pop] = useState(false);
    const [WithdrawDRIP_Amount, setWithdrawDRIP_Amountt] = useState<any>("");
    const CloseWithdrawDRIP_Pop = () => {
      SetWithdrawDRI_Pop(false);
    };
    const OpenWithdrawDRIP_Pop = () => {
      SetWithdrawDRI_Pop(true);
    };
    const handleWithdrawDRIP_Amount = async(event: React.ChangeEvent<HTMLInputElement>) => {
      setWithdrawDRIP_Amountt(event.target.value);
    };

    const [WithdrawEverything_Pop, SetWithdrawEverything_Pop] = useState(false);
    const CloseWithdrawEverything_Pop = () => {
      SetWithdrawEverything_Pop(false);
    };
    const OpenWithdrawEverything_Pop = () => {
      SetWithdrawEverything_Pop(true);
    };


    const [Receiver, SetReceiver] = useState<any>("");
    const handleReceiver = async(event: React.ChangeEvent<HTMLInputElement>) => {
      SetReceiver(event.target.value);
    };


    const OpenLink = () => {
      if(!isLoading_Link){
        window.open(Link, "_blank");
      }
    };


    return (
        <div className="Zoom">
          <div style={{ marginTop: "20px"}}>
            <button className={"buttonClassTop"} style={{ margin: '0 2px', height: '40px' }} onClick={OpenBuyDripWithContractBNB_pop}>Buy drip with <br/> contract BNB</button>
            <button className={"buttonClassTop"} style={{ margin: '0 2px', height: '40px' }} onClick={OpenBuyDripWithContractBUSD_pop}>Buy drip with <br/> contract BUSD</button>
            </div>
            <div style={{ marginTop: "10px",left: 0, width: '100%', display: 'flex', justifyContent: 'center' }}>
            <button className={"buttonClassGreen"} style={{ margin: '0 2px', height: '40px' }} onClick={OpenDepositBNB_Pop}>Deposit BNB</button>
            <button className={"buttonClassGreen"} style={{ margin: '0 2px', height: '40px' }} onClick={OpenDepositDripUsingBNB_Pop}>Deposit DRIP using <br/>BNB from wallet</button>
            <button className={"buttonClassGreen"} style={{ margin: '0 2px', height: '40px' }} onClick={OpenDepositDripUsingBUSD_Pop}>Deposit DRIP using <br/>BUSD from wallet</button>
            </div>
            <div style={{ marginTop: "10px",left: 0, width: '100%', display: 'flex', justifyContent: 'center' }}>
            <button className={"buttonClassTop"} style={{ margin: '0 2px', height: '40px' }} onClick={OpenSellContractDRIP_Pop}>Sell Drip</button>
            <button className={"buttonClassTop"} style={{ margin: '0 2px', height: '40px' }} onClick={OpenTransferDripToTaxVault_Pop}>Transfer Contract<br/> DRIP To TaxVault</button>
            </div>
            <div style={{ marginTop: "10px",left: 0, width: '100%', display: 'flex', justifyContent: 'center' }}>
            <button className={"buttonClassGreen"} style={{ margin: '0 2px', height: '40px' }} onClick={OpenLink}>{isLoading_Link ? ( <h3>Loading</h3>):(<h3>Link</h3>)}</button>
            </div>
          <div style={{ position: 'absolute', top: 10, left: 0, width: '100%', display: 'flex', justifyContent: 'center' }}>
            <button className={"buttonClassTop"} style={{ margin: '0 10px', height: '40px' }} onClick={OpenWithdrawBNB_Pop}>
            {GetBNB_Balance !== undefined ? (parseFloat(toEther(GetBNB_Balance)).toFixed(4)) : " Loading "} BNB<br/>
            ${BNBPrice !== undefined && GetBNB_Balance !== undefined ? (parseFloat(toEther(BNBPrice)) * (parseFloat(toEther(GetBNB_Balance)))).toFixed(4) : " Loading "} USD
            </button>
            <button className={"buttonClassTop"} style={{ margin: '0 10px', height: '40px' }} onClick={OpenWithdrawDRIP_Pop}>
              {GetDRIP_Balance !== undefined ?(parseFloat(toEther(GetDRIP_Balance)).toFixed(4)): " Loading "} DRIP<br/>
              ${DripPrice !== undefined && GetDRIP_Balance !== undefined ? (parseFloat(toEther(DripPrice)) * (parseFloat(toEther(GetDRIP_Balance)))).toFixed(4) : " Loading "} USD
            </button>
            <button className={"buttonClassTop"} style={{ margin: '0 10px', height: '40px' }} onClick={OpenWithdrawBUSD_Pop}>
              {GetBUSD_Balance !== undefined ?(parseFloat(toEther(GetBUSD_Balance)).toFixed(4)): " Loading "} BUSD
            </button>
            <button className={"buttonClassTop"} style={{ margin: '0 10px', height: '40px' }} onClick={OpenSwapWBNBTOBNB_Pop}>
              {GetWBNB_Balance !== undefined?(parseFloat(toEther(GetWBNB_Balance)).toFixed(4)): " Loading "}  WBNB <br/>
              ${BNBPrice !== undefined && GetWBNB_Balance !== undefined ? (parseFloat(toEther(BNBPrice)) * (parseFloat(toEther(GetWBNB_Balance)))).toFixed(4) : " Loading "} USD
            </button>
            <button className={"buttonClassTop"} style={{ margin: '0 10px', height: '40px' }}>
              DRIP BURNT <br/> {TotalDRIP_Burnt !== undefined ?(parseFloat(toEther(TotalDRIP_Burnt)).toFixed(4)): " Loading "} 🔥
            </button>
            <button className={"buttonClassTop"} style={{ margin: '0 10px', height: '40px' }} onClick={OpenWithdrawEverything_Pop}>Total Value<br/>
            ${BNBPrice !== undefined && DripPrice  !== undefined && GetDRIP_Balance  !== undefined && GetBUSD_Balance !== undefined  && GetWBNB_Balance !== undefined   && GetBNB_Balance !== undefined ? ((parseFloat(toEther(BNBPrice)) * (parseFloat(toEther(GetBNB_Balance)))) + (parseFloat(toEther(BNBPrice)) * (parseFloat(toEther(GetWBNB_Balance))))  + (parseFloat(toEther(GetBUSD_Balance))  + (parseFloat(toEther(DripPrice)) * (parseFloat(toEther(GetDRIP_Balance)))))).toFixed(4)  : " Loading "} USD
            </button>
          </div>


{BuyDripWithContractBNB_pop && (
    <div className={"popup popupBorder"}>
      <div className={"popupContent"}>
        <h4>Buy DRIP with contract BNB</h4>
        <input
        type="number"
        placeholder="Enter BNB amount"
        value={BuyDripWithContractBNB_Amount}
        onChange={handleBuyDripWithContractBNB_Amountt}
        min="0"
        className={"cssinput"}
       />
        <TransactionButton
        transaction={() => prepareContractCall({
            contract: CONTRACT,
            method: "BuyDripUsingContract_BNB",
            params:[toWei(BuyDripWithContractBNB_Amount)]
        })}
        onError={() => window.alert("Error buying DRIP")}
        onTransactionConfirmed={() => window.alert("DRIP bought successfully")}
        >
        Buy Drip
        </TransactionButton>
      </div>
      <div>
        <button className={"buttonClass"} onClick={CloseBuyDripWithContractBNB_pop}>
          Close
        </button>
      </div>
      <div></div>
    </div>
  )}



{BuyDripWithContractBUSD_pop && (
    <div className={"popup popupBorder"}>
      <div className={"popupContent"}>
        <h4>Buy DRIP with contract BUSD</h4>
        <input
        type="number"
        placeholder="Enter BUSD amount"
        value={BuyDripWithContractBUSD_Amount}
        onChange={handleBuyDripWithContractBUSD_Amountt}
        min="0"
        className={"cssinput"}
       />
        <TransactionButton
        transaction={() => prepareContractCall({
            contract: CONTRACT,
            method: "BuyDripUsingContract_BUSD",
            params:[toWei(BuyDripWithContractBUSD_Amount)]
        })}
        onError={() => window.alert("Error buying DRIP")}
        onTransactionConfirmed={() => window.alert("DRIP bought successfully")}
        >
        Buy Drip
        </TransactionButton>
      </div>
      <div>
        <button className={"buttonClass"} onClick={CloseBuyDripWithContractBUSD_pop}>
          Close
        </button>
      </div>
      <div></div>
    </div>
  )}







{DepositBNB_Pop && (
    <div className={"popup popupBorder"}>
      <div className={"popupContent"}>
        <h4>Deposit BNB from your wallet to the contract</h4>
        <input
        type="number"
        placeholder="Enter BNB amount"
        value={DepositBNBAmount}
        onChange={handleDepositBNBAmount}
        min="0"
        className={"cssinput"}
       />
        <TransactionButton
        transaction={() => prepareContractCall({
            contract: CONTRACT,
            method: "DepositBNB",
            value:toWei(DepositBNBAmount)
        })}
        onError={() => window.alert("Error while depositing")}
        onTransactionConfirmed={() => window.alert("BNB Deposited successfully")}
        >
        Deposit BNB
        </TransactionButton>
      </div>
      <div>
        <button className={"buttonClass"} onClick={CloseDepositBNB_Pop}>
          Close
        </button>
      </div>
      <div></div>
    </div>
  )}



{DepositDripUsingBNB_Pop && (
    <div className={"popup popupBorder"}>
      <div className={"popupContent"}>
        <h4>Deposit DRIP using BNB from your wallet</h4>
        <input
        type="number"
        placeholder="Enter BNB amount"
        value={DepositDripUsingBNB_Amount}
        onChange={handleDepositDripUsingBNB_Amount}
        min="0"
        className={"cssinput"}
       />
        <TransactionButton
        transaction={() => prepareContractCall({
            contract: CONTRACT,
            method: "DepositDripUsingBNB_FromWallet",
            value:toWei(DepositDripUsingBNB_Amount)
        })}
        onError={() => window.alert("Error while depositing")}
        onTransactionConfirmed={() => window.alert("DRIP Deposited successfully")}
        >
        Deposit DRIP
        </TransactionButton>
      </div>
      <div>
        <button className={"buttonClass"} onClick={CloseDepositDripUsingBNB_Pop}>
          Close
        </button>
      </div>
      <div></div>
    </div>
  )}






{DepositDripUsingBUSD_Pop && (
    <div className={"popup popupBorder"}>
      <div className={"popupContent"}>
        <h4>Deposit DRIP using BUSD from your wallet</h4>
        <input
        type="number"
        placeholder="Enter BUSD amount"
        value={DepositDripUsingBUSD_Amount}
        onChange={handleDepositDripUsingBUSD_Amount}
        min="0"
        className={"cssinput"}
       />
        <TransactionButton
        transaction={() => prepareContractCall({
            contract: BUSD_CONTRACT,
            method: "approve",
            params:[CONTRACT.address,toWei(DepositDripUsingBUSD_Amount)]
        })}
        onError={() => window.alert("Error while approving")}
        onTransactionConfirmed={() => window.alert("BUSD approve successfully please click deposit")}
        >
        Approve BUSD
        </TransactionButton>
        <TransactionButton
        transaction={() => prepareContractCall({
            contract: CONTRACT,
            method: "DepositDripWithBUSD_FromWallet",
        })}
        onError={() => window.alert("Error while depositing")}
        onTransactionConfirmed={() => window.alert("DRIP Deposited successfully")}
        >
        Deposit DRIP
        </TransactionButton>
      </div>
      <div>
        <button className={"buttonClass"} onClick={CloseDepositDripUsingBUSD_Pop}>
          Close
        </button>
      </div>
      <div></div>
    </div>
  )}







{SellContractDRIP_Pop && (
    <div className={"popup popupBorder"}>
      <div className={"popupContent"}>
        <h4>Sell contract DRIP to get BNB</h4>
        <input
        type="number"
        placeholder="Enter DRIP amount"
        value={SellContratDrip_Amount}
        onChange={handleSellContratDrip_Amount}
        min="0"
        className={"cssinput"}
       />
        <TransactionButton
        transaction={() => prepareContractCall({
            contract: CONTRACT,
            method: "SellContractDrip",
            params: [toWei(SellContratDrip_Amount)]
        })}
        onError={() => window.alert("Error while selling")}
        onTransactionConfirmed={() => window.alert("Drip Sold successfully")}
        >
        Sell DRIP
        </TransactionButton>
      </div>
      <div>
        <button className={"buttonClass"} onClick={CloseSellContractDRIP_Pop}>
          Close
        </button>
      </div>
      <div></div>
    </div>
  )}


{TransferDripToTaxVault_Pop && (
    <div className={"popup popupBorder"}>
      <div className={"popupContent"}>
        <h4>Transfer DRIP from contract to TaxVault</h4>
        <input
        type="number"
        placeholder="Enter DRIP amount"
        value={TransferDripToTaxVault_Amount}
        onChange={handleTransferDripToTaxVault_Amount}
        min="0"
        className={"cssinput"}
       />
        <TransactionButton
        transaction={() => prepareContractCall({
            contract: CONTRACT,
            method: "TransferDripToTaxVault",
            params: [toWei(TransferDripToTaxVault_Amount)]
        })}
        onError={() => window.alert("Error while sending")}
        onTransactionConfirmed={() => window.alert("Drip transfered successfully")}
        >
        Transfer Drip
        </TransactionButton>
      </div>
      <div>
        <button className={"buttonClass"} onClick={CloseTransferDripToTaxVault_Pop}>
          Close
        </button>
      </div>
      <div></div>
    </div>
  )}




{SwapWBNBTOBNB_Pop && (
    <div className={"popup popupBorder"}>
      <div className={"popupContent"}>
        <h4>Swap Contract WBNB to BNB</h4>
        <input
        type="number"
        placeholder="Enter WBNB amount"
        value={SwapWBNBTOBNB_Amount}
        onChange={handleSwapWBNBTOBNB_Amount}
        min="0"
        className={"cssinput"}
       />
        <TransactionButton
        transaction={() => prepareContractCall({
            contract: CONTRACT,
            method: "Swap_WBNB_To_BNB",
            params: [toWei(SwapWBNBTOBNB_Amount)]
        })}
        onError={() => window.alert("Error while swapping")}
        onTransactionConfirmed={() => window.alert("WBNB swapped to  BNB successfully")}
        >
        Swap WBNB
        </TransactionButton>
      </div>
      <div>
        <button className={"buttonClass"} onClick={CloseSwapWBNBTOBNB_Pop}>
          Close
        </button>
      </div>
      <div></div>
    </div>
  )}













{WithdrawBNB_Pop && (
    <div className={"popup popupBorder"}>
      <div className={"popupContent"}>
        <h4>Withdraw BNB from contract to your wallet</h4>
        <input
        type="number"
        placeholder="Enter BNB amount"
        value={WithdrawBNB_Amount}
        onChange={handleWithdrawBNB_Amount}
        min="0"
        className={"cssinput"}
       />
       <input
        type="text"
        placeholder="Enter Receiver address"
        value={Receiver}
        onChange={handleReceiver}
        min="0"
        className={"cssinput"}
      />
        <TransactionButton
        transaction={() => prepareContractCall({
            contract: CONTRACT,
            method: "WithdrawBNB",
            params:[Receiver,toWei(WithdrawBNB_Amount)]
        })}
        onError={() => window.alert("Error Withdrawing BNB")}
        onTransactionConfirmed={() => window.alert("BNB withdrawed Successfully")}
        >
        Withdraw BNB
        </TransactionButton>
      </div>
      <div>
        <button className={"buttonClass"} onClick={CloseWithdrawBNB_Pop}>
          Close
        </button>
      </div>
      <div></div>
    </div>
  )}



{WithdrawBUSD_Pop && (
    <div className={"popup popupBorder"}>
      <div className={"popupContent"}>
        <h4>Withdraw BUSD from contract to your wallet</h4>
        <input
        type="number"
        placeholder="Enter BUSD amount"
        value={WithdrawBUSD_Amount}
        onChange={handleWithdrawBUSD_Amount}
        min="0"
        className={"cssinput"}
       />
       <input
        type="text"
        placeholder="Enter Receiver address"
        value={Receiver}
        onChange={handleReceiver}
        min="0"
        className={"cssinput"}
      />
        <TransactionButton
        transaction={() => prepareContractCall({
            contract: CONTRACT,
            method: "WithdrawBUSD",
            params:[Receiver,toWei(WithdrawBUSD_Amount)]
        })}
        onError={() => window.alert("Error Withdrawing BUSD")}
        onTransactionConfirmed={() => window.alert("BUSD withdrawed Successfully")}
        >
        Withdraw BUSD
        </TransactionButton>
      </div>
      <div>
        <button className={"buttonClass"} onClick={CloseWithdrawBUSD_Pop}>
          Close
        </button>
      </div>
      <div></div>
    </div>
  )}



{WithdrawDRIP_Pop && (
    <div className={"popup popupBorder"}>
      <div className={"popupContent"}>
        <h4>Withdraw DRIP from contract to your wallet</h4>
        <input
        type="number"
        placeholder="Enter DRIP amount"
        value={WithdrawDRIP_Amount}
        onChange={handleWithdrawDRIP_Amount}
        min="0"
        className={"cssinput"}
       />
       <input
        type="text"
        placeholder="Enter Receiver address"
        value={Receiver}
        onChange={handleReceiver}
        min="0"
        className={"cssinput"}
      />
        <TransactionButton
        transaction={() => prepareContractCall({
            contract: CONTRACT,
            method: "WithdrawDRIP",
            params:[Receiver,toWei(WithdrawDRIP_Amount)]
        })}
        onError={() => window.alert("Error Withdrawing DRIP")}
        onTransactionConfirmed={() => window.alert("DRIP withdrawed Successfully")}
        >
        Withdraw DRIP
        </TransactionButton>
      </div>
      <div>
        <button className={"buttonClass"} onClick={CloseWithdrawDRIP_Pop}>
          Close
        </button>
      </div>
      <div></div>
    </div>
  )}



{WithdrawEverything_Pop && (
    <div className={"popup popupBorder"}>
      <div className={"popupContent"}>
        <h4>Withdraw everything from contract to your wallet</h4>
       <input
        type="text"
        placeholder="Enter Receiver address"
        value={Receiver}
        onChange={handleReceiver}
        min="0"
        className={"cssinput"}
      />
        <TransactionButton
        transaction={() => prepareContractCall({
            contract: CONTRACT,
            method: "WithdrawEverything",
            params:[Receiver]
        })}
        onError={() => window.alert("Error Withdrawing")}
        onTransactionConfirmed={() => window.alert("DRIP withdrawed Successfully")}
        >
        Withdraw
        </TransactionButton>
      </div>
      <div>
        <button className={"buttonClass"} onClick={CloseWithdrawEverything_Pop}>
          Close
        </button>
      </div>
      <div></div>
    </div>
  )}




        </div>
      );

};

export default DripCollector;
'use client';
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { chain, client } from "../utils/constants";
import DripCollector from "./DripCollectorPage";
import {CONTRACT } from "../utils/constants";
import "./DripCollectorModule.css";

const Login: React.FC = () =>{
    const account = useActiveAccount();
    return (
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh"
        }}>
      <video autoPlay loop muted className="videoBackground">
        <source src={"DripVideo.mp4"} type="video/mp4" />
      </video>
          {account ? (
            <div>
            <div className="Zoom" style={{textAlign: "center", marginTop: "50px", color: "white" }}>
            <h2 className={"title"}>DRIP<br/>COLLECTOR</h2>
            </div>
              <div style={{ textAlign: "center" }}>
                <DripCollector />
              </div>
              <div className="Zoom" style={{ textAlign: "center", marginTop: "20px" }}>
                <ConnectButton
                  client={client}
                  chain={chain}
                />
              </div>
              <div className="Zoom" style={{ textAlign: "center"  , marginTop: "10px", color: "white" }}>
                <h5>Contract Address <br/>{CONTRACT.address}</h5>
                <h6><u>Note: Blue buttons are for admin use only</u></h6>
              </div>
            </div>

          ) : (
            <div style={{ textAlign: "center"}}>

            <div className="Zoom" style={{textAlign: "center", color: "white"}}>
            <h2 className={"title"}>DRIP<br/>COLLECTOR</h2>
            </div>
            <div className="Zoom" style={{textAlign: "center" , marginTop: "10px"}}>
            <ConnectButton
                client={client}
                chain={chain}
              />
            </div>
                <div className="Zoom" style={{ textAlign: "center"  , marginTop: "10px", color: "white" }}>
                <h5>Contract Address <br/>{CONTRACT.address}</h5>
                <h6><u>Note: Blue buttons are for admin use only</u></h6>
                </div>
            </div>
          )}
        </div>
      );

}
export default Login;
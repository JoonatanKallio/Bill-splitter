import logo from "../assets/logo.svg";
import TipButton from "./TipButton";

export default function TipCalculator() {
    function reset() {
        console.log("reset");
    }
    return (
        <div className="main">
            <div className="card">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="calculator">
                    <div className="left">
                        <div className="leftContent">
                            <div className="bill">
                                <div className="billText">
                                    Bill
                                </div>
                                <input className="billAmount" placeholder="0" />
                            </div>
                            <div className="selectTip">
                                <div className="text">
                                    Select tip %
                                </div>
                                <div className="tipGrid">
                                    <TipButton tipAmount="5" />
                                    <TipButton tipAmount="10" />
                                    <TipButton tipAmount="15" />
                                    <TipButton tipAmount="25" />
                                    <TipButton tipAmount="50" />
                                    <input placeholder="Custom" className="customTip" />
                                </div>
                            </div>
                            <div className="numOfPpl">
                                <div>Number of People</div>
                                <input placeholder="0" />
                            </div>
                        </div>

                    </div>
                    <div className="right">
                        <div className="rightContent">
                            <div className="tipAmountPerPerson">
                                <div className="text">
                                    <div>Tip Amount</div>
                                    <div>/ person</div>
                                </div>
                                <div className="amount">$0.00</div>
                            </div>
                            <div className="tipAmountPerPerson">
                                <div className="text">
                                    <div>Total</div>
                                    <div>/ person</div>
                                </div>
                                <div className="amount">$0.00</div>
                            </div>
                            <button type="button" className="reset" onClick={reset}>RESET</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import {useEffect, useState} from "react";
import logo from "../assets/logo.svg";

export default function TipCalculator() {
    const [tip, setTip] = useState("");
    const [bill, setBill] = useState("0");
    const [people, setPeople] = useState("");
    const [customTip, setCustomTip] = useState("");
    const [tipAmount, setTipAmount] = useState("0.00");
    const [total, setTotal] = useState("0.00");
    function reset() {
        setTip("");
        setBill("");
        setPeople("");
        setCustomTip("");
        setTipAmount("0");
        setTotal("0");
    }
    useEffect(() => {
        if (bill && customTip && people) {
            console.log(customTip)
            const tipPerPerson = (bill * (customTip / 100)) / people;
            setTipAmount(tipPerPerson);
            const totalPerPerson = tipPerPerson + (bill / people);
            setTotal(totalPerPerson);
        }
    }, [customTip, people, bill])
    function customTipOnChange(value) {
        setCustomTip(value);
        setTip("");
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
                                <input className="billAmount" value={bill} placeholder="0" onChange={(e) => setBill(e.target.value)} />
                            </div>
                            <div className="selectTip">
                                <div className="text">
                                    Select tip %
                                </div>
                                <div className="tipGrid">
                                    <TipButton tipAmount={5} tip={tip} setTip={setTip} setCustomTip={setCustomTip} />
                                    <TipButton tipAmount={10} tip={tip} setTip={setTip} setCustomTip={setCustomTip} />
                                    <TipButton tipAmount={15} tip={tip} setTip={setTip} setCustomTip={setCustomTip} />
                                    <TipButton tipAmount={25} tip={tip} setTip={setTip} setCustomTip={setCustomTip} />
                                    <TipButton tipAmount={50} tip={tip} setTip={setTip} setCustomTip={setCustomTip} />
                                    <input min="0" placeholder="Custom" value={customTip} className="customTip" onChange={(e) => customTipOnChange(e.target.value)} />
                                </div>
                            </div>
                            <PeopleInput people={people} setPeople={setPeople} bill={bill} tip={tip} setTipAmount={setTipAmount} setTotal={setTotal} />
                        </div>

                    </div>
                    <div className="right">
                        <div className="rightContent">
                            <div className="tipAmountPerPerson">
                                <div className="text">
                                    <div>Tip Amount</div>
                                    <div className="person">/ person</div>
                                </div>
                                <div className="amount">
                                    $
                                    {Math.round(tipAmount * 100) / 100}
                                </div>
                            </div>
                            <div className="tipAmountPerPerson">
                                <div className="text">
                                    <div>Total</div>
                                    <div className="person">/ person</div>
                                </div>
                                <div className="amount">
                                    $
                                    {Math.round(total * 100) / 100}
                                </div>
                            </div>
                            <button type="button" className="reset" onClick={reset}>RESET</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function TipButton({
    tipAmount, tip, setTip, setCustomTip,
}) {
    function tipClicked() {
        setTip(tipAmount);
        setCustomTip("");
    }
    if (tip === tipAmount) {
        return (
            <button type="button" className="tipButton checked" onClick={tipClicked}>
                {tipAmount}
                %
            </button>
        );
    }
    return (
        <button type="button" className="tipButton" onClick={tipClicked}>
            {tipAmount}
            %
        </button>
    );
}

function PeopleInput({
    people, setPeople, bill, tip, setTipAmount, setTotal,
}) {
    if (people === "0") {
        return (
            <div className="numOfPeople">
                <div className="peopleText">
                    <div>Number of People</div>
                    <div className="peopleErrorText">Can&apos;t be zero</div>
                </div>
                <input value={people} placeholder="0" className="peopleError" onChange={(e) => setPeople(e.target.value)} />
            </div>
        );
    }
    if (bill && tip && people) {
        const tipPerPerson = (bill * (tip / 100)) / people;
        setTipAmount(tipPerPerson);
        const totalPerPerson = tipPerPerson + (bill / people);
        setTotal(totalPerPerson);
    }
    return (
        <div className="numOfPeople">
            <div className="peopleText">
                <div>Number of People</div>
                <div className="peopleErrorText" style={{ display: "none" }}>Can&apos;t be zero</div>
            </div>
            <input value={people} placeholder="0" onChange={(e) => setPeople(e.target.value)} />
        </div>
    );
}

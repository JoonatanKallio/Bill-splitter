export default function TipButton({ tipAmount }) {

    function tipClicked() {
        console.log(tipAmount);
    }

    return (
        <button type="button" className="tipButton" onClick={tipClicked}>
            { tipAmount }
            %
        </button>
    );
}

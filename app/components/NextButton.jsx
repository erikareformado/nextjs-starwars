
const NextButton = ({isDisabled, onNextUrl}) => {
    return (
        <div className="fixed right-5 top-[50%]">
            <button  className="rounded-full border-yellow p-3 border text-yellow-300 disabled:opacity-50"
            disabled={isDisabled}
            onClick={onNextUrl}
            >
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" height="24px" width="24px" version="1.1" id="XMLID_287_" viewBox="0 0 24 24" xmlSpace="preserve">
                <g id="next">
                    <g>
                        <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12   "/>
                    </g>
                </g>
            </svg>
            </button>
        </div>
    )
}

export default NextButton
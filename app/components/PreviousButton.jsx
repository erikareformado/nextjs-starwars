
const PreviousButton = ({isDisabled, onPrevious}) => {
    return (
        <div className="fixed left-5 top-[50%]">
            <button  className="rounded-full border-yellow p-3 border text-yellow-300 disabled:opacity-50 "
            disabled={isDisabled}
            onClick={onPrevious}>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" height="24px" width="24px" version="1.1" id="XMLID_54_" viewBox="0 0 24 24" xmlSpace="preserve">
                    <g id="previous">
                        <g>
                            <polygon points="17.2,23.7 5.4,12 17.2,0.3 18.5,1.7 8.4,12 18.5,22.3   "/>
                        </g>
                    </g>
                </svg>
            </button>
        </div>
    )
}

export default PreviousButton
function WinModal({winner, playAction}) {
    return (
        <div className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center ${winner ? 'visible' : 'invisible'}`}>
            <div className="modal text-center px-24 py-12 shadow-2xl rounded-md">
                <p className="text-medium text-gray-300 font-fira-sans tracking-wider">PLAYER WON!</p>
                <p className={`text-2xl font-fira-sans ${winner}-content`}><span className="font-cherry-bomb-one">{winner}</span> Takes the round</p>
                <button className="bg-gray-300 rounded-xl py-2 px-4 font-fira-sans text-sm mt-5" onClick={playAction}>
                    <i className="fa-solid fa-arrow-rotate-right mr-1"></i> Play Again
                </button>
            </div>
        </div>
    )
}

export default WinModal;

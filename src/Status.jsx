function Status({player, resetAction}) {
    return (
        <div className="flex justify-between items-center game-status mb-10">
            <div className="player-preview font-cherry-bomb-one text-4xl">
                <span className="content X-content">X</span>
                <span className="content O-content">O</span>
            </div>
            <div className="player-turn py-2 px-5 rounded-xl text-gray-400">
                <span className="font-cherry-bomb-one mr-2 text-2xl">{player}</span>
                <span className="font-fira-sans text-xl">TURN</span>
            </div>
            <div className="py-3 px-4 bg-gray-300 rounded-xl cursor-pointer" onClick={resetAction}>
                <i className="fa-solid fa-arrow-rotate-right fa-xl"></i>
            </div>
        </div>
    )
}

export default Status;

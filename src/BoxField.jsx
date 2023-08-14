function BoxField({value, onBoxClick}) {
    return (
        <div className={`box-field rounded-xl font-cherry-bomb-one text-6xl flex items-center justify-center cursor-pointer drop-shadow-lg ${value}-content`} onClick={onBoxClick}>
            {value}
        </div>
    )
}

export default BoxField;

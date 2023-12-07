const ImputL = ({ text = false, name, onInput, onEnter }) => {
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onEnter();
        }
    };

    return (
        <>
            {text && (
                <div className="w-28 mt-6 font-bold text-sm">
                    {text}
                </div>
            )}
            <div className="relative">
                <div className="absolute pointer-events-auto ...">
                </div>
                <input
                    type="text"
                    onInput={onInput}
                    onKeyDown={handleKeyDown}
                    placeholder={name}
                    className="border text-center text-black h-10 rounded border-black"
                />
            </div>
        </>
    );
};

export default ImputL;
function Item1({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((item) => (
                    <div>
                        <h3>Item1 - #{item}</h3>
                    </div>
                ))}
        </>
    );
}

export default Item1
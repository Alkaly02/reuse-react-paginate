function Item2({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((item) => (
                    <div>
                        <h3>Item2 - #{item}</h3>
                    </div>
                ))}
        </>
    );
}

export default Item2
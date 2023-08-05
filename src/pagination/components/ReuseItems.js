

function ReuseItems({ currentItems }) {
    return (
        <>
            <p>Je suis ReuseItems</p>
            {currentItems &&
                currentItems.map((item) => (
                    <div>
                        <h3>ReuseItems - #{item}</h3>
                    </div>
                ))}
        </>
    );
}

export default ReuseItems
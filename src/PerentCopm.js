import { useState } from "react";

const Child = ({ id, setChildCount, childCount }) => {
    console.log(childCount)
    const handleChildValue = () => {
        console.log("id-->", id);
        setChildCount((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    };

    return (
        <div>
            <div onClick={handleChildValue} style={{ marginLeft: "1rem", width: "100px", height: "100px", background: "red" }}>
                value: {childCount[id] || 0}
            </div> 
        </div>
    );
};

function ParentComp() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);
    const [childCount, setChildCount] = useState({});

    const handleChange = (e) => {
        setCount(Number(e.target.value));
    };

    const handleValue = () => {
        setValue(count);
    };

    return (
        <>
            <div>
                <input type="number" onChange={handleChange} />
                <button onClick={handleValue}>On Submit</button>
                <div style={{ marginLeft: "1rem", width: "100px", height: "100px", background: "red" }}>
                    {value}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {Array.from({ length: value }, (_, index) => (
                        <Child key={index} id={index + 1} setChildCount={setChildCount} childCount={childCount} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ParentComp;

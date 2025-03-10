import React, { useState, useRef } from "react";

const PesoDollarConversor = () => {
    const pesos = useRef();  // Ref for input field
    const [dollars, setDollars] = useState(null);  // State for result
    const [resultContainer, setResultContainer] = useState(false);  // State to show result

    // Function to convert pesos to dollars
    const convertPesoToDollar = () => {
        const pesoValue = parseFloat(pesos.current.value) || 0;  // Get input value
        const dollarValue = pesoValue * 0.05;  // Convert
        setDollars(dollarValue.toFixed(2));  // Update state with 2 decimal places
        setResultContainer(true);  // Show result container
    };

    return (
        <div style={{ textAlign: 'center', marginBlock: '50px', paddingBlock: '50px' }}>
            <h3>Conversor: MXN Peso - Dollar</h3>
            <input 
                type="number" 
                ref={pesos} 
                placeholder="MXN" 
                style={{ marginRight: '10px', padding: '5px' }} 
            />
            <button onClick={convertPesoToDollar}>Convert</button>

            {resultContainer && (
                <div style={{ 
                    border: '2px solid royalblue', 
                    borderRadius: '5px', 
                    padding: '10px', 
                    fontFamily: 'monospace', 
                    fontSize: '2.0em', 
                    width: '50%', 
                    justifySelf: 'center'
                }}>
                    <h4>{dollars} USD</h4>
                </div>
            )}
        </div>
    );
};

export default PesoDollarConversor;

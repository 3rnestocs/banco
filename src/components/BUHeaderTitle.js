import React from 'react';

export const HeaderTypes = {
    WHITE: 'white',
    SECONDARY: 'secondary',
    PRIMARY: 'primary',
};


const BUHeaderTitle = ({ text, type = HeaderTypes.SECONDARY, marginBottom = '3em', marginTop = '3em' }) => {
    // Style configurations for each type
    const styles = {
        white: {
            color: '#fff',
            fontWeight: 'bolder',
            separator: {
                backgroundColor: 'rgba(255, 255, 255, 0.5)', // White with 0.5 opacity
            },
            showSeparator: true,
        },
        secondary: {
            color: 'var(--secondary-color)',
            fontWeight: 'bold',
            separator: {
                backgroundColor: 'var(--secondary-color)',
            },
            showSeparator: true,
        },
        primary: {
            color: 'var(--primary-color)',
            fontWeight: 'bolder',
            showSeparator: false, // No separator for primary
        },
    };

    // Select style based on the type
    const selectedStyle = styles[type] || styles.secondary;

    return (
        <div style={{ textAlign: 'center', display: 'inline-block', marginBottom, marginTop }}>
            <h2
                style={{
                    color: selectedStyle.color,
                    letterSpacing: '6px',
                    fontWeight: selectedStyle.fontWeight,
                    marginBottom: '8px',
                    position: 'relative',
                    textDecoration: selectedStyle.textDecoration || 'none',
                }}
            >
                {text}
            </h2>
            {selectedStyle.showSeparator && (
                <div
                    style={{
                        backgroundColor: selectedStyle.separator?.backgroundColor,
                        height: '3px',
                        width: '100%',
                    }}
                />
            )}
        </div>
    );
};


export default BUHeaderTitle;

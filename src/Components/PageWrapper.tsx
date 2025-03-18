import React from 'react';

const pageStyles = {
    wrapper: {
        margin: 0,
        padding: 0,
        overflow: 'auto',
        position: 'absolute' as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    container: {
        minHeight: '100%',
        backgroundColor: '#e5e5e9',
        background: 'linear-gradient(to bottom, #e8e8ec, #d8d8dc)',
        padding: '0 1rem',
        boxSizing: 'border-box' as const
    }
};

interface PageWrapperProps {
    children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
    return (
        <div style={pageStyles.wrapper}>
            <div style={pageStyles.container}>
                {children}
            </div>
        </div>
    );
}

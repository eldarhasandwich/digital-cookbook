import React from 'react';

const ginghamScale = '6rem'
const ginghamColorA = `rgba(211, 47, 47, 0.05)`
const ginghamColorB = `rgba(211, 47, 47, 0.1)`
// const ginghamColorA = `rgb(241, 196, 15, 0.1)`
// const ginghamColorB = `rgb(241, 196, 15, 0.2)`

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
        height: '',
        width: '100vw',
        minHeight: '100%',
        backgroundColor: `#fff`,
        backgroundImage: `
            linear-gradient(90deg, ${ginghamColorA} 50%, transparent 50%),
            linear-gradient(${ginghamColorA} 50%, transparent 50%),
            linear-gradient(90deg, ${ginghamColorB} 50%, transparent 50%),
            linear-gradient(${ginghamColorB} 50%, transparent 50%)`,
        backgroundSize: `${ginghamScale} ${ginghamScale}`,
        backgroundPosition: `0 0, 0 ${ginghamScale}, ${ginghamScale} -${ginghamScale}, -${ginghamScale} 0px`,
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

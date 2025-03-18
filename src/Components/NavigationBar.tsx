import React, { CSSProperties, useState, useEffect } from 'react';

interface NavLink {
  title: string;
  destination: string;
  isSelected?: boolean;
}

interface NavigationBarProps {
  links: NavLink[];
  logo?: React.ReactNode;
  theme?: 'light' | 'dark';
}

const NavigationBar: React.FC<NavigationBarProps> = ({ 
  links, 
  logo,
  theme = 'light' 
}) => {
  const [isMobile, setIsMobile] = useState(false);

  // Effect to check if screen is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Determine the color scheme based on theme
  const colors = {
    background: theme === 'light' ? '#ffffff' : '#1a1a1a',
    text: theme === 'light' ? '#333333' : '#f5f5f5',
    accent: '#0088cc',
    hover: theme === 'light' ? '#f5f5f5' : '#333333',
    selectedBg: theme === 'light' ? '#e6f7ff' : '#003d66',
  };

  const styles: Record<string, CSSProperties | ((isSelected: boolean) => CSSProperties)> = {
    navbar: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: isMobile ? 'center' : 'space-between',
      padding: '0.75rem 1.5rem',
      backgroundColor: colors.background,
      color: colors.text,
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      borderRadius: "0 0 12px 12px",
    },
    logoSection: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: isMobile ? '1rem' : '0',
    },
    navLinks: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: isMobile ? 'center' : 'flex-start',
      flexWrap: isMobile ? 'wrap' : 'nowrap',
      gap: '1rem',
      margin: 0,
      padding: 0,
      listStyle: 'none',
      width: '100%',
    },
    navItem: {
      position: 'relative',
      textAlign: isMobile ? 'center' : 'left',
      width: 'auto',
    },
    navLink: (isSelected: boolean) => ({
      display: 'block',
      padding: '0.5rem 1rem',
      textDecoration: 'none',
      color: isSelected ? colors.accent : colors.text,
      backgroundColor: isSelected ? colors.selectedBg : 'transparent',
      borderRadius: '4px',
      fontWeight: isSelected ? 600 : 400,
      fontFamily: 'Arial, Helvetica, sans-serif',
      transition: 'all 0.2s ease-in-out',
      cursor: isSelected ? 'default' : 'pointer',
      textAlign: isMobile ? 'center' : 'left',
    }),
    linkHover: {
      backgroundColor: colors.hover,
    },
    activeIndicator: {
      position: 'absolute',
      bottom: '-2px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '20px',
      height: '3px',
      backgroundColor: colors.accent,
      borderRadius: '2px',
    },
  };

  return (
    <nav style={styles.navbar as CSSProperties}>
      {logo && <div style={styles.logoSection as CSSProperties}>{logo}</div>}
      
      <ul style={styles.navLinks as CSSProperties}>
        {links.map((link, index) => (
          <li key={index} style={styles.navItem as CSSProperties}>
            <a
              href={link.isSelected ? '#' : link.destination}
              style={(styles.navLink as (isSelected: boolean) => CSSProperties)(!!link.isSelected)}
              onClick={(e) => {
                if (link.isSelected) {
                  e.preventDefault();
                }
              }}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;

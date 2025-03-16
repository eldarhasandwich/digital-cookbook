import React from 'react';
import styled, { css } from 'styled-components';

export type ButtonColor = 'primary' | 'secondary' | 'alert';
export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  /**
   * Button content
   */
  children: React.ReactNode;
  /**
   * Button color theme
   */
  color?: ButtonColor;
  /**
   * Button size
   */
  size?: ButtonSize;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Full width option
   */
  fullWidth?: boolean;
  /**
   * Additional className
   */
  className?: string;
  /**
   * Button type
   */
  type?: 'button' | 'submit' | 'reset';
}

// Color styles based on theme
const getColorStyles = (color: ButtonColor) => {
  switch (color) {
    case 'primary':
      return css`
        background-color: #3366ff;
        color: white;
        border: 1px solid #3366ff;
        &:hover:not(:disabled) {
          background-color: #254EDB;
          border-color: #254EDB;
        }
      `;
    case 'secondary':
      return css`
        background-color: #f5f5f5;
        color: #333333;
        border: 1px solid #dddddd;
        &:hover:not(:disabled) {
          background-color: #e5e5e5;
          border-color: #cccccc;
        }
      `;
    case 'alert':
      return css`
        background-color: #ff3366;
        color: white;
        border: 1px solid #ff3366;
        &:hover:not(:disabled) {
          background-color: #e62e5c;
          border-color: #e62e5c;
        }
      `;
    default:
      return css`
        background-color: #3366ff;
        color: white;
        border: 1px solid #3366ff;
        &:hover:not(:disabled) {
          background-color: #254EDB;
          border-color: #254EDB;
        }
      `;
  }
};

// Size styles
const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return css`
        font-size: 0.875rem;
        padding: 0.4rem 0.8rem;
        border-radius: 0.25rem;
      `;
    case 'medium':
      return css`
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
        border-radius: 0.3rem;
      `;
    case 'large':
      return css`
        font-size: 1.125rem;
        padding: 0.8rem 1.6rem;
        border-radius: 0.375rem;
      `;
    default:
      return css`
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
        border-radius: 0.3rem;
      `;
  }
};

interface StyledButtonProps {
  $color: ButtonColor;
  $size: ButtonSize;
  $fullWidth: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  user-select: none;
  outline: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  ${(props: StyledButtonProps) => getColorStyles(props.$color)}
  ${(props: StyledButtonProps) => getSizeStyles(props.$size)}
  ${(props: StyledButtonProps) => props.$fullWidth && css`width: 100%;`}
  
  &:focus {
    box-shadow: 0 0 0 3px rgba(51, 102, 255, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  color = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  fullWidth = false,
  className,
  type = 'button',
  ...rest
}) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      $color={color}
      $size={size}
      $fullWidth={fullWidth}
      className={className}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

declare module "@material-tailwind/react" {
    import * as React from "react";

    // Typography component
    export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
        variant?: string;
        color?: string;
        className?: string;
        children?: React.ReactNode;
    }
    export const Typography: React.FC<TypographyProps>;

    // Card components
    export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
        shadow?: boolean;
        className?: string;
        color?: string;
    }
    export const Card: React.FC<CardProps>;

    export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
        className?: string;
    }
    export const CardBody: React.FC<CardBodyProps>;

    // Form components
    export interface RadioProps {
        color?: string;
        label?: React.ReactNode;
        name?: string;
        defaultChecked?: boolean;
    }
    export const Radio: React.FC<RadioProps>;

    export interface InputProps {
        color?: string;
        size?: string;
        variant?: string;
        label?: string;
        name?: string;
        placeholder?: string;
        containerProps?: any;
    }
    export const Input: React.FC<InputProps>;

    export interface TextareaProps {
        color?: string;
        size?: string;
        variant?: string;
        label?: string;
        name?: string;
        containerProps?: any;
    }
    export const Textarea: React.FC<TextareaProps>;

    export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
        color?: string;
        size?: string;
        variant?: string;
        className?: string;
    }
    export const Button: React.FC<ButtonProps>;

    export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
        color?: string;
        variant?: string;
    }
    export const IconButton: React.FC<IconButtonProps>;
}
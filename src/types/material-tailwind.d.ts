declare module "@material-tailwind/react" {
    import * as React from "react";
    export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
        variant?: string;
        color?: string;
        className?: string;
        children?: React.ReactNode;
        placeholder?: string;
        onPointerEnterCapture?: React.PointerEventHandler<HTMLElement>;
        onPointerLeaveCapture?: React.PointerEventHandler<HTMLElement>;
        // Add any other props you use
    }
    export const Typography: React.FC<TypographyProps>;
}
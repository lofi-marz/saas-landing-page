export type ScreenSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export const sizes: {
    [k in ScreenSize]: string;
} = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
};

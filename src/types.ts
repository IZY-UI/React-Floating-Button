import { LucideIcon } from 'lucide-react';
import { CSSProperties, ReactNode } from 'react';

export type FloatingButtonPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export type FloatingButtonColor =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'light';

export type FloatingButtonSize = 'small' | 'medium' | 'large';

export interface FloatingButtonAction {
    /** Unique identifier for the action */
    key: string | number;
    /** Display label for the action */
    label: string;
    /** Icon component from lucide-react */
    icon: LucideIcon;
    /** URL to navigate to when clicked */
    href?: string;
    /** Click handler function */
    onClick?: (action: FloatingButtonAction) => void;
    /** Disable this specific action */
    disabled?: boolean;
    /** Accessibility label */
    ariaLabel?: string;
    /** Show a badge with a number */
    badge?: number;
    /** Custom color for this action */
    color?: FloatingButtonColor;
}

export interface IzyFloatProps {
    /** Position of the floating button */
    position?: FloatingButtonPosition;
    /** Base color theme */
    color?: FloatingButtonColor;
    /** Custom color (hex, rgb, hsl) - overrides color prop */
    customColor?: string;
    /** Size of the button */
    size?: FloatingButtonSize;
    /** Array of action buttons */
    actions: FloatingButtonAction[];
    /** Show tooltips on hover */
    showTooltips?: boolean;
    /** Main button click handler */
    onClick?: (isOpen: boolean) => void;
    /** Callback when menu opens */
    onOpen?: () => void;
    /** Callback when menu closes */
    onClose?: () => void;
    /** Custom icon for the main button */
    mainIcon?: LucideIcon;
    /** Accessibility label for main button */
    ariaLabel?: string;
    /** Custom styles for the container */
    style?: CSSProperties;
    /** Custom class name */
    className?: string;
    /** Animation duration in seconds */
    animationDuration?: number;
    /** Disable the entire component */
    disabled?: boolean;
    /** Custom content for main button */
    children?: ReactNode;
}

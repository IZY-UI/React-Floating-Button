import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { IzyFloatProps, FloatingButtonAction } from './types';
import styles from './IzyFloat.module.css';

/**
 * IzyFloat - Modern Floating Action Button Component
 * 
 * A fully customizable, accessible floating action button with smooth animations
 * and TypeScript support.
 * 
 * @example
 * ```tsx
 * import { IzyFloat } from 'react-floating-button';
 * import { Home, Phone, Info } from 'lucide-react';
 * 
 * function App() {
 *   const actions = [
 *     { key: 1, label: 'Home', icon: Home, href: '/home' },
 *     { key: 2, label: 'Contact', icon: Phone, href: '/contact' },
 *     { key: 3, label: 'Info', icon: Info, href: '/info' }
 *   ];
 *   
 *   return <IzyFloat actions={actions} position="bottom-right" color="primary" />;
 * }
 * ```
 */
export const IzyFloat: React.FC<IzyFloatProps> = ({
    position = 'bottom-right',
    color = 'dark',
    customColor,
    size = 'medium',
    actions,
    showTooltips = true,
    onClick,
    onOpen,
    onClose,
    mainIcon: MainIcon = Plus,
    ariaLabel = 'Floating action menu',
    style,
    className,
    animationDuration = 0.3,
    disabled = false,
    children,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleToggle = useCallback(() => {
        if (disabled) return;

        const newState = !isOpen;
        setIsOpen(newState);
        onClick?.(newState);

        if (newState) {
            onOpen?.();
        } else {
            onClose?.();
        }
    }, [isOpen, disabled, onClick, onOpen, onClose]);

    const handleActionClick = useCallback(
        (action: FloatingButtonAction, event: React.MouseEvent) => {
            if (action.disabled) {
                event.preventDefault();
                return;
            }

            action.onClick?.(action);

            // Close menu after action click
            setIsOpen(false);
            onClose?.();
        },
        [onClose]
    );

    // Close menu on Escape key
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                setIsOpen(false);
                onClose?.();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isOpen &&
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
                onClose?.();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, onClose]);

    const containerClasses = [
        styles['ifb-container'],
        styles[position],
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const mainButtonClasses = [
        styles['ifb-main-button'],
        styles[size],
        customColor ? '' : styles[color],
    ]
        .filter(Boolean)
        .join(' ');

    const mainButtonStyle = customColor
        ? { ...style, backgroundColor: customColor }
        : style;

    // Animation variants
    const mainButtonVariants = {
        closed: { rotate: 0 },
        open: { rotate: 45 },
    };

    const actionVariants = {
        hidden: {
            opacity: 0,
            transition: {
                duration: animationDuration * 0.5,
            }
        },
        visible: (index: number) => ({
            opacity: 1,
            transition: {
                delay: index * 0.05,
                duration: animationDuration,
            },
        }),
    };

    const renderActionButton = (action: FloatingButtonAction, index: number) => {
        const ActionIcon = action.icon;
        const actionClasses = [
            styles['ifb-action-button'],
            styles[size],
            action.color && !customColor ? styles[action.color] : styles[color],
        ]
            .filter(Boolean)
            .join(' ');

        const actionStyle = customColor
            ? { backgroundColor: customColor }
            : action.color
                ? undefined
                : { backgroundColor: `var(--ifb-${color})` };

        const buttonContent = (
            <>
                <ActionIcon />
                {action.badge !== undefined && action.badge > 0 && (
                    <span className={styles['ifb-badge']}>
                        {action.badge > 99 ? '99+' : action.badge}
                    </span>
                )}
            </>
        );

        const button = action.href ? (
            <motion.a
                href={action.href}
                className={actionClasses}
                style={actionStyle}
                onClick={(e) => handleActionClick(action, e as any)}
                aria-label={action.ariaLabel || action.label}
                aria-disabled={action.disabled}
                custom={index}
                variants={actionVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                {buttonContent}
            </motion.a>
        ) : (
            <motion.button
                type="button"
                className={actionClasses}
                style={actionStyle}
                onClick={(e) => handleActionClick(action, e)}
                disabled={action.disabled}
                aria-label={action.ariaLabel || action.label}
                custom={index}
                variants={actionVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                {buttonContent}
            </motion.button>
        );

        return (
            <div key={action.key} className={styles['ifb-action-wrapper']}>
                {button}
                {showTooltips && (
                    <motion.div
                        className={styles['ifb-tooltip']}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                    >
                        {action.label}
                    </motion.div>
                )}
            </div>
        );
    };

    return (
        <div
            ref={containerRef}
            className={containerClasses}
            style={style}
            role="group"
            aria-label={ariaLabel}
        >
            {/* Main Button */}
            <motion.button
                type="button"
                className={mainButtonClasses}
                style={mainButtonStyle}
                onClick={handleToggle}
                disabled={disabled}
                aria-label={ariaLabel}
                aria-expanded={isOpen}
                aria-haspopup="true"
                variants={mainButtonVariants}
                animate={isOpen ? 'open' : 'closed'}
                transition={{ duration: animationDuration }}
                whileHover={!disabled ? { scale: 1.05 } : undefined}
                whileTap={!disabled ? { scale: 0.95 } : undefined}
            >
                {children || <MainIcon />}
            </motion.button>

            {/* Action Buttons */}
            <AnimatePresence>
                {isOpen && (
                    <div className={styles['ifb-actions']}>
                        {actions.map((action, index) => renderActionButton(action, index))}
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

IzyFloat.displayName = 'IzyFloat';

export default IzyFloat;

# 🎯 IZY Floating Button - Quick Reference

## Installation

```bash
npm install react-floating-button framer-motion lucide-react
```

## Basic Usage

```tsx
import { IzyFloat } from 'react-floating-button';
import { Home, Phone, Mail } from 'lucide-react';

const actions = [
  { key: 1, label: 'Home', icon: Home, href: '/' },
  { key: 2, label: 'Contact', icon: Phone, href: '/contact' },
  { key: 3, label: 'Email', icon: Mail, href: 'mailto:hi@example.com' }
];

<IzyFloat actions={actions} />
```

## Props Quick Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `actions` | `FloatingButtonAction[]` | **required** | Array of action buttons |
| `position` | `'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | `'bottom-right'` | Button placement |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light'` | `'dark'` | Color theme |
| `customColor` | `string` | - | Custom color (hex/rgb/hsl) |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `showTooltips` | `boolean` | `true` | Show tooltips |
| `onClick` | `(isOpen: boolean) => void` | - | Main button click |
| `onOpen` | `() => void` | - | Menu open callback |
| `onClose` | `() => void` | - | Menu close callback |
| `disabled` | `boolean` | `false` | Disable component |

## Action Object

```tsx
{
  key: string | number;      // Unique ID
  label: string;             // Display label
  icon: LucideIcon;          // Icon component
  href?: string;             // Navigation URL
  onClick?: (action) => void; // Click handler
  disabled?: boolean;        // Disable action
  badge?: number;            // Notification count
  color?: FloatingButtonColor; // Custom color
  ariaLabel?: string;        // Accessibility label
}
```

## Common Patterns

### With Navigation
```tsx
const actions = [
  { key: 1, label: 'Home', icon: Home, href: '/' },
  { key: 2, label: 'About', icon: Info, href: '/about' }
];
```

### With Click Handlers
```tsx
const actions = [
  { 
    key: 1, 
    label: 'Share', 
    icon: Share2,
    onClick: () => navigator.share({ title: 'Check this out!' })
  }
];
```

### With Badges
```tsx
const actions = [
  { key: 1, label: 'Messages', icon: MessageCircle, badge: 5 },
  { key: 2, label: 'Notifications', icon: Bell, badge: 12 }
];
```

### Custom Colors
```tsx
<IzyFloat actions={actions} customColor="#FF6B6B" />
```

### Different Sizes
```tsx
<IzyFloat actions={actions} size="large" />
```

### Different Positions
```tsx
<IzyFloat actions={actions} position="top-left" />
```

## Color Themes

- `primary` - Blue (#007BFF)
- `secondary` - Gray (#6C757D)
- `success` - Green (#28A745)
- `danger` - Red (#DC3545)
- `warning` - Orange (#FFA100)
- `info` - Cyan (#17A2B8)
- `dark` - Black (#000000)
- `light` - White (#F0F1F2)

## Popular Icons

```tsx
import {
  Home, User, Settings, Bell, Mail,
  Phone, MessageCircle, Heart, Share2,
  Search, Plus, X, Check, Info,
  Calendar, Clock, Download, Upload
} from 'lucide-react';
```

Browse all icons: https://lucide.dev/icons/

## Keyboard Shortcuts

- **Tab** - Focus the button
- **Enter** - Open/close menu
- **Escape** - Close menu
- **Click Outside** - Close menu

## TypeScript

```tsx
import type { 
  IzyFloatProps, 
  FloatingButtonAction,
  FloatingButtonPosition,
  FloatingButtonColor,
  FloatingButtonSize 
} from 'react-floating-button';
```

## Scripts

```bash
npm run dev          # Start demo server
npm run build:lib    # Build library
npm run lint         # Lint code
npm run format       # Format code
npm run typecheck    # Check types
```

## Links

- 📚 [Full Documentation](https://github.com/IZY-UI/React-Floating-Button#readme)
- 🐛 [Report Issues](https://github.com/IZY-UI/React-Floating-Button/issues)
- 📦 [NPM Package](https://www.npmjs.com/package/react-floating-button)

# 🎯 IZY Floating Button

Modern, accessible floating action button component for React with TypeScript support.

![npm version](https://img.shields.io/npm/v/@izy-ui/react-floating-button)
![license](https://img.shields.io/npm/l/@izy-ui/react-floating-button)
![bundle size](https://img.shields.io/bundlephobia/minzip/@izy-ui/react-floating-button)

## ✨ Features

- 🎨 **Customizable Colors** - 8 preset themes + custom colors
- 📍 **Flexible Positioning** - 4 corner positions
- 📏 **Multiple Sizes** - Small, medium, and large
- 🎭 **Smooth Animations** - Powered by Framer Motion
- ♿ **Fully Accessible** - ARIA labels, keyboard navigation (Tab, Enter, Escape)
- 🔔 **Badge Support** - Show notification counts
- 💡 **Tooltips** - Helpful labels on hover
- 📱 **Responsive** - Works on all screen sizes
- ⌨️ **TypeScript** - Full type safety
- 🎯 **Tree-shakeable** - Optimized bundle size
- 🌙 **Dark Mode Ready** - Adapts to your theme

## 📦 Installation

```bash
npm install @izy-ui/react-floating-button framer-motion lucide-react
```

or

```bash
yarn add @izy-ui/react-floating-button framer-motion lucide-react
```

## 🚀 Quick Start

```tsx
import { IzyFloat } from '@izy-ui/react-floating-button';
import { Home, Phone, Mail } from 'lucide-react';

function App() {
  const actions = [
    { key: 1, label: 'Home', icon: Home, href: '/home' },
    { key: 2, label: 'Contact', icon: Phone, href: '/contact' },
    { key: 3, label: 'Email', icon: Mail, href: 'mailto:hello@example.com' }
  ];
  
  return (
    <IzyFloat 
      actions={actions}
      position="bottom-right"
      color="primary"
    />
  );
}
```

## 📖 API Reference

### IzyFloat Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `actions` | `FloatingButtonAction[]` | **required** | Array of action buttons |
| `position` | `'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | `'bottom-right'` | Button placement |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light'` | `'dark'` | Color theme |
| `customColor` | `string` | `undefined` | Custom color (hex, rgb, hsl) |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `showTooltips` | `boolean` | `true` | Show tooltips on hover |
| `onClick` | `(isOpen: boolean) => void` | `undefined` | Main button click handler |
| `onOpen` | `() => void` | `undefined` | Callback when menu opens |
| `onClose` | `() => void` | `undefined` | Callback when menu closes |
| `mainIcon` | `LucideIcon` | `Plus` | Custom icon for main button |
| `ariaLabel` | `string` | `'Floating action menu'` | Accessibility label |
| `style` | `CSSProperties` | `undefined` | Custom styles |
| `className` | `string` | `undefined` | Custom class name |
| `animationDuration` | `number` | `0.3` | Animation duration in seconds |
| `disabled` | `boolean` | `false` | Disable the component |

### FloatingButtonAction

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `key` | `string \| number` | ✅ | Unique identifier |
| `label` | `string` | ✅ | Display label |
| `icon` | `LucideIcon` | ✅ | Icon component from lucide-react |
| `href` | `string` | ❌ | URL to navigate to |
| `onClick` | `(action) => void` | ❌ | Click handler |
| `disabled` | `boolean` | ❌ | Disable this action |
| `ariaLabel` | `string` | ❌ | Accessibility label |
| `badge` | `number` | ❌ | Notification badge count |
| `color` | `FloatingButtonColor` | ❌ | Custom color for this action |

## 💡 Examples

### Basic Usage

```tsx
import { IzyFloat } from '@izy-ui/react-floating-button';
import { Home, Settings, User } from 'lucide-react';

const actions = [
  { key: 1, label: 'Home', icon: Home, href: '/' },
  { key: 2, label: 'Settings', icon: Settings, href: '/settings' },
  { key: 3, label: 'Profile', icon: User, href: '/profile' }
];

<IzyFloat actions={actions} />
```

### With Click Handlers

```tsx
const actions = [
  { 
    key: 1, 
    label: 'Share', 
    icon: Share2, 
    onClick: (action) => {
      console.log('Sharing...', action);
      // Your share logic
    }
  },
  { 
    key: 2, 
    label: 'Like', 
    icon: Heart, 
    onClick: () => console.log('Liked!')
  }
];

<IzyFloat 
  actions={actions}
  onOpen={() => console.log('Menu opened')}
  onClose={() => console.log('Menu closed')}
/>
```

### With Badges

```tsx
const actions = [
  { 
    key: 1, 
    label: 'Messages', 
    icon: MessageCircle, 
    badge: 5,
    href: '/messages'
  },
  { 
    key: 2, 
    label: 'Notifications', 
    icon: Bell, 
    badge: 12,
    href: '/notifications'
  }
];

<IzyFloat actions={actions} color="primary" />
```

### Custom Colors

```tsx
<IzyFloat 
  actions={actions}
  customColor="#FF6B6B"
  position="top-right"
/>
```

### Different Sizes

```tsx
// Small
<IzyFloat actions={actions} size="small" position="top-left" />

// Medium (default)
<IzyFloat actions={actions} size="medium" position="top-right" />

// Large
<IzyFloat actions={actions} size="large" position="bottom-left" />
```

### Disabled State

```tsx
const actions = [
  { key: 1, label: 'Active', icon: Check },
  { key: 2, label: 'Disabled', icon: X, disabled: true }
];

<IzyFloat actions={actions} />
```

### Without Tooltips

```tsx
<IzyFloat 
  actions={actions}
  showTooltips={false}
/>
```

## 🎨 Color Themes

Available preset colors:
- `primary` - Blue (#007BFF)
- `secondary` - Gray (#6C757D)
- `success` - Green (#28A745)
- `danger` - Red (#DC3545)
- `warning` - Orange (#FFA100)
- `info` - Cyan (#17A2B8)
- `dark` - Black (#000000)
- `light` - White (#F0F1F2)

## ♿ Accessibility

The component is fully accessible and includes:

- **ARIA labels** - Proper labeling for screen readers
- **Keyboard navigation** - Tab to focus, Enter to activate, Escape to close
- **Focus management** - Clear focus indicators
- **Reduced motion** - Respects `prefers-reduced-motion` setting

## 🎭 Animations

Powered by Framer Motion for smooth, performant animations:

- Spring physics for natural motion
- Staggered appearance of action buttons
- Smooth rotation of main button
- Configurable animation duration

## 📱 Responsive Design

The component automatically adapts to different screen sizes:

- Optimized spacing for mobile devices
- Touch-friendly button sizes
- Proper positioning on all viewports

## 🔧 TypeScript Support

Full TypeScript support with exported types:

```tsx
import type { 
  IzyFloatProps, 
  FloatingButtonAction,
  FloatingButtonPosition,
  FloatingButtonColor,
  FloatingButtonSize 
} from '@izy-ui/react-floating-button';
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT © [Dhanushka I Dewinuwara](https://www.linkedin.com/in/didewinuwara/)

## 🙏 Credits

- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

## 📞 Support

- 📧 Email: didewinuwara@outlook.com
- 🐛 Issues: [GitHub Issues](https://github.com/IZY-UI/React-Floating-Button/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/IZY-UI/React-Floating-Button/discussions)

---

Made with ❤️ by [Dhanushka Dewinuwara](https://www.linkedin.com/in/didewinuwara/)

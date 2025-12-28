# Migration Guide: v1 → v2

This guide will help you migrate from React Floating Button v1 to v2.

## Breaking Changes

### 1. Icon Library Change

**v1:** Used Boxicons
```jsx
// v1 - Boxicons (string names)
const actions = [
  { key: 1, title: 'Home', icon: 'home', page: '/home' }
];
```

**v2:** Uses Lucide React
```tsx
// v2 - Lucide React (components)
import { Home } from 'lucide-react';

const actions = [
  { key: 1, label: 'Home', icon: Home, href: '/home' }
];
```

### 2. Prop Name Changes

| v1 Prop | v2 Prop | Notes |
|---------|---------|-------|
| `direction` | `position` | Same values, different name |
| `basecolor` | `color` | Same values, different name |
| `locations` | `actions` | Different structure (see below) |
| - | `customColor` | New: custom hex/rgb colors |
| - | `size` | New: 'small' \| 'medium' \| 'large' |
| - | `showTooltips` | New: boolean |
| - | `onOpen` | New: callback |
| - | `onClose` | New: callback |

### 3. Action Object Structure

**v1:**
```javascript
{
  key: 1,
  title: 'Home',      // ← Changed to 'label'
  page: '/home',      // ← Changed to 'href'
  icon: 'home'        // ← Now a component
}
```

**v2:**
```typescript
{
  key: 1,
  label: 'Home',      // ← Was 'title'
  href: '/home',      // ← Was 'page'
  icon: Home,         // ← Now a Lucide component
  onClick: () => {},  // ← New: optional click handler
  badge: 5,           // ← New: optional badge
  disabled: false,    // ← New: optional disabled state
  ariaLabel: 'Home'   // ← New: optional accessibility label
}
```

## Step-by-Step Migration

### Step 1: Install New Dependencies

```bash
# Remove old dependencies (if installed)
npm uninstall boxicons sass

# Install new dependencies
npm install react-floating-button@2.0.0 framer-motion lucide-react
```

### Step 2: Update Imports

**Before (v1):**
```javascript
import IzyFloat from './components/IzyFloat';
import 'boxicons';
```

**After (v2):**
```typescript
import { IzyFloat } from 'react-floating-button';
import { Home, Phone, Mail } from 'lucide-react';
```

### Step 3: Update Action Definitions

**Before (v1):**
```javascript
const path = [
  { key: 1, title: 'Home', page: '/home', icon: 'home' },
  { key: 2, title: 'Contact', page: '/contact', icon: 'headphone' },
  { key: 3, title: 'Info', page: '/info', icon: 'info-circle' }
];
```

**After (v2):**
```typescript
import { Home, Headphones, Info } from 'lucide-react';

const actions = [
  { key: 1, label: 'Home', href: '/home', icon: Home },
  { key: 2, label: 'Contact', href: '/contact', icon: Headphones },
  { key: 3, label: 'Info', href: '/info', icon: Info }
];
```

### Step 4: Update Component Usage

**Before (v1):**
```jsx
<IzyFloat 
  direction="bottom-left"
  locations={path}
  basecolor="primary"
  onClick={onClick}
/>
```

**After (v2):**
```tsx
<IzyFloat 
  position="bottom-left"
  actions={actions}
  color="primary"
  onClick={(isOpen) => console.log('Menu is', isOpen ? 'open' : 'closed')}
  onOpen={() => console.log('Opened')}
  onClose={() => console.log('Closed')}
/>
```

## Icon Name Mapping

Common Boxicons → Lucide React mappings:

| Boxicons (v1) | Lucide React (v2) |
|---------------|-------------------|
| `home` | `Home` |
| `headphone` | `Headphones` |
| `info-circle` | `Info` |
| `user` | `User` |
| `cog` | `Settings` |
| `envelope` | `Mail` |
| `phone` | `Phone` |
| `message` | `MessageCircle` |
| `heart` | `Heart` |
| `share` | `Share2` |
| `bell` | `Bell` |
| `search` | `Search` |
| `plus` | `Plus` |

Find more icons at: https://lucide.dev/icons/

## New Features You Can Use

### 1. Custom Colors
```tsx
<IzyFloat 
  actions={actions}
  customColor="#FF6B6B"  // Any hex, rgb, or hsl color
/>
```

### 2. Sizes
```tsx
<IzyFloat 
  actions={actions}
  size="large"  // 'small' | 'medium' | 'large'
/>
```

### 3. Badges
```tsx
const actions = [
  { 
    key: 1, 
    label: 'Messages', 
    icon: MessageCircle, 
    badge: 5  // Shows notification count
  }
];
```

### 4. Tooltips
```tsx
<IzyFloat 
  actions={actions}
  showTooltips={true}  // Shows labels on hover
/>
```

### 5. Click Handlers
```tsx
const actions = [
  { 
    key: 1, 
    label: 'Share', 
    icon: Share2,
    onClick: (action) => {
      // Custom logic instead of navigation
      console.log('Sharing...', action);
    }
  }
];
```

### 6. Disabled States
```tsx
const actions = [
  { 
    key: 1, 
    label: 'Disabled', 
    icon: X, 
    disabled: true 
  }
];
```

## TypeScript Support

v2 includes full TypeScript support:

```typescript
import type { 
  IzyFloatProps, 
  FloatingButtonAction 
} from 'react-floating-button';

const actions: FloatingButtonAction[] = [
  { key: 1, label: 'Home', icon: Home, href: '/' }
];

const props: IzyFloatProps = {
  actions,
  position: 'bottom-right',
  color: 'primary'
};
```

## Complete Migration Example

### Before (v1)

```javascript
import React from 'react';
import IzyFloat from './components/IzyFloat';
import 'boxicons';

function App() {
  const path = [
    { key: 1, title: 'Home', page: '/home', icon: 'home' },
    { key: 2, title: 'Contact', page: '/contact', icon: 'headphone' },
    { key: 3, title: 'Info', page: '/info', icon: 'info-circle' }
  ];

  const onClick = (e) => {
    console.log(e);
  };

  return (
    <div className="App">
      <IzyFloat 
        direction="bottom-left"
        locations={path}
        basecolor="primary"
        onClick={onClick}
      />      
    </div>
  );
}

export default App;
```

### After (v2)

```typescript
import React from 'react';
import { IzyFloat } from 'react-floating-button';
import { Home, Headphones, Info } from 'lucide-react';

function App() {
  const actions = [
    { key: 1, label: 'Home', icon: Home, href: '/home' },
    { key: 2, label: 'Contact', icon: Headphones, href: '/contact' },
    { key: 3, label: 'Info', icon: Info, href: '/info' }
  ];

  return (
    <div className="App">
      <IzyFloat 
        position="bottom-left"
        actions={actions}
        color="primary"
        size="medium"
        showTooltips={true}
        onClick={(isOpen) => console.log('Menu is', isOpen ? 'open' : 'closed')}
        onOpen={() => console.log('Menu opened')}
        onClose={() => console.log('Menu closed')}
      />      
    </div>
  );
}

export default App;
```

## Troubleshooting

### Issue: Icons not showing

**Solution:** Make sure you're importing icon components from `lucide-react`:
```tsx
import { Home, Phone } from 'lucide-react';
```

### Issue: TypeScript errors

**Solution:** Install type definitions:
```bash
npm install --save-dev @types/react @types/react-dom
```

### Issue: Styles not applied

**Solution:** Import the CSS file:
```tsx
import 'react-floating-button/dist/style.css';
```

### Issue: Animation not smooth

**Solution:** Make sure `framer-motion` is installed:
```bash
npm install framer-motion
```

## Need Help?

- 📚 [Full Documentation](https://github.com/IZY-UI/React-Floating-Button#readme)
- 🐛 [Report Issues](https://github.com/IZY-UI/React-Floating-Button/issues)
- 💬 [Discussions](https://github.com/IZY-UI/React-Floating-Button/discussions)
- 📧 Email: didewinuwara@outlook.com

---

Welcome to v2! 🎉

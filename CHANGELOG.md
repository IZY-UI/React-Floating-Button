# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-12-28

### 🎉 Major Release - Complete Rewrite

This is a complete rewrite of the package with modern technologies and best practices.

### ✨ Added

#### **New Features**
- Custom colors support (hex, rgb, hsl) via `customColor` prop
- Three size options: small, medium, large
- Badge support for notification counts
- Tooltip system with configurable visibility
- Lifecycle callbacks: `onOpen`, `onClose`
- Individual action `onClick` handlers
- Disabled states for actions and entire component
- Keyboard navigation (Tab, Enter, Escape)
- Click outside to close functionality
- Custom main button icon support
- Accessibility features (ARIA labels, roles, keyboard support)
- Respects `prefers-reduced-motion` for animations

#### **Developer Experience**
- Full TypeScript support with exported types
- Interactive demo application
- Comprehensive documentation
- Migration guide from v1
- Quick reference guide
- ESLint and Prettier configuration
- Source maps for debugging
- Tree-shakeable exports

#### **Build System**
- Vite for fast development and building
- Dual package exports (ESM + CJS)
- Auto-generated TypeScript definitions
- Optimized bundle size

### 🔄 Changed

#### **Breaking Changes**
- **Icon Library**: Replaced Boxicons with Lucide React
  - Icons are now React components instead of string names
  - Example: `icon: 'home'` → `icon: Home`
- **Prop Names**:
  - `direction` → `position`
  - `basecolor` → `color`
  - `locations` → `actions`
- **Action Object Structure**:
  - `title` → `label`
  - `page` → `href`
  - `icon` now accepts component instead of string
- **Styling**: Replaced SCSS with CSS Modules
- **Animations**: Now powered by Framer Motion instead of pure CSS
- **Build Output**: Now outputs ESM and CJS bundles with type definitions

#### **Improvements**
- Reduced bundle size by ~25% (with tree-shaking)
- Faster build times with Vite
- Better animation performance with Framer Motion
- More accessible with WCAG 2.1 compliance
- Better mobile responsiveness

### 🗑️ Removed

- Boxicons dependency
- SASS/SCSS dependency
- Inline script tag for Boxicons
- Old build system

### 📦 Dependencies

#### **Added**
- `framer-motion` ^11.0.0 - Smooth animations
- `lucide-react` ^0.309.0 - Modern icons

#### **Removed**
- `boxicons` - Replaced with lucide-react
- `sass` - Replaced with CSS Modules
- `react-scripts` - Replaced with Vite

#### **Updated**
- `react` - Now peer dependency (>=18.0.0)
- `react-dom` - Now peer dependency (>=18.0.0)

### 🐛 Fixed

- Fixed animation jank on mobile devices
- Fixed z-index issues with tooltips
- Fixed accessibility issues with screen readers
- Fixed keyboard navigation bugs
- Fixed click outside not working in some cases

### 📝 Documentation

- Complete README rewrite with examples
- Added MIGRATION.md for v1 → v2 migration
- Added QUICK_REFERENCE.md for quick lookup
- Added UPGRADE_SUMMARY.md with detailed changes
- Improved inline code documentation
- Added JSDoc comments to all public APIs

### 🎨 Demo

- Beautiful interactive demo page
- Live controls for all props
- Code examples
- Feature showcase
- Responsive design

---

## [1.0.0] - 2022-12-29

### Initial Release

- Basic floating action button component
- 4 position options (corners)
- 8 color themes
- Boxicons integration
- SCSS styling
- Basic animations
- Click handler support

---

## Migration Notes

### From v1 to v2

See [MIGRATION.md](./MIGRATION.md) for detailed migration instructions.

**Quick Summary:**
1. Update imports to use Lucide React icons
2. Change prop names: `direction` → `position`, `basecolor` → `color`, `locations` → `actions`
3. Update action objects: `title` → `label`, `page` → `href`, `icon` string → icon component
4. Install new dependencies: `framer-motion`, `lucide-react`

---

## Links

- [GitHub Repository](https://github.com/IZY-UI/React-Floating-Button)
- [NPM Package](https://www.npmjs.com/package/react-floating-button)
- [Report Issues](https://github.com/IZY-UI/React-Floating-Button/issues)
- [Discussions](https://github.com/IZY-UI/React-Floating-Button/discussions)

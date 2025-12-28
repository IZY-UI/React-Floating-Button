import React, { useState } from 'react';
import { IzyFloat } from '../src';
import type { FloatingButtonAction, FloatingButtonPosition, FloatingButtonColor, FloatingButtonSize } from '../src';
import {
    Home,
    Phone,
    Mail,
    Info,
    Settings,
    User,
    MessageCircle,
    Heart,
    Share2,
    Bell
} from 'lucide-react';
import './demo.css';

function App() {
    const [position, setPosition] = useState<FloatingButtonPosition>('bottom-right');
    const [color, setColor] = useState<FloatingButtonColor>('primary');
    const [size, setSize] = useState<FloatingButtonSize>('medium');
    const [showTooltips, setShowTooltips] = useState(true);
    const [customColor, setCustomColor] = useState('');

    const actions: FloatingButtonAction[] = [
        {
            key: 1,
            label: 'Home',
            icon: Home,
            href: '#home',
            ariaLabel: 'Go to home page'
        },
        {
            key: 2,
            label: 'Contact',
            icon: Phone,
            onClick: (action) => console.log('Clicked:', action.label),
            badge: 3
        },
        {
            key: 3,
            label: 'Messages',
            icon: MessageCircle,
            onClick: (action) => console.log('Clicked:', action.label),
            badge: 12
        },
        {
            key: 4,
            label: 'Email',
            icon: Mail,
            href: 'mailto:example@example.com'
        },
        {
            key: 5,
            label: 'Settings',
            icon: Settings,
            onClick: (action) => console.log('Clicked:', action.label)
        },
    ];

    const handleFloatClick = (isOpen: boolean) => {
        console.log('Float button clicked, isOpen:', isOpen);
    };

    return (
        <div className="demo-container">
            <header className="demo-header">
                <h1>IZY Floating Button</h1>
                <p>Modern, accessible floating action button for React</p>
            </header>

            <main className="demo-content">
                <section className="demo-section">
                    <h2>Features</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <h3>Customizable Colors</h3>
                            <p>8 preset themes + custom colors</p>
                        </div>
                        <div className="feature-card">
                            <h3>Flexible Positioning</h3>
                            <p>4 corner positions</p>
                        </div>
                        <div className="feature-card">
                            <h3>Multiple Sizes</h3>
                            <p>Small, medium, and large</p>
                        </div>
                        <div className="feature-card">
                            <h3>Smooth Animations</h3>
                            <p>Powered by Framer Motion</p>
                        </div>
                        <div className="feature-card">
                            <h3>Fully Accessible</h3>
                            <p>ARIA labels, keyboard navigation</p>
                        </div>
                        <div className="feature-card">
                            <h3>Badge Support</h3>
                            <p>Show notification counts</p>
                        </div>
                        <div className="feature-card">
                            <h3>Tooltips</h3>
                            <p>Helpful labels on hover</p>
                        </div>
                        <div className="feature-card">
                            <h3>Responsive</h3>
                            <p>Works on all screen sizes</p>
                        </div>
                        <div className="feature-card">
                            <h3>TypeScript</h3>
                            <p>Full type safety</p>
                        </div>
                        <div className="feature-card">
                            <h3>Tree-shakeable</h3>
                            <p>Optimized bundle size</p>
                        </div>
                    </div>
                </section>

                <section className="demo-section">
                    <h2>Interactive Demo</h2>
                    <p>Try the floating button in the {position.replace('-', ' ')} corner</p>

                    <div className="controls">
                        <div className="control-group">
                            <label htmlFor="position">Position</label>
                            <select
                                id="position"
                                value={position}
                                onChange={(e) => setPosition(e.target.value as FloatingButtonPosition)}
                            >
                                <option value="top-left">Top Left</option>
                                <option value="top-right">Top Right</option>
                                <option value="bottom-left">Bottom Left</option>
                                <option value="bottom-right">Bottom Right</option>
                            </select>
                        </div>

                        <div className="control-group">
                            <label htmlFor="color">Color Theme</label>
                            <select
                                id="color"
                                value={color}
                                onChange={(e) => setColor(e.target.value as FloatingButtonColor)}
                            >
                                <option value="primary">Primary (Blue)</option>
                                <option value="secondary">Secondary (Gray)</option>
                                <option value="success">Success (Green)</option>
                                <option value="danger">Danger (Red)</option>
                                <option value="warning">Warning (Orange)</option>
                                <option value="info">Info (Cyan)</option>
                                <option value="dark">Dark (Black)</option>
                                <option value="light">Light (White)</option>
                            </select>
                        </div>

                        <div className="control-group">
                            <label htmlFor="size">Size</label>
                            <select
                                id="size"
                                value={size}
                                onChange={(e) => setSize(e.target.value as FloatingButtonSize)}
                            >
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </div>

                        <div className="control-group">
                            <label htmlFor="customColor">Custom Color</label>
                            <input
                                id="customColor"
                                type="color"
                                value={customColor || '#007BFF'}
                                onChange={(e) => setCustomColor(e.target.value)}
                            />
                            <button onClick={() => setCustomColor('')}>Reset</button>
                        </div>

                        <div className="control-group">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={showTooltips}
                                    onChange={(e) => setShowTooltips(e.target.checked)}
                                />
                                Show Tooltips
                            </label>
                        </div>
                    </div>
                </section>

                <section className="demo-section">
                    <h2>Installation</h2>
                    <pre><code>npm i @izy-ui/react-floating-button</code></pre>
                </section>

                <section className="demo-section">
                    <h2>Usage Example</h2>
                    <pre><code>{`import { IzyFloat } from '@izy-ui/react-floating-button';
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
      size="medium"
      showTooltips={true}
    />
  );
}`}</code></pre>
                </section>

                <section className="demo-section">
                    <h2>Links</h2>
                    <div className="links">
                        <a href="https://github.com/IZY-UI/React-Floating-Button" target="_blank" rel="noopener noreferrer">
                            Documentation
                        </a>
                        <a href="https://github.com/IZY-UI/React-Floating-Button" target="_blank" rel="noopener noreferrer">
                            GitHub Repository
                        </a>
                        <a href="https://www.npmjs.com/package/@izy-ui/react-floating-button" target="_blank" rel="noopener noreferrer">
                            NPM Package
                        </a>
                    </div>
                </section>
            </main>

            <footer className="demo-footer">
                <p>Made by <a href="https://www.linkedin.com/in/didewinuwara/" target="_blank" rel="noopener noreferrer">Dhanushka Dewinuwara</a></p>
                <p>Licensed under MIT</p>
            </footer>

            {/* The Floating Button */}
            <IzyFloat
                actions={actions}
                position={position}
                color={color}
                customColor={customColor || undefined}
                size={size}
                showTooltips={showTooltips}
                onClick={handleFloatClick}
                onOpen={() => console.log('Menu opened')}
                onClose={() => console.log('Menu closed')}
            />
        </div>
    );
}

export default App;

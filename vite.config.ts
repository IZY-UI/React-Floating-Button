import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const isLib = mode === 'lib';

    if (isLib) {
        // Library build configuration
        return {
            plugins: [
                react(),
                dts({
                    insertTypesEntry: true,
                    include: ['src'],
                }),
            ],
            build: {
                lib: {
                    entry: resolve(__dirname, 'src/index.ts'),
                    name: 'ReactFloatingButton',
                    formats: ['es', 'cjs'],
                    fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
                },
                rollupOptions: {
                    external: ['react', 'react-dom', 'react/jsx-runtime', 'framer-motion', 'lucide-react'],
                    output: {
                        globals: {
                            react: 'React',
                            'react-dom': 'ReactDOM',
                            'react/jsx-runtime': 'jsxRuntime',
                            'framer-motion': 'FramerMotion',
                            'lucide-react': 'LucideReact',
                        },
                        assetFileNames: (assetInfo) => {
                            if (assetInfo.name === 'style.css') return 'style.css';
                            return assetInfo.name || '';
                        },
                    },
                },
                sourcemap: true,
                emptyOutDir: true,
            },
        };
    }

    // Development/demo build configuration
    return {
        plugins: [react()],
        server: {
            port: 3000,
            open: true,
        },
    };
});

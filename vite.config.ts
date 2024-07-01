import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@hook': path.resolve(__dirname, './src/hooks'),
            '@style': path.resolve(__dirname, './src/styles'),
            '@common': path.resolve(__dirname, './src/commons'),
            '@component': path.resolve(__dirname, './src/components'),
            '@asset': path.resolve(__dirname, './src/assets'),
            '@pages': path.resolve(__dirname, './src/pages')
        }
    }
})

import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/portfolio-3d-frontend/',
    plugins: [react()],
    assetsInclude: ['**/*.glb']
})

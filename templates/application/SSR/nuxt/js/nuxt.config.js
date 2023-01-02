import {defineNuxtConfig} from 'nuxt/config'
import federation from "@originjs/vite-plugin-federation";

export default defineNuxtConfig({
    vite: {
        plugins: [
            federation({
                name: '{{SAFE_NAME}}',
                filename: 'remoteEntry.js',
                exposes: {
                  
                },
                remotes:{
                    /* Example remotes
                    remote: `remote@http://localhost:3001/remote.js`,
                    */
                },
                shared: ['vue']
            })
        ],
        build: {
            target: 'esnext',
            minify: false,
            cssCodeSplit: true,
            rollupOptions: {
                output: {
                    format: 'system',
                    entryFileNames: 'assets/[name].js',
                    minifyInternalExports: false
                }
            }
        }
    }
})
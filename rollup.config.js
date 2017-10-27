import resolve from 'rollup-plugin-node-resolve';
import buble from 'rollup-plugin-buble';

export default {
    input: './index.js',
    output: {
        file: './dist/index.js',
        format: 'cjs'
    },
    plugins: [
        buble(),
        resolve()
    ]
}
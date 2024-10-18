"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// path: /config/env/production/server.ts
exports.default = ({ env }) => ({
    proxy: true,
    url: env('APP_URL'),
    app: {
        keys: env.array('APP_KEYS')
    },
});

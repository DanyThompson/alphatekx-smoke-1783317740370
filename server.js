import { serve } from '@hono/node-server';
import { Hono } from 'hono';

const app = new Hono();
app.get('/', (c) => c.html('<!doctype html><html><head><title>AlphaTekx Smoke</title></head><body style="font-family:Inter,Arial;background:#050a08;color:white;display:grid;place-items:center;min-height:100vh"><main><h1>AlphaTekx deployment works.</h1><p>This site was deployed by the AlphaTekx smoke test.</p></main></body></html>'));

serve({ fetch: app.fetch, port: Number(process.env.PORT || 10000) });

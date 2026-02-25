export default function handler(req, res) { res.status(200).json({ status: 'ok', service: 'edr-evasion-framework', timestamp: new Date().toISOString() }); }

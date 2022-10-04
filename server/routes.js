const agentRoutes = require('./api/agents/agent-routes');
const authRoutes = require('./api/auth/auth-routes');
const regRoutes = require('./api/register/register-routes');
const userRoutes = require('./api/user/user-routes')


function registerRoutes(app) {
    app.use('/api', agentRoutes);
    app.use('/api', authRoutes);
    app.use('/api', regRoutes);
    app.use('/api', userRoutes)
}

module.exports = registerRoutes;
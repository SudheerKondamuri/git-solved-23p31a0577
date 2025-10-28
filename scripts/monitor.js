const ENV = process.env.NODE_ENV || 'production';

const monitorConfig = {
  production: {
    interval: 60000,
    alertThreshold: 80,
    debugMode: false
  },
  development: {
    interval: 5000,
    alertThreshold: 90,
    debugMode: true,
    verboseLogging: true
  },
  experimental: {  // AI features optional
    interval: 30000,
    alertThreshold: 75,
    aiEnabled: true,
    mlModelPath: './models/anomaly-detection.h5'
  }
};

const config = monitorConfig[ENV];

console.log('=================================');
console.log(`DevOps Simulator - Monitor`);
console.log(`Environment: ${ENV}`);
console.log(`Debug: ${config.debugMode ? 'ENABLED' : 'DISABLED'}`);
console.log('=================================');

function checkSystemHealth() {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Checking system health...`);
  
  // Add AI checks if enabled
  if (config.aiEnabled) {
    console.log('🤖 Running AI prediction...');
  }
  
  console.log('System Status: HEALTHY');
}

setInterval(checkSystemHealth, config.interval);
checkSystemHealth();

import { farm, policy, weather, claims, notifications } from '../data/demo';
export const demoService = {
  async getDashboard() { return { farm, policy, weather, claims, notifications, source: 'demo' }; },
  async getTriggerResults() {
    return [
      { parameter: 'Weekly rainfall', observed: '74 mm', threshold: 'Below 40 mm', result: 'Not reached', explanation: 'The example rule checks for rainfall deficit.' },
      { parameter: 'Maximum temperature', observed: '34 °C', threshold: 'Above 40 °C', result: 'Not reached', explanation: 'The example heat threshold was not crossed.' },
      { parameter: 'Soil moisture', observed: '31%', threshold: 'Below 20%', result: 'Not reached', explanation: 'The sample moisture value is above the example threshold.' }
    ];
  },
  async estimatePayout(coverage, rate) { return { amount: Math.round(Number(coverage) * Number(rate) / 100), isDemo: true }; }
};

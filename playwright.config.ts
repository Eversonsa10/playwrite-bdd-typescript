import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'tests/features/*.feature',
  steps: 'tests/steps/*.ts',
  importTestFrom: 'tests/fixtures/fixtures.ts',
});

export default defineConfig({
  testDir,
  reporter: [['html', { open: 'never' }]], // Relatório HTML simples
  use: {
    screenshot: 'on',
    video: 'on-first-retry',
    trace: 'on',
  },
});
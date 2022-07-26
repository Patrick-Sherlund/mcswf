import ViewportPreset = Cypress.ViewportPreset;

export interface CypressTestDevice {
  testDescription: string;
  device: ViewportPreset;
}

export interface CustomCypressTestDevice {
  testDescription: string;
  device: number[];
}

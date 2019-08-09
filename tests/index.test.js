const config = require('../index');

describe('config', () => {
  it('should export a config', () => {
    expect(config).toBeDefined();
  });

  it('should extend airbnb', () => {
    expect(config.extends).toBe('airbnb');
  });
});

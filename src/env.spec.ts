import env from '.';

describe('Environment variables', () => {
  it('can get environment variables', () => {
    expect(env.get('CONSTANT')).toBe('value');
  });
});

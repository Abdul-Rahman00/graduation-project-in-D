import { EGPtoUSDPipe } from './egpto-usd.pipe';

describe('EGPtoUSDPipe', () => {
  it('create an instance', () => {
    const pipe = new EGPtoUSDPipe();
    expect(pipe).toBeTruthy();
  });
});

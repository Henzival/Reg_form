import { GetjsonPipe } from './tranformjsondata.pipe';

describe('GetjsonPipe', () => {
  it('create an instance', () => {
    const pipe = new GetjsonPipe();
    expect(pipe).toBeTruthy();
  });
});

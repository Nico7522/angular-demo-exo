import { ToFarenheitPipe } from './to-temperature';

describe('ToFarenheitPipe', () => {
  it('create an instance', () => {
    const pipe = new ToFarenheitPipe();
    expect(pipe).toBeTruthy();
  });
});

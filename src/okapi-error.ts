export class OkapiError extends Error {
  public readonly name: string = 'Okapi SDK Error';
  public readonly isOkapiError = true;
}

export abstract class ServiceImageRepository {
  abstract uploadImage(): Promise<string>;
}

import { UniqueServiceId } from './unique-id.service';
describe(UniqueServiceId.name, () => {

  let service: UniqueServiceId = null;

  beforeEach(() => {
    service = new UniqueServiceId();
  });

  it(`#${UniqueServiceId.prototype.generateUniqueIdWithPrefix.name} should generate Id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id).toContain('app-');
  });

  it(`#${UniqueServiceId.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate IDs when called multiple times`, () => {
    const firstId = service.generateUniqueIdWithPrefix('app');
    const secondId = service.generateUniqueIdWithPrefix('app');
    expect(firstId).not.toBe(secondId);
  });
});

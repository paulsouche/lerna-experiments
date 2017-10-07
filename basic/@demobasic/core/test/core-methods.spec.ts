import * as chai from 'chai';
import * as CoreModule from '../';

const expect = chai.expect;

describe('Core methods', () => {
  it('Should have a coreMethod1', () => {
    expect(CoreModule.coreMethod1()).to.equal('Hello from core method 1');
  });

  it('Should have a coreMethod2', () => {
    expect(CoreModule.coreMethod2()).to.equal('Hello from core method 2');
  });

  it('Should have a deprecatedCoreMethod', () => {
    expect(CoreModule.deprecatedCoreMethod()).to.equal('Hello from deprecatedCoreMethod');
  });
});

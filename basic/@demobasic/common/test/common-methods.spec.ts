import * as chai from 'chai';
import * as CommonModule from '../';

const expect = chai.expect;

describe('Common methods', () => {
  it('Should have a commonMethod1', () => {
    expect(CommonModule.commonMethod1()).to.equal('Hello from common method 1 with Hello from core method 1');
  });

  it('Should have a coreMethod2', () => {
    expect(CommonModule.commonMethod2()).to.equal('Hello from common method 2 with Hello from core method 2');
  });

  it('Should have a deprecatedCoreMethod', () => {
    expect(CommonModule.deprecatedCommonMethod()).to
      .equal('Hello from deprecatedCommonMethod with Hello from deprecatedCoreMethod');
  });
});

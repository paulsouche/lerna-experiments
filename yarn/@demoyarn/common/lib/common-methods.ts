import { coreMethod1, coreMethod2, deprecatedCoreMethod } from '@demoyarn/core';

function commonMethod1() {
  return `Hello from common method 1 with ${coreMethod1()}`;
}

function commonMethod2() {
  return `Hello from common method 2 with ${coreMethod2()}`;
}

function deprecatedCommonMethod() {
  return `Hello from deprecatedCommonMethod with ${deprecatedCoreMethod()}`;
}

export {
  commonMethod1,
  commonMethod2,
  deprecatedCommonMethod,
};

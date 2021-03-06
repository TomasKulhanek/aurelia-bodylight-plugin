//import {parseHashParamString} from './utils';
import {WatchHashCore} from './watch-hash-core';

/**
 * Custom Attribute
 * if added to an element, cause that param name of param1 or index of param2 send in hash parameters are interpretted
 * to change SRC of parent element - this.elementVM.changesrc(newindex) is called
 */
export class WatchhashCustomAttribute extends WatchHashCore {
  static inject = [Element];
  constructor(element) {
    super();
    this.element = element;
    this.isReadMDCustomElement = false;
    console.log('watchhash check au controller');
    if (element && element.au && element.au.controller) {
      console.log('watchhash check au controller type:', typeof (element.au.controller));
      if (typeof (element.au.controller) === 'object') console.log('watchhash check au controller viewmodel:', element.au.controller.viewModel);

      if (typeof (element.au.controller) === 'object' && element.au.controller.viewModel && typeof (element.au.controller.viewModel) === 'object') {
        this.elementVM = element.au.controller.viewModel;
        //check whether elementVM has changesrc function - to be called in event listener
        this.isReadMDCustomElement = (typeof this.elementVM.changesrc === 'function');
      }
    }
  }

  bind() {
    this.params = this.value;
    super.bind();
  }
  changesrc(...args) {
    console.log('watchhash.changesrc()');
    if (this.isReadMDCustomElement) this.elementVM.changesrc(...args);
  }
}

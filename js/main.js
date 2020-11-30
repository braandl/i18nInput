/**
 * Created by sbrandt on 05.07.17.
 */
import MainController from './MainController';

export default class i18nInputView {
  constructor(langKeys){
    this.langKeys = langKeys;
  }

  i18nInputView(container) {
    return new MainController(container, this.langKeys);
  }
}

window.i18n = function(container) {
  return new MainController(container);
}
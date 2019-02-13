/**
 * Created by sbrandt on 05.07.17.
 */
import MainController from './MainController';

class i18nInputView {

  constructor(langKeys){
    this.langKeys = langKeys;
  }

  i18nInputView(container) {
    return new MainController(container, this.langKeys);
  }
}

function i18n(container) {
  return new MainController(container);
}

window.i18n = i18n;

export default i18nInputView;
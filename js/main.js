/**
 * Created by sbrandt on 05.07.17.
 */
import MainController from './MainController';

function i18nInputView(container) {
    return new MainController(container);
}

window.i18nInputView = i18nInputView;
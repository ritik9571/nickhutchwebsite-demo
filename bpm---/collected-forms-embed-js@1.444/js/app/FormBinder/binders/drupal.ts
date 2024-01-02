// @ts-expect-error no module
import { debug, warn } from 'collected-forms-embed-js/utils/logger';
const DRUPAL_FORM_IDENTIFIER = 'data-drupal-form-fields';
const DRUPAL_SUBMIT_BUTTON_SELECTOR = 'input[type="submit"].webform-button--submit';
export const Drupal = {
  test: formEl => {
    try {
      return formEl.hasAttribute(DRUPAL_FORM_IDENTIFIER);
    } catch (e) {
      return false;
    }
  },
  bind: (formEl, handler) => {
    const submitButtonEl = formEl.querySelector(DRUPAL_SUBMIT_BUTTON_SELECTOR);

    if (!submitButtonEl) {
      warn('Cannot find matching submit button for Drupal form');
      return;
    }

    debug(`Bound to submit button click event for Drupal form:`, {
      formEl
    });
    submitButtonEl.addEventListener('click', () => handler(formEl), false);
  }
};
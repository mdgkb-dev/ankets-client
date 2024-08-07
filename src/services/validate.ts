import { Ref } from 'vue';

import IForm from '@/services/interfaces/IForm';

import PHelp from './PHelp';

export default function validate(form: Ref<IForm>, hideErrorList?: boolean): boolean {
  let validationResult = true;
  form.value.validate((valid: boolean, errorFields: Record<string, unknown>) => {
    if (!valid) {
      if (hideErrorList) {
        PHelp.Notification.Error('Пожалуйста, проверьте правильность введенных данных');
      } else {
        PHelp.Notification.Error(PHelp.Notification.FormMessage(errorFields));
      }
      validationResult = false;
      return validationResult;
    }
    return validationResult;
  });
  return validationResult;
}

import { createModelObject } from '../renderer/page-response-parser';

export const textInputFactory = (widgetJson, model) => {
  const data = createModelObject(widgetJson, model);
  const div = document.createElement('div');
  const input = document.createElement('input');

  if (data.value != null) {
    input.value = data.value;
      input.id = data.id;
  }
  console.log('data',data);
  input.type = 'text';
  input.setAttribute("required","required");

  div.appendChild(input);
  input.addEventListener('input', () => {
    data.value = input.value;
  });

  return div;
};

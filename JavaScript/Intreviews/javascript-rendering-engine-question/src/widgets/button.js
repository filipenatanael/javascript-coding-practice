import * as utils from '../utils/utils';

export const buttonFactory = (widgetJson, model) => {
  const button = document.createElement('button');
  const uri = widgetJson.action;
  button.textContent = widgetJson.label;

  button.addEventListener('click', () => {
    const postData = {};
    let unfilledArray = [];

    for (const item in model) {
      if (model[item].required == true && model[item].value === '') {
        unfilledArray.push(model[item].id);
      }
      postData[item] = model[item].value;
    }

    if (unfilledArray.length > 0) {
      const form = document.createElement('table');
      const tableRow = utils.generateRow('The validation errors:');
      unfilledArray.forEach(function(element) {
      const anchor = document.createElement('a');
      anchor.href = `javascript:document.getElementById('${element}').focus()`;
      anchor.innerText = `| The ${element} field is required. | `;
      const widgetColumn = utils.generateWidgetColumn(anchor);
      tableRow.appendChild(widgetColumn);
      document.getElementById('contentPane').appendChild(tableRow)
    });
    } else {
      utils.submitForm(uri, postData);
    }

  });

  return button;
};

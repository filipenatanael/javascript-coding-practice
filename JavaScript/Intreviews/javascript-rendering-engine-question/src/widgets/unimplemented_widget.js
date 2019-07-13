export const unimplementedWidgetFactory = (widgetJson) => {
  // const widget = document.createElement('p');
  const widget = document.createElement('select');

  //widget.options = widgetJson.items;
  // widget.textContent = `${JSON.stringify(widgetJson)} widget has not been implementedw`;
  // widget.style.color = 'red';
  // widget.style.fontStyle = 'italic';
  const items = widgetJson.items;
  for (let i = 0; i < items.length; i++) {
    let option = document.createElement('option');
    option.value = items[i].value;
    option.text = items[i].value;
    widget.appendChild(option);
  }

  return widget;
};

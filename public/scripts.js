function script() {
  const $pathTarget = document.querySelectorAll('.path');
  const $source = document.querySelector('#json-renderer');

  const defaultOpts = {
    pathNotation: 'dots',
    pathQuotesType: 'single',
    pickerIcon: '#x7f7'
  };

  function transformJson() {
    let jsonData = null;
    try {
      jsonData = document.querySelector('#json-input').value;
      jsonData = JSON.parse(jsonData);
    } catch (error) {
      alert(`Cannot eval JSON: ${error}`);
      return;
    }

    JPPicker.render($source, jsonData, $pathTarget, defaultOpts);
  }

  document.querySelector('#btn-json-path-picker').addEventListener('click', transformJson);
}

script();

// type assertion

const inputField: HTMLInputElement | null = document.querySelector('#input');
const result: HTMLParagraphElement | null = document.querySelector('#result');
console.log('inputField ===', inputField);
console.log('result ===', result);

if (inputField === null)
  throw new Error('Neteisingas įvesties lauko selektorius');
if (result === null)
  throw new Error('Neteisingas rezultatų konteinerio selektorius');

const handleFieldChange: EventListener = (event) => {
  const element = event.target as HTMLInputElement | null;
  if (element === null) return;
  result.textContent = element.value;
};

inputField.addEventListener('keyup', handleFieldChange);

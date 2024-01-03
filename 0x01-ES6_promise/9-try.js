export default function guardrail(mathFunction) {
  const result = [];
  let value;

  try {
    value = mathFunction();
  } catch (err) {
    value = err.toString();
  }

  result.push(value);
  result.push('Guardrail was processed');

  return result;
}

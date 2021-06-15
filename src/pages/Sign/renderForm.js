import {MyInput} from "./styled";

export function renderForm(form, setForm, name, label, placeholder=label, type='text', regex, error){
  if(placeholder.length===0)placeholder=label
  return <MyInput
    key={name}
    variant={'outlined'}
    name={name}
    label={label}
    value={form[name]}
    onChange={setForm}
    type={type}
    placeholder={placeholder}
    pattern={regex}
    error={error}
    required
  />
}
import { useState } from "react";

export default function useForm(initialForm) {
  const [form, setForm] = useState(initialForm);

  const onChange = (e) => {
    if(e && e.target){
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    }
    else if(typeof e==='object'){
      setForm(e)
    }
    else{
      setForm(initialForm)
    }
  };

  return [form, onChange];
}

export default function objectForm(initialForm,array){
  if(Object.keys(initialForm).length!==array.length)return

  let i=0;
  const objeto = {}
  for(let obj in initialForm){
    objeto[obj] = array[i++]
  }
  return objeto
}
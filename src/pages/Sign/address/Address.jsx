import All, {AllContent, Smartphone} from "../../../styleAll/styledAll";
import {Button, DivBack, MyAlert, MyArrowBack, MyForm, Text} from "../styled";
import {StylesProvider} from "@material-ui/core/styles";
import useForm from "../../../hooks/useForm";
import useValidation from "../../../hooks/useValidation";
import {renderForm} from "../renderForm";
import addressEndpoint from "../../../controller/user/addressEndpoint";
import useCoordinator from "../../../hooks/useCoordinator";
import {useState, useEffect} from "react";
import {AlertTitle} from "@material-ui/lab";
import getAddressEndpoint from "../../../controller/user/getAddressEndpoint";
import {MyCircularProgress} from "../../components/MyCircularProgress";

const initialForm = {
  street:'',
  number:'',
  neighbourhood: '',
  city:'',
  state: '',
  complement: ''
}

export default function Address(){
  useValidation()
  const {toFeed, goBack} = useCoordinator()
  const [form, setForm] = useForm(initialForm)
  const [alert, setAlert] = useState(<></>);
  const [back, setBack] = useState(<></>)
  const [loading, setLoading] = useState(<MyCircularProgress/>);
  const [disabled, setDisabled] = useState(true);

  const getAddress = async()=>{
    try{
      const address = await getAddressEndpoint()
      setForm(address)
      setBack(<MyArrowBack onClick={goBack}/>)
      setLoading(null)
      setDisabled(false)
    }catch (err){
      console.log(err.message)
      if(err.message!=='Address vazio'){
        setAlert(
          <MyAlert severity={'error'}>
            <AlertTitle>Erro</AlertTitle>
            {err.message}
          </MyAlert>
        )
      }
    }
  }

  const sendForm=async(e)=>{
    e.preventDefault()
    setLoading(<MyCircularProgress/>)
    try{
      await addressEndpoint(form)
      toFeed()
    }catch (err){
      setAlert(
        <MyAlert severity={'error'}>
          <AlertTitle><strong>Erro</strong></AlertTitle>
          {err.message}
        </MyAlert>
      )
    }
  }

  useEffect(()=>{
    getAddress()
  },[])

  return(
    <All>
      <Smartphone>
        <StylesProvider injectFirst>
          <DivBack>
            {back}
          </DivBack>
          <AllContent>
            <Text>Meu endereço</Text>
            {alert}
            {loading}
            <MyForm onSubmit={sendForm}>
                {
                  renderForm(
                    form,
                    setForm,
                    'street',
                    'Logradouro',
                    'Rua / Av',
                    '', '',
                    false,
                    true,
                    disabled
                  )
                }
                {
                  renderForm(
                    form,
                    setForm,
                    'number',
                    'Número',
                    '',
                    'number',
                    '[0-9]',
                    false,
                    true,
                    disabled
                  )
                }
                {
                  renderForm(
                    form,
                    setForm,
                    'complement',
                    'Complemento',
                    'Apto / Bloco',
                    '', '',
                    false,
                    false,
                    disabled
                  )
                }
                {
                  renderForm(
                    form,
                    setForm,
                    'neighbourhood',
                    'Bairro',
                    '', '', '',
                    false,
                    true,
                    disabled
                  )
                }
                {
                  renderForm(
                    form,
                    setForm,
                    'city',
                    'Cidade',
                    '', '', '',
                    false,
                    true,
                    disabled
                  )
                }
                {
                  renderForm(
                    form,
                    setForm,
                    'state',
                    'Estado',
                    '','','',
                    false,
                    true,
                    disabled
                  )
                }
              <Button>Salvar</Button>
            </MyForm>
          </AllContent>
        </StylesProvider>
      </Smartphone>
    </All>
  )
}
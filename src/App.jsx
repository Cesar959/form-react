import { useState, useRef } from 'react';
import './App.css'

function App() {

  // fields
  const [name, Setname] = useState('')
  const [date, Setdate] = useState(0)
  const [cpf, Setcpf] = useState('')
  const [code, Setcode] = useState('')
  const [address, Setaddress] = useState('')
  const [district, Setdistrict] = useState('')
  const [estado, Setestado] = useState('')
  const [uf, Setuf] = useState('')
  const [complement, Setcomplement] = useState('')


  // alert
  const alertSucesso = useRef(0)
  const alertErro = useRef(0)
  const alertName = useRef(0)
  const alertData = useRef(0)
  const alertCPF = useRef(0)
  const alertCode = useRef(0)
  const alertCodeInvalide = useRef(0)
  const alertAddress = useRef(0)
  const alertDistrict = useRef(0)
  const alertEstado = useRef(0)
  const alertUF = useRef(0)
  const alertComplement = useRef(0)

  // class
  const [className, setClassName] = useState('')
  const [classData, setClassData] = useState('')
  const [classCPF, setClassCPF] = useState('')
  const [classCode, setClassCode] = useState('')
  const [classAddress, setClassAddress] = useState('')
  const [classDistrict, setClassDistrict] = useState('')
  const [classEstado, setClassEstado] = useState('')
  const [classUF, setClassUF] = useState('')
  const [classComplement, setClassComplement] = useState('')


  // Busca de CEP pelos correios
  function Searchcode()
  {
    let Valuecode = code.replace('-', '')

    if(Valuecode == "" || Valuecode == null)
    {
      alertCodeInvalide.current.style.display = "block"
      setClassCode('active')
    }
    else 
    {
      fetch(`https://viacep.com.br/ws/${Valuecode}/json/`)
      .then((resp) => resp.json())
      .then(function(response){

        Setaddress(response.logradouro)
        Setdistrict(response.bairro)
        Setestado(response.localidade)
        Setuf(response.uf)

        setClassCode('')
        alertCodeInvalide.current.style.display = "none"
      })
      .catch(function(erro) {
        alertCodeInvalide.current.style.display = "block"
        setClassCode('active')
      });
    }
  }

  // Envio do formularios
  function Submit()
  {
    if(name == ""|| name == null)
    {

      alertName.current.style.display='block'
      setClassName('active')

      alertData.current.style.display='none'
      setClassData('')

      alertCPF.current.style.display='none'
      setClassCPF('')

      alertCode.current.style.display='none'
      setClassCode('')

      alertAddress.current.style.display='none'
      setClassAddress('')

      alertDistrict.current.style.display='none'
      setClassDistrict('')

      alertEstado.current.style.display='none'
      setClassEstado('')

      alertUF.current.style.display='none'
      setClassUF('')

      alertComplement.current.style.display='none'
      setClassComplement('')

    }
    else if(date == ""|| date == null)
    {
      alertName.current.style.display='none'
      setClassName('')

      alertData.current.style.display='block'
      setClassData('active')

      alertCPF.current.style.display='none'
      setClassCPF('')

      alertCode.current.style.display='none'
      setClassCode('')

      alertAddress.current.style.display='none'
      setClassAddress('')

      alertDistrict.current.style.display='none'
      setClassDistrict('')

      alertEstado.current.style.display='none'
      setClassEstado('')

      alertUF.current.style.display='none'
      setClassUF('')

      alertComplement.current.style.display='none'
      setClassComplement('')
    }
    else if(cpf == ""|| cpf == null)
    {
      alertName.current.style.display='none'
      setClassName('')

      alertData.current.style.display='none'
      setClassData('')

      alertCPF.current.style.display='block'
      setClassCPF('active')

      alertCode.current.style.display='none'
      setClassCode('')

      alertAddress.current.style.display='none'
      setClassAddress('')

      alertDistrict.current.style.display='none'
      setClassDistrict('')

      alertEstado.current.style.display='none'
      setClassEstado('')

      alertUF.current.style.display='none'
      setClassUF('')

      alertComplement.current.style.display='none'
      setClassComplement('')
    }
    else if(code == ""|| code == null)
    {
      alertName.current.style.display='none'
      setClassName('')

      alertData.current.style.display='none'
      setClassData('')

      alertCPF.current.style.display='none'
      setClassCPF('')

      alertCode.current.style.display='block'
      setClassCode('active')

      alertAddress.current.style.display='none'
      setClassAddress('')

      alertDistrict.current.style.display='none'
      setClassDistrict('')

      alertEstado.current.style.display='none'
      setClassEstado('')

      alertUF.current.style.display='none'
      setClassUF('')

      alertComplement.current.style.display='none'
      setClassComplement('')
    }
    else if(address == ""|| address == null)
    {
      alertName.current.style.display='none'
      setClassName('')

      alertData.current.style.display='none'
      setClassData('')

      alertCPF.current.style.display='none'
      setClassCPF('')

      alertCode.current.style.display='none'
      setClassCode('')

      alertAddress.current.style.display='block'
      setClassAddress('active')

      alertDistrict.current.style.display='none'
      setClassDistrict('')

      alertEstado.current.style.display='none'
      setClassEstado('')

      alertUF.current.style.display='none'
      setClassUF('')

      alertComplement.current.style.display='none'
      setClassComplement('')
    }
    else if(district == ""|| district == null)
    {
      alertName.current.style.display='none'
      setClassName('')

      alertData.current.style.display='none'
      setClassData('')

      alertCPF.current.style.display='none'
      setClassCPF('')

      alertCode.current.style.display='none'
      setClassCode('')

      alertAddress.current.style.display='none'
      setClassAddress('')

      alertDistrict.current.style.display='block'
      setClassDistrict('active')

      alertEstado.current.style.display='none'
      setClassEstado('')

      alertUF.current.style.display='none'
      setClassUF('')

      alertComplement.current.style.display='none'
      setClassComplement('')
    }
    else if(estado == ""|| estado == null)
    {
      alertName.current.style.display='none'
      setClassName('')

      alertData.current.style.display='none'
      setClassData('')

      alertCPF.current.style.display='none'
      setClassCPF('')

      alertCode.current.style.display='none'
      setClassCode('')

      alertAddress.current.style.display='none'
      setClassAddress('')

      alertDistrict.current.style.display='none'
      setClassDistrict('')

      alertEstado.current.style.display='block'
      setClassEstado('active')

      alertUF.current.style.display='none'
      setClassUF('')

      alertComplement.current.style.display='none'
      setClassComplement('')
    }
    else if(uf == ""|| uf == null)
    {
      alertName.current.style.display='none'
      setClassName('')

      alertData.current.style.display='none'
      setClassData('')

      alertCPF.current.style.display='none'
      setClassCPF('')

      alertCode.current.style.display='none'
      setClassCode('')

      alertAddress.current.style.display='none'
      setClassAddress('')

      alertDistrict.current.style.display='none'
      setClassDistrict('')

      alertEstado.current.style.display='none'
      setClassEstado('')

      alertUF.current.style.display='block'
      setClassUF('active')

      alertComplement.current.style.display='none'
      setClassComplement('')
    }
    else if(complement == ""|| complement == null)
    {
      alertName.current.style.display='none'
      setClassName('')

      alertData.current.style.display='none'
      setClassData('')

      alertCPF.current.style.display='none'
      setClassCPF('')

      alertCode.current.style.display='none'
      setClassCode('')

      alertAddress.current.style.display='none'
      setClassAddress('')

      alertDistrict.current.style.display='none'
      setClassDistrict('')

      alertEstado.current.style.display='none'
      setClassEstado('')

      alertUF.current.style.display='none'
      setClassUF('')

      alertComplement.current.style.display='block'
      setClassComplement('active')
    }
    else
    {
      alertName.current.style.display='none'
      setClassName('')

      alertData.current.style.display='none'
      setClassData('')

      alertCPF.current.style.display='none'
      setClassCPF('')

      alertCode.current.style.display='none'
      setClassCode('')

      alertAddress.current.style.display='none'
      setClassAddress('')

      alertDistrict.current.style.display='none'
      setClassDistrict('')

      alertEstado.current.style.display='none'
      setClassEstado('')

      alertUF.current.style.display='none'
      setClassUF('')

      alertComplement.current.style.display='none'
      setClassComplement('none')

      const dados = {
         name: name,
         Nascimento: date,
         cpf: cpf,
         code: code,
         address: address,
         district: district,
         estado: estado,
         uf: uf,
         complement: complement
       }

       if (typeof(Storage) !== "undefined") 
       {
        alertErro.current.style.display = 'none'
        alertSucesso.current.style.display = 'block'
        window.localStorage.setItem('dados', JSON.stringify(dados));
       }
       else
       {
        alertSucesso.current.style.display = 'none'
        alertErro.current.style.display = 'block'
       }
    }
  }

  return (
  <div className='form'>
      <h1>Cadastro</h1>
      <form>
        <div className='cell-complete'>
          <div className='cell-quite'>
            <input type="text" placeholder='Nome' className={className} onChange={(e)=>{Setname(e.target.value)}}/>
            <div className='message-alert' ref={alertName}>O campo nome é obrigatorio</div>
          </div>
          <div className='cell-quite'>
            <input type="text" className={'date ' + classData} placeholder='Data de Nascimento' onChange={(e)=>{Setdate(e.target.value)}}/>
            <div className='message-alert' ref={alertData}>O campo data de nascimento é obrigatorio</div>
          </div>
        </div>

        <div className='cell-complete'>
          <div className='cell-quite'>
            <input type="text" placeholder='CPF' className={'cpf ' + classCPF} onChange={(e)=>{Setcpf(e.target.value)}}/>
            <div className='message-alert'  ref={alertCPF}>O campo CPF é obrigatorio</div>
          </div>
          <div className='cell-quite'>
            <input type="text" className={'code ' + classCode} placeholder='Cep' id='code' onBlur={()=>{Searchcode()}} onChange={(e)=>{Setcode(e.target.value)}}/>
            <div className='message-alert' ref={alertCode}>O campo cep é obrigatorio</div>
            <div className='message-alert' ref={alertCodeInvalide}>cep invalido</div>
          </div>
        </div>

        <div className='cell-complete'>

          <div className='cell-quite'>
            <input type="text" placeholder='Endereço' className={classAddress} value={address} disabled />
            <div className='message-alert' ref={alertAddress}>O campo endereço é obrigatorio</div>
          </div>

          <div className='cell-quite'>
            <input type="text" placeholder='Bairro' className={classDistrict} value={district} disabled />
            <div className='message-alert' ref={alertDistrict}>O campo bairro é obrigatorio</div>
          </div>

        </div>

        <div className='cell-complete'>

          <div className='cell-quite'>
            <input type="text" placeholder='Estado' className={classEstado} value={estado} disabled />
            <div className='message-alert' ref={alertEstado}>O campo estado é obrigatorio</div>
          </div>

          <div className='cell-quite'>
            <input type="text" placeholder='UF' className={classUF} value={uf} disabled id='uf'/>
            <div className='message-alert' id='alert-uf' ref={alertUF}>O campo uf é obrigatorio</div>
          </div>

        </div>

        <div className='cell-complete'>
          <div className='cell-quite'>
            <input type="text" placeholder='Complemento' className={classComplement} onChange={(e)=>{Setcomplement(e.target.value)}}/>
            <div className='message-alert' ref={alertComplement}>O campo complemento é obrigatorio</div>
          </div>
        </div>

        <div className='finalizacao-cadastro' id='alert-sucesso' ref={alertSucesso}>Cadastro realizado com Sucesso!</div>
        <div className='finalizacao-cadastro' id='alert-erro' ref={alertErro}>Opss não foi possivel realizar o cadastro!</div>

        <div className='group-button'>
          <a href='index.html'>cancelar</a>
          <a href='#' onClick={()=>{Submit()}} id='cadastrar'>cadastrar</a>
        </div>

      </form>
  </div>
  )
}

export default App

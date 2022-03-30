import { useState } from 'react';
import './App.css'

function App() {

  const [name, Setname] = useState('')
  const [date, Setdate] = useState(0)
  const [cpf, Setcpf] = useState('')
  const [code, Setcode] = useState('')
  const [address, Setaddress] = useState('')
  const [district, Setdistrict] = useState('')
  const [estado, Setestado] = useState('')
  const [uf, Setuf] = useState('')
  const [complement, Setcomplement] = useState('')


  function Searchcode()
  {
    let Valuecode = document.getElementById('code').value.replace('-', '')

    if(Valuecode == "" || Valuecode == null)
    {
      document.getElementById('alert-code-invalido').style.display='block'
      document.getElementById('code').classList.add('active')
    }
    else 
    {
      fetch(`https://viacep.com.br/ws/${Valuecode}/json/`)
      .then((resp) => resp.json())
      .then(function(response){
  
        document.getElementById('address').value = response.logradouro
        document.getElementById('district').value = response.bairro
        document.getElementById('estado').value = response.localidade
        document.getElementById('uf').value = response.uf

        Setaddress(response.logradouro)
        Setdistrict(response.bairro)
        Setestado(response.localidade)
        Setuf(response.uf)


        document.getElementById('alert-code-invalido').style.display='none'
        document.getElementById('code').classList.remove('active')
      })
      .catch(function(erro) {
        document.getElementById('alert-code-invalido').style.display='block'
        document.getElementById('code').classList.add('active')
      });
    }
  }

  function alert(field = Text, arrayfields = Array)
  {
    document.getElementById(`alert-${field}`).style.display='block'
    document.getElementById(`${field}`).classList.add('active')

    arrayfields.map((element)=> {
      document.getElementById(`alert-${element}`).style.display='none'
      document.getElementById(`${element}`).classList.remove('active')
    })
  }

  function Messageresult(field = Text, arrayfields = Array)
  {
    document.getElementById(`alert-${field}`).style.display='block'

    arrayfields.map((element)=> {
      document.getElementById(`alert-${element}`).style.display='none'
      document.getElementById(`${element}`).classList.remove('active')
    })
  }

  function Submit()
  {
    if(name == ""|| name == null)
    {
      alert('name', Array('date', 'cpf', 'code', 'address', 'district', 'estado', 'uf', 'complement'))
    }
    else if(date == ""|| date == null)
    {
      alert('date', Array('name', 'cpf', 'code', 'address', 'district', 'estado', 'uf', 'complement'))
    }
    else if(cpf == ""|| cpf == null)
    {
      alert('cpf', Array('name', 'date', 'code', 'address', 'district', 'estado', 'uf', 'complement'))
    }
    else if(code == ""|| code == null)
    {
      alert('code', Array('name', 'date', 'cpf', 'address', 'district', 'estado', 'uf', 'complement'))
    }
    else if(address == ""|| address == null)
    {
      alert('address', Array('name', 'date', 'cpf', 'code', 'district', 'estado', 'uf', 'complement'))
    }
    else if(district == ""|| district == null)
    {
      alert('district', Array('name', 'date', 'cpf', 'code', 'address', 'estado', 'uf', 'complement'))
    }
    else if(estado == ""|| estado == null)
    {
      alert('estado', Array('name', 'date', 'cpf', 'code', 'address', 'district', 'uf', 'complement'))
    }
    else if(uf == ""|| uf == null)
    {
      alert('uf', Array('name', 'date', 'cpf', 'code', 'address', 'district', 'estado', 'complement'))
    }
    else if(complement == ""|| complement == null)
    {
      alert('complement', Array('name', 'date', 'cpf', 'code', 'address', 'district', 'estado', 'uf'))
    }
    else
    {
       Messageresult('sucesso', Array('name', 'date', 'cpf', 'code', 'address', 'district', 'estado', 'uf', 'complement'))

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
        document.getElementById('alert-erro').style.display="none"
        document.getElementById('alert-sucesso').style.display="block"
        window.localStorage.setItem('dados', JSON.stringify(dados));
       }
       else
       {
        document.getElementById('alert-erro').style.display="block"
        document.getElementById('alert-sucesso').style.display="none"
       }
    }
  }

  return (
  <div className='form'>
      <h1>Cadastro</h1>
      <form>
        <div className='cell-complete'>
          <div className='cell-quite'>
            <input type="text" placeholder='Nome' id='name' onChange={(e)=>{Setname(e.target.value)}}/>
            <div className='message-alert' id='alert-name'>O campo nome é obrigatorio</div>
          </div>
          <div className='cell-quite'>
            <input type="text" className='date' id='date' placeholder='Data de Nascimento' onChange={(e)=>{Setdate(e.target.value)}}/>
            <div className='message-alert' id='alert-date'>O campo data de nascimento é obrigatorio</div>
          </div>
        </div>

        <div className='cell-complete'>
          <div className='cell-quite'>
            <input type="text" placeholder='CPF' className='cpf' id='cpf' onChange={(e)=>{Setcpf(e.target.value)}}/>
            <div className='message-alert' id='alert-cpf'>O campo CPF é obrigatorio</div>
          </div>
          <div className='cell-quite'>
            <input type="text" className='code' placeholder='Cep' id='code' onBlur={()=>{Searchcode()}} onChange={(e)=>{Setcode(e.target.value)}}/>
            <div className='message-alert' id='alert-code'>O campo cep é obrigatorio</div>
            <div className='message-alert' id='alert-code-invalido'>cep invalido</div>
          </div>
        </div>

        <div className='cell-complete'>

          <div className='cell-quite'>
            <input type="text" placeholder='address' disabled id='address'/>
            <div className='message-alert' id='alert-address'>O campo endereço é obrigatorio</div>
          </div>

          <div className='cell-quite'>
            <input type="text" placeholder='Bairro' disabled id='district'/>
            <div className='message-alert' id='alert-district'>O campo bairro é obrigatorio</div>
          </div>

        </div>

        <div className='cell-complete'>

          <div className='cell-quite'>
            <input type="text" placeholder='Estado' disabled id='estado'/>
            <div className='message-alert' id='alert-estado'>O campo estado é obrigatorio</div>
          </div>

          <div className='cell-quite'>
            <input type="text" placeholder='UF' disabled id='uf'/>
            <div className='message-alert' id='alert-uf'>O campo uf é obrigatorio</div>
          </div>

        </div>

        <div className='cell-complete'>
          <div className='cell-quite'>
            <input type="text" placeholder='Complemento' id='complement' onChange={(e)=>{Setcomplement(e.target.value)}}/>
            <div className='message-alert' id='alert-complement'>O campo complemento é obrigatorio</div>
          </div>
        </div>

        <div className='finalizacao-cadastro' id='alert-sucesso'>Cadastro realizado com Sucesso!</div>
        <div className='finalizacao-cadastro' id='alert-erro'>Opss não foi possivel realizar o cadastro!</div>

        <div className='group-button'>
          <a href='index.html'>cancelar</a>
          <a href='#' onClick={()=>{Submit()}} id='cadastrar'>cadastrar</a>
        </div>

      </form>
  </div>
  )
}

export default App

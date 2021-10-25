import { useState, FormEvent } from "react";

export default function ContractForm() {

  
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');

  async function handleSubmit(event: FormEvent){
    event.preventDefault();

    console.log('Nome: ', name)
    console.log('CPF: ', cpf)

  }
  
  return (
    <form onSubmit={handleSubmit} >
      <fieldset>
        <legend>Dados</legend>

        <div>
          <label htmlFor="name">Nome</label>
          <input 
          id="name" 
          value={name}
          onChange={event => setName(event.target.value)} />
        </div>

        <div>
          <label htmlFor="cpf">CPF</label>
          <input 
          id="name" 
          value={cpf}
          onChange={event => setCpf(event.target.value)}
          />
        </div>

      </fieldset>

      <button className="confirm-button" type="submit">
        Confirmar
      </button>
    </form>

  )
}

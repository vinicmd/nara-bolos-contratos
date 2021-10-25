import { useState, FormEvent } from "react";

export default function ContractForm() {

  
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [address, setAddress] = useState('')
  const [deliveryDate, setDeliveryDate] = useState('')
  const [deliveryHour, setDeliveryHour] = useState('')
  const [deliveryAdress, setDeliveryAddress] = useState('')
  const [cakeFilling, setCakeFilling] = useState('')
  //const [telephone, setTelephone] = useState('')
  

  function handleSubmit(event: FormEvent){
    event.preventDefault();

    console.log('name: ', name)
    console.log('cpf: ', cpf)
    console.log('address: ', address)
    console.log('deliveryDate: ', deliveryDate)
    console.log('deliveryHour: ', deliveryHour)
    console.log('deliveryAdress: ', deliveryAdress)

  }
  
  return (
    <form onSubmit={handleSubmit} >
      <div>
        <label htmlFor="name">Nome Cliente </label>
        <input 
          id="name" 
          value={name}
          onChange={event => setName(event.target.value)} />
      </div>

      <div>
        <label htmlFor="cpf">CPF Cliente </label>
        <input 
          id="cpf" 
          value={cpf}
          onChange={event => setCpf(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="address">Endereço Cliente </label>
        <input 
          id="address" 
          value={address}
          onChange={event => setAddress(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="deliveryDate">Data de Entrega </label>
        <input 
          type='date'
          id="deliveryDate" 
          value={deliveryDate}
          onChange={event => setDeliveryDate(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="deliveryHour">Horário de Entrega </label>
        <input 
          type='time'
          id="deliveryHour" 
          value={deliveryHour}
          onChange={event => setDeliveryHour(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="deliveryAdress">Endereço de Entrega </label>
        <input 
          id="deliveryAdress" 
          value={deliveryAdress}
          onChange={event => setDeliveryAddress(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="cakeFilling">Endereço de Entrega </label>
        <input 
          id="cakeFilling" 
          value={cakeFilling}
          onChange={event => setCakeFilling(event.target.value)}
        />
      </div>

      {/* <div>
        <label htmlFor="telephone">Telefone </label>
        <input 
          type='tel'
          id="telephone" 
          value={telephone}
          onChange={event => setTelephone(event.target.value)}
        />
      </div> */}

      <button className="confirm-button" type="submit">
        Confirmar
      </button>
    </form>
  )
}


/* 
Nome-Contratante
CPF-Contratante
Endereço-Contratante


Data-desejada
Horário-Desejado
Endereço-Entrega (se vazio, mesmo Endereço-Contratante)

Bolo-Desejado{
  Massa,
  Recheios []
}
Peso

Doces: (texto grande descrevendo, se vazio, não aparece.)

Preço-Total
Metade-Preço-Entrega (com base no total)

Data-Atual */
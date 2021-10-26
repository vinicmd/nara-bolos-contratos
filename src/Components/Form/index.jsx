import { useState } from "react";
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

export default function ContractForm() {

  const months = ['Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]

  const today = new Date()
  const day = today.getDate()
  const month = months[(today.getMonth())]
  const year = today.getFullYear()

  function getContract() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs

    const reportTitle = [
      {
        text: 'CONTRATO DE PRESTAÇÃO DE SERVIÇO',
        fontSize: 18,
        bold: true,
        alignment: 'center',
        margin: [0, 20, 0, 45]
      }
    ]
    const details = []
    function footer(currentPage, pageCount){
      return [
        {
          text: currentPage + ' / ' + pageCount,
          fontSize: 9,
          alignment: 'right',
          margin: [0, 10, 20, 0]
        }
      ]
    }
  
    const docDefinitions = {
      pageSize: 'A4',
      pageMargins: [15,50,15,40],

      header: [reportTitle],
      content: [details],
      footer: footer
    }

    pdfMake.createPdf(docDefinitions).download()
  }
  

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [address, setAddress] = useState('')
  const [deliveryDate, setDeliveryDate] = useState('')
  const [deliveryHour, setDeliveryHour] = useState('')
  const [deliveryAdress, setDeliveryAddress] = useState('')
  const [cakeFilling, setCakeFilling] = useState('')
  const [cakeBatter, setCakeBatter] = useState('')
  const [cakeWeight, setCakeWeight] = useState('')
  const [candy, setCandy] = useState('')
  const [price, setPrice] = useState('')
  const [contractDate, setContractDate] = useState('')
  
  console.log(today)
  console.log(day)
  console.log(month)
  console.log(year)

  

  function handleSubmit(event){
    event.preventDefault();

  console.log('name', name)
  console.log('cpf', cpf)
  console.log('address', address)
  console.log('deliveryDate', deliveryDate)
  console.log('deliveryHour', deliveryHour)
  console.log('deliveryAdress', deliveryAdress)
  console.log('cakeFilling', cakeFilling)
  console.log('cakeBatter', cakeBatter)
  console.log('cakeWeight', cakeWeight)
  console.log('candy', candy)
  console.log('price', price)
  console.log('contractDate', contractDate)

  getContract()

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
          placeholder="Em branco = Mesmo acima"
          value={deliveryAdress}
          onChange={event => setDeliveryAddress(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="cakeBatter">Massa do bolo </label>
        <input 
          id="cakeBatter" 
          value={cakeBatter}
          onChange={event => setCakeBatter(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="cakeFilling">Recheio(s) </label>
        <input 
          id="cakeFilling" 
          value={cakeFilling}
          onChange={event => setCakeFilling(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="cakeWeight">Peso do Bolo </label>
        <input 
          id="cakeWeight" 
          value={cakeWeight}
          onChange={event => setCakeWeight(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="candy">Doces </label>
        <textarea 
          id="candy" 
          value={candy}
          onChange={event => setCandy(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="price">Preço Total </label>
        <input 
          id="price" 
          value={price}
          onChange={event => setPrice(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="contractDate">Data do Contrato </label>
        <input 
          id="contractDate" 
          placeholder="Em branco = Data de Hoje"
          value={contractDate}
          onChange={event => setContractDate(event.target.value)}
        />
      </div>
      
      <button className="confirm-button" type="submit">
        Gerar Contrato
      </button>
    </form>
  )
}

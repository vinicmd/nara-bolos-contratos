import { useState } from "react";
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import './style.css'

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
    
    const details = {
      content: [
        {
          text: 'CONTRATO DE PRESTAÇÃO DE SERVIÇO',
          fontSize: 18,
          bold: true,
          alignment: 'center',
          margin: [15, 20, 0, 20],
        },
        {
          text: '1- IDENTIFICAÇÃO DAS PARTES\n',
          fontSize: 16,
        },
        {
          text: [
            {text: '\nCONTRATANTE: ', bold: true, },
            `${name.toUpperCase()}, portador(a) da cédula de identificação RG nº ${rg}, inscrito(a) no CPF ${cpf}, residente no endereço ${address} denominada `,
            {text: 'CONTRATANTE;', bold: true, },
            {text: '\n\nCONTRATADA: ', bold: true, },
            `NARA RUBIA DA PAZ GARCIA ROSA, portador(a) da cédula de identificação RG nº 4820975, inscrito(a) no CPF 015.628.691-24, residente no endereço Rua SB-11 Quadra 20 Lote 13 Casa 01, Residêncial Solar Bouganvile, CEP 74393-435 denominada `,
            {text: 'CONTRATANTE;\n', bold: true, },
            '\nAs partes identificadas acima têm entre si, justo e acertado o presente Contrato de Prestação de Serviços, que se regerá pelas cláusulas seguintes e pelas condições de preço, forma e termo de pagamento descrita no presente.'
          ],
          fontSize: 12,
          alignment: 'justify'
        },
        {
          text: '\n\n2- DO OBJETO DO CONTRATO\n',
          fontSize: 16,
        },
        {
          text: [
            {text: '\nCLÁUSULA PRIMEIRA: ', bold: true, },
            `Constitui objeto do presente contrato a produção e entrega de bolos e doces descritos no Parágrafo Primeiro desta Cláusula pela CONTRATADA, onde a festa será realizada na data ${deliveryDate.split('-').reverse().join('/')}, no horário ${deliveryHour}, no endereço ${deliveryAdress}, mediante a pagamento a ser realizado pela Contratante.`,
            {text: '\n\nPARÁGRAFO PRIMEIRO:\n', bold: true, },
            'Os serviços a serem executados compreendem a produção e entrega total de tais produtos:\n',
            'Sendo: \n',
            {text: `\nBolo: peso: ${cakeWeight}Kg, massa: ${cakeBatter}, recheio(s): ${cakeFilling}, decoração: ${cakeDecoration}.\n`, margin: [0,20]},
            {text: `Doces: ${candy}`, margin: [0,20]},
          ],
          fontSize: 12,
          alignment: 'justify'

        },
        {
          text: '\n\n3- DAS OBRIGAÇÕES\n',
          fontSize: 16,
        },
        {
          text: [
            {text: '\nCLÁUSULA SEGUNDA: ', bold: true, },
            `A CONTRATADA realizará a produção e entrega dos doces acima especificados.\n\n`,
            `A CONTRATADA deverá fornecer à CONTRATANTE todas as informações necessárias sobre o produto. A CONTRATANTE deverá efetuar o pagamento na forma e condições estabelecidas na cláusula terceira.`,
          ],
          fontSize: 12,
          alignment: 'justify'

        },
        {
          text: '\n\n4- DO PREÇO E DAS CONDIÇÕES DE PAGAMENTO\n',
          fontSize: 16,
        },
        {
          text: [
            {text: '\nCLÁUSULA TERCEIRA: ', bold: true, },
            `O preço total pelos serviços prestados pela CONTRATADA é de R$ ${price},00, devendo este ser pago em 50% (R$ ${price / 2},00), de forma adiantada e o os outros 50% (R$ ${price / 2},00), no ato da entrega do produto, podendo ser em dinheiro ou cartão de crédito e débito.`,
          ],
          fontSize: 12,
          alignment: 'justify'

        },
        {
          text: '\n\n5- DA RESCISÃO\n',
          fontSize: 16,
        },
        {
          text: [
            {text: '\nCLÁUSULA QUARTA: ', bold: true, },
            `Em caso de rescisão unilateral do presente contrato pela CONTRATANTE, antes da data da entrega dos serviços e produtos, NÃO haverá devolução dos 50% que foram adiantados.\n`,
            {text: '\n\n\n\n\n\n_______________________________________________________________________\n', alignment: 'center'},
            {text: `${name}`, alignment: 'center'},
            {text: `\n\n\n\n\n\n\nGoiânia, ${day} de ${month} de ${year}`, alignment: 'center'},
          ],
          fontSize: 12,
          alignment: 'justify'

        },
      ]
    }
    
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
      pageMargins: [30,50,30,40],
      
      content: details.content,
      footer: footer
    }
    
    pdfMake.createPdf(docDefinitions).download(fileName)
  }
  
  
  const [name, setName] = useState('');
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');
  const [address, setAddress] = useState('')
  const [deliveryDate, setDeliveryDate] = useState('')
  const [deliveryHour, setDeliveryHour] = useState('')
  const [deliveryAdress, setDeliveryAddress] = useState('')
  const [cakeFilling, setCakeFilling] = useState('')
  const [cakeBatter, setCakeBatter] = useState('')
  const [cakeWeight, setCakeWeight] = useState('')
  const [cakeDecoration, setCakeDecoration] = useState('')
  const [candy, setCandy] = useState('')
  const [price, setPrice] = useState('')
  //const [contractDate, setContractDate] = useState('')
  
  const fileName = `${name.replace(/\s/g, '')}-${day}-${month}-${year}`
  
  function handleSubmit(event){
    event.preventDefault();
    
    getContract()

  }
  
  return (
    <>
    <div id="contract">
      <form onSubmit={handleSubmit} className="contract-form">
        <div className="input-block">
          <label htmlFor="name">Nome Cliente </label>
          <input 
            id="name" 
            value={name}
            onChange={event => setName(event.target.value)} />
        </div>

        <div className="input-block">
          <label htmlFor="rg">RG Cliente </label>
          <input 
            id="rg" 
            value={rg}
            onChange={event => setRg(event.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="cpf">CPF Cliente </label>
          <input 
            id="cpf" 
            value={cpf}
            onChange={event => setCpf(event.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="address">Endereço Cliente </label>
          <input 
            id="address" 
            value={address}
            onChange={event => setAddress(event.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="deliveryDate">Data de Entrega </label>
          <input 
            type='date'
            id="deliveryDate" 
            value={deliveryDate}
            onChange={event => setDeliveryDate(event.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="deliveryHour">Horário de Entrega </label>
          <input 
            type='time'
            id="deliveryHour" 
            value={deliveryHour}
            onChange={event => setDeliveryHour(event.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="deliveryAdress">Endereço de Entrega </label>
          <input 
            id="deliveryAdress" 
            placeholder="Em branco = Mesmo acima"
            value={deliveryAdress}
            onChange={event => setDeliveryAddress(event.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="cakeBatter">Massa do bolo </label>
          <input 
            id="cakeBatter" 
            value={cakeBatter}
            onChange={event => setCakeBatter(event.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="cakeFilling">Recheio(s) </label>
          <input 
            id="cakeFilling" 
            value={cakeFilling}
            onChange={event => setCakeFilling(event.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="cakeDecoration">Decoração do Bolo </label>
          <input 
            id="cakeDecoration" 
            value={cakeDecoration}
            onChange={event => setCakeDecoration(event.target.value)}
          />
        </div>
        

        <div className="input-block">
          <label htmlFor="cakeWeight">Peso do Bolo </label>
          <input 
            id="cakeWeight" 
            value={cakeWeight}
            onChange={event => setCakeWeight(event.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="candy">Doces </label>
          <textarea 
            id="candy" 
            value={candy}
            onChange={event => setCandy(event.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="price">Preço Total </label>
          <input 
            id="price" 
            value={price}
            onChange={event => setPrice(event.target.value)}
          />
        </div>

        {/* <div className="input-block">
          <label htmlFor="contractDate">Data do Contrato </label>
          <input 
            id="contractDate" 
            placeholder="Em branco = Data de Hoje"
            value={contractDate}
            onChange={event => setContractDate(event.target.value)}
          />
        </div> */}
        
        <button className="confirm-button" type="submit">
          Gerar Contrato
        </button>
      </form>
    </div>
    </>
  )
}

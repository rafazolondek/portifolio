import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Section from './components/Section'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import HeaderProjects from './components/HeaderProjects'
import Projeto from './components/Projeto'
import Rodape from './components/Rodape'

function App() {
  return (
    <>
      <Header />
      <Section />
      <Section2 />
      <Section3 />
      <HeaderProjects />
      <Projeto img_src="./public/poolclean.png" alt="PoolClean" title="PoolClean" resumo="Esse projeto foi desenvolvido por eu e minha equipe na faculdade. Projeto o qual se trata de um site de agendamento para a limpeza de piscinas, nesse site o usuário poderia escolher o dia, ver quais funcionários estariam disponíveis para o dia e realizar o pagamento. O PoolClean ainda não foi finalizado e está em andamento"  repositorio="https://github.com/NetBridge-Tech/poolClean"/>

      <Projeto img_src="./public/aranhaverso.png" alt="Aranhaverso" title="AluraCord - Aranhaverso" resumo="Projeto criado durante a Imersão React da Alura com a @alura, @omariosouto e @peas, onde criamos um site baseado no discord para as pessoas conversarem e discutirem sobre determinado tema. O meu projeto foi feito no tema do Aranhaverso, de um fã do Homem Aranha para todos que quiserem conversar sobre." repositorio="https://github.com/rafazolondek/aluracord-aranhaverso"/>

      <Projeto img_src="./public/calculadora.png" alt="Calculadora" title="Calculadora" resumo="Projeto de uma calculadora funcional que tenha as operações matemáticas básicas como: Adição, Subtração, Multiplicação e Divisão. Tal projeto foi desenvolvido com HTML, CSS e JS basicamente. Usando no JavaScript a função eval() que auxilia muito em operações matemáticas" repositorio="https://github.com/rafazolondek/calculadora"/>

      <Projeto img_src="./public/cordel.png" alt="Cordel Moderno" title="Cordel Moderno" resumo="Projeto de um Cordel online que fiz quando estava estudando HTML e CSS. Nesse projeto o intuito era aprender o efeito paralax do HTML." repositorio="https://github.com/rafazolondek/projeto-cordel"/>

      <Projeto img_src="./public/monetario2.png" alt="Monetário" title="Monetário" resumo="Aplicativo desenvolvido para Android em Kotlin para converter moedas. Projeto no qual teve a instrução do professor Tiago Aguiar." repositorio="https://github.com/rafazolondek/monetario"/>

      <Rodape />
    </>
  )
}

export default App

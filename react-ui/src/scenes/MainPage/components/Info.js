// @flow
import React from "react"
import FullscreenSlide from "../../../components/FullscreenSlide/index"
import styled from 'styled-components';
import {MEDIA_ONLY_QUERY, PALETTE} from "../../../services/styleTools"

const Page = styled.div`
  display: flex;
  // flex-direction: column;
  width: 1000px;
  max-width: 100%;
  margin: 0 auto;
  padding-top: 5%;
  font-size: 14px;
  
  ${MEDIA_ONLY_QUERY.DESKTOP`
    display: block;
  `}
`

const IntroCol = styled.div`
  padding: 0 30px; 
  width: 33%;
  
  ${MEDIA_ONLY_QUERY.DESKTOP`
    width: 100%;
    padding: 0;
  `}
`

const IntroParagraph = styled.p`
  color: ${PALETTE.SECONDARY};
  line-height: 19px;
`

const IntroHeadSnd = styled.h2`
  text-transform: uppercase;
  color: ${PALETTE.SECONDARY};
  margin: 15px 0;
  
  font-size: 16px;
  font-weight: 700;
`


const Info = () =>
  <FullscreenSlide className="Info">

    <Page>

      <IntroCol>

        <IntroHeadSnd>Generace, která může volit</IntroHeadSnd>
        <IntroParagraph>Generace s názorem vzniká jako platforma s cílem zvýšit volební účast mladých lidí. Jsme první generací, která od narození žije ve svobodné společnosti. Ve společnosti jejíž pravidla a směřování zásadně ovlivňují námi zvolení zástupci, kteří reflektují naše postoje a názory.</IntroParagraph>

        <IntroHeadSnd>Zrcadlo</IntroHeadSnd>
        <IntroParagraph>Politická reprezentace - poslanci, senátoři, vláda, prezident - jsou vlastně jako naše zrcadlo, zrcadlo naší společnosti, našich priorit v nejrůznějších oblastech života. V roce 2013 se voleb do poslanecké sněmovny zúčastnilo 51% lidí do  30-ti let. Momentálně se tak na utváření státu podílí příliš málo mladých lidí na to, aby se jim podobal.</IntroParagraph>

      </IntroCol>

      <IntroCol>

        <IntroHeadSnd>Už to tu bylo?</IntroHeadSnd>
        <IntroParagraph>V minulosti vznikla řada politických a společenských projektů, které měly za cíl podporu konkrétního názoru a často se přímo vymezovaly vůči konkrétní straně, skupině, osobě či smýšlení. Některé byly úspěšné, některé méně, každopádně většina z nich nepřekročila hranice své vlastní sociální bubliny. Přesvědčit někoho s odlišným názorem není snadné a vlastně by ani nemělo být. Vytvořit si názor je složitý a dlouhotrvající proces, člověk k tomu využívá své veškeré znalosti, zkušenosti a přesvědčení. Projekt, který si něco takového stanoví za cíl možná až příliš přeceňuje své možnosti. Tento projekt je jiný. O nic takového se nesnaží.</IntroParagraph>

        <IntroHeadSnd>Názor</IntroHeadSnd>
        <IntroParagraph>Myšlenka projektu Generace s názorem je založena na neutrálním postoji a nereprezentuje žádný konkrétní politický směr. Náš projekt si stanovuje za cíl povzbudit v lidech téma občasnké odpovědnosti. Chceme ukázat mladým lidem, že je důležité mít svůj názor a ten potom během voleb sdělit.</IntroParagraph>

      </IntroCol>

      <IntroCol>

        <IntroHeadSnd>Vzory mít</IntroHeadSnd>
        <IntroParagraph>Každá generace má své vzory.  Inspirativní osobnosti v umění, sportu, vědě či kultuře ovlivňují naše mínění a určují společenské trendy. Chceme představit inspirativní osobnosti, které se stanou součástí našeho projektu a ukážou mladým lidem, že jdou volit.</IntroParagraph>

        <IntroHeadSnd>Vzorem být</IntroHeadSnd>
        <IntroParagraph>Vzory nejen máme, ale zároveň jimi jsme. To co píšeme na sociální sítě ovlivňuje spoustu lidí kolem nás. Proč ale nikdo neví, že volíme? Zájem o veřejné dění není věc, za kterou by se měl člověk stydět. Inspirujte své okolí a podpořte myšlenku Generace s názorem.</IntroParagraph>

      </IntroCol>

    </Page>

  </FullscreenSlide>

export default Info

import Image from "next/image";
import { SMain, SSection, SFigure, SAside } from "./styles/pages-styles/SHome";
import imageFigure from "../../public/Imagem 2I.svg";

export default function Home() {
  return (
    <SMain>
      <SSection>
        <div id="titles-container">
          <h1>Junte-se à <br /> nossa comunidade</h1>
          <div id="divider-content"></div>
          <p>Encontre atendimento clínico de qualidade ou entre para o time de profissionais da Lacrei Saúde.</p>
        </div>
   
        <SAside>
          <button id="btn-aside" type="button">Buscar atendimento</button>
          <button id="btn-aside" type="button">Oferecer atendimento</button>
        </SAside>
      </SSection>

      <SFigure id='image-container'>
        <Image
          className='image-content'
          src={imageFigure}
          alt="imagem que retrata uma medica atendendo uma paciente."
          width={400}
        />
      </SFigure>
    </SMain>
  );
};

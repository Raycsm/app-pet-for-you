import { View } from 'native-base';
import * as React from 'react';
import { Dialog, Portal, Text, Checkbox } from 'react-native-paper';
import { ScrollView } from 'react-native';

const DialogTerms = ({visible, setVisible}) => {
  const hideDialog = () => setVisible(false);
  
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title style={{textAlign:"center"}}> TERMOS DE USO </Dialog.Title>
        <Dialog.Content>
          <ScrollView>
                <Text>
                      <Text style={{fontWeight:"bold"}}>1 - Respeito às leis</Text>{"\n"}
                      1.1 O utilizador deverá acessar o "PET FOR YOU" apenas para finalidades lícitas;{"\n"}
                      1.2 O utilizador concorda em utilizar o aplicativo apenas para os devidos fins e em conformidade com o presente termo e limitações legais, bem como quaisquer políticas aplicáveis no Brasil;{"\n"}
                      1.3 Seu acesso é proibido em territórios onde o conteúdo seja considerado ilegal. Aquele que optar por acessar este site a partir de outras localidades o farão por iniciativa própria e serão responsáveis pelo cumprimento das leis brasileiras. Qualquer pendência com relação aos materiais será dirimida pelas leis brasileiras.{"\n"}
                      <Text style={{fontWeight:"bold"}}>2 – Faixa etária permitida</Text>{"\n"}
                      2.1 A utilização do aplicativo está indicada somente para indivíduos acima de 16 (dezesseis) anos de idade. Adolescentes de 16 a 18 anos deverão ter orientação e supervisão de um adulto. O "PET FOR YOU" não se responsabiliza pelo acesso em desrespeito a essas normas.{"\n"}
                      <Text style={{fontWeight:"bold"}}>3 - Licença limitada</Text>{"\n"}
                      3.1 Você recebeu uma licença limitada, não transferível, não exclusiva, livre de royalties e revogável para baixar, instalar, executar e utilizar este aplicativo em seu dispositivo. Você reconhece e concorda que o "PET FOR YOU" concede ao usuário uma licença exclusiva para uso e desta forma não lhe transfere os direitos sobre o produto;{"\n"}
                      3.2 O aplicativo deverá ser utilizado por você, usuário. A venda, transferência, modificação, engenharia reversa ou distribuição, bem como a cópia de textos, imagens ou quaisquer partes nele contido é expressamente proibida.{"\n"}
                      <Text style={{fontWeight:"bold"}}>4 - Alterações, modificações e rescisão</Text>{"\n"}
                      4.1 O "PET FOR YOU" reserva-se o direito de, a qualquer tempo, modificar estes termos, seja incluindo, removendo ou alterando quaisquer de suas cláusulas. Tais modificações terão efeito imediato. Após publicadas tais alterações, ao continuar com o uso do aplicativo, você terá aceitado e concordado em cumprir os termos modificados;{"\n"}
                      4.2 O "PET FOR YOU" pode, de tempos em tempos, modificar ou descontinuar (temporária ou permanentemente) a distribuição ou a atualização deste aplicativo;{"\n"}
                      4.4 O usuário não poderá responsabilizar o "PET FOR YOU" nem seus diretores, executivos, funcionários, afiliados, agentes, contratados ou licenciadores por quaisquer modificações, suspensões ou descontinuidade do aplicativo.{"\n"}
                      <Text style={{fontWeight:"bold"}}>5 - Consentimento para coleta e uso de dados</Text>{"\n"}
                      5.1 Você concorda que o "PET FOR YOU" pode coletar e usar dados técnicos de seu dispositivo tais como especificações, configurações, versões de sistema operacional, tipo de conexão à internet e afins.{"\n"}
                      <Text style={{fontWeight:"bold"}}>6 - Responsabilidade pelo conteúdo</Text>{"\n"}
                      6.1 O usuário concorda que é o único responsável pela sua própria conduta e pela veracidade das informações fornecidas enquanto utilizar o serviço e que é responsável pelas consequências que resultem do fornecimento intencional de dados incorretos;{"\n"}
                      6.2 O utilizador concorda que ao usar o "PET FOR YOU" não irá publicar, enviar, distribuir ou divulgar conteúdo ou informação de caráter difamatório, obsceno ou ilícito, inclusive informações de propriedade exclusiva pertencentes a outras pessoas ou empresas, bem como marcas registradas ou informações protegidas por direitos autorais, sem a expressa autorização do detentor dos direitos;{"\n"}
                      6.3 Ninguém pode agir em seu nome no uso do "PET FOR YOU". Você é responsável pelo conteúdo que indivíduos não autorizados produzirem ao usar essa aplicação utilizando, com sua permissão, seu perfil cadastrado. Essa regra não se aplica aos casos de violação ou outros problemas de segurança da aplicação.{"\n"}
                      <Text style={{fontWeight:"bold"}}>7 - Propriedade intelectual</Text>{"\n"}
                      7.1 A equipe "PET FOR YOU" e seus colaboradores são detentores do direito de autoria dos conteúdos produzidos e apresentados nesta aplicação. Essa premissa não se aplica às informações consideradas como de domínio público ou de utilidade pública.{"\n"}
                      7.2 Todas as outras marcas comerciais, marcas de serviço, nomes e logotipos que aparecem nesta aplicação são de propriedade de seus respectivos proprietários.{"\n"}
                      7.3 O aplicativo "PET FOR YOU" não é um software open source, sendo que sua utilização por terceiros se submete aos termos de licença dos parceiros envolvidos. Os direitos de uso de conteúdo e dos relatórios gerados pela aplicação são concedidos a desenvolvedores, em especial aqueles que decorrem dos termos da licença Creative Commons- Atribuição-Não Comercial 4.0 Internacional.{"\n"}
                      7.4 Os dados coletados por meio do "PET FOR YOU" podem sofrer influência pela sua capacidade de acesso a dispositivos móveis com especificações tecnológicas mínimas;{"\n"}
                      <Text style={{fontWeight:"bold"}}>8 - Leis, regulamentos, direitos e deveres</Text>{"\n"}
                      8.1 É política da equipe do "PET FOR YOU" cumprir todas as leis e regulamentos aplicáveis, os quais podem ser modificados de tempos em tempos. No caso de qualquer disposição do presente Termos de Uso estar em conflito com qualquer lei ou regulamento aplicável, a lei ou regulamento aplicável substituirá a disposição contrária;{"\n"}
                      8.2 O "PET FOR YOU" poderá, mas não é obrigado, a monitorar, revisar e restringir o acesso a qualquer de suas áreas onde os utilizadores transmitem informações, podendo retirar do ar ou retirar o acesso a qualquer destas informações ou comunicações;{"\n"}
                      8.3 - Se você tiver alguma dúvida em relação ao "PET FOR YOU", não hesite em contactar-nos pelo e-mail.{"\n"}
                      <Text style={{fontWeight:"bold"}}>9 - Garantia de sigilo e anonimato</Text>{"\n"}
                      9.1 Será garantido o sigilo e anonimato de todas as informações produzidas por você no "PET FOR YOU", exceto conforme exigido por lei, ou para tratar de questões de descumprimento;{"\n"}
                      9.2 Reservamos o direito de usar esta informação internamente e, nesse âmbito, sua contribuição estará vinculada ao apelido de sua escolha;{"\n"}
                      <Text style={{fontWeight:"bold"}}>10 - Atualização do "PET FOR YOU"</Text>{"\n"}
                      10.1 Modificações dessa aplicação dos seus termos de uso poderão ocorrer. A menos que indique o contrário, seu uso da aplicação indica a aceitação integral do Termo de Uso naquela versão vigente cada vez que você usar o "PET FOR YOU". Fique atento às atualizações e, em caso de dúvida, os Termos de Uso estarão sempre disponíveis para acesso.{"\n"}
                      <Text style={{fontWeight:"bold"}}>11 - Responsabilidades</Text>{"\n"}
                      11.1 - O "PET FOR YOU" não assume responsabilidade por quaisquer prejuízos e / ou danos a pessoas ou bens, em consequência de qualquer utilização das ideias, conteúdo, instruções, métodos, produtos ou procedimentos contidos nesta aplicação;{"\n"}
                      11.2 - Em hipótese alguma os profissionais envolvidos com o desenvolvimento ou gestão dessa aplicação serão responsabilizados por qualquer decisão ou ação tomada por você em base em tal conteúdo;{"\n"}
                      11.3 – O “PET FOR YOU” não se responsabiliza por lesões causadas pela prática inadequada dos exercícios, bem como por lesões pré-existentes.{"\n"}
                      <Text style={{fontWeight:"bold"}}>12 - Responsabilidade por problemas </Text>{"\n"}
                      12.1 - Eventualmente todo conteúdo ou qualquer parte do "PET FOR YOU" pode não estar disponível e pode não funcionar corretamente em qualquer momento. Fazemos esforços para evitar problemas tecnológicos, mas em qualquer momento podem ocorrer nessa aplicação problemas tecnológicos das mais diversas naturezas, tais como vírus, rotinas de programação prejudiciais ou problemas relacionados ao aparelho de usuário;{"\n"}
                      12.2. O " PET FOR YOU" não se responsabiliza por qualquer dano ou prejuízo causado pelo desempenho ou falha de desempenho de toda ou qualquer parte da aplicação. O " PET FOR YOU" não se responsabiliza por quaisquer defeitos, atrasos ou erros resultantes da sua utilização desta aplicação;{"\n"}
                      12.3. A utilização de todas as funcionalidades do "PET FOR YOU" exige disponibilidade do acesso à internet pelo usuário, por wi-fi ou cabo de rede de dados. A ausência desse pré-requisito pode limitar a utilização da aplicação com todo seu potencial de uso. A equipe do "PET FOR YOU” não assume responsabilidade decorrente dessa limitação;{"\n"}
                      12.4. Esta isenção de responsabilidade aplica-se a todos e quaisquer danos ou prejuízos, incluindo aqueles causados por qualquer falha de desempenho, erro, omissão, interrupção, apagamento, defeito, atraso na operação ou transmissão, vírus de computador, falha de linha de comunicação, roubo, destruição ou acesso não autorizado, a alteração ou uso de qualquer bem, seja por violação de contrato, comportamento ilícito, negligência ou qualquer outra causa de ação.{"\n"}
                      <Text style={{fontWeight:"bold"}}>13 - Responsabilidade por informações de terceiros</Text>{"\n"}
                      13.1. A disposição através da aplicação de links e referências para outros sites, publicações ou recursos de informação não constitui o endosso desses sites ou de seus recursos por parte do "PET FOR YOU”, de seus agentes ou representantes;{"\n"}
                      13.2. A equipe do " PET FOR YOU" não faz representações ou asserções quanto à qualidade, conteúdo e precisão das informações, serviços ou produtos que podem ser fornecidas por esses recursos e especificamente se isenta de quaisquer garantias, incluindo, mas não limitando às garantias implícitas ou expressas de comerciabilidade ou adequação para qualquer utilização particular, aplicação ou finalidade.{"\n"}
                </Text>
            </ScrollView>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

export default DialogTerms;
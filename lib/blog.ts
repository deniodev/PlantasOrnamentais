import type { BlogPost } from "./types";

// Dados de demonstração dos posts do blog
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Dicas Essenciais de Rega para Plantas de Interior",
    slug: "dicas-essenciais-rega-plantas-interior",
    excerpt:
      "Aprenda as melhores práticas para regar suas plantas de interior e mantê-las saudáveis e prósperas.",
    date: "2023-04-01",
    readTime: "5 min de leitura",
    image: "/rega-para-plantas-de-interior.jpg?height=300&width=500",
    author: "Ana Silva",
    authorImage: "/placeholder.svg?height=100&width=100&text=AS",
    tags: ["Plantas de Interior", "Cuidados com Plantas", "Rega"],
    content: `
      <p>A rega é um dos aspectos mais importantes do cuidado com plantas, mas também é uma das fontes mais comuns de problemas. Tanto o excesso quanto a falta de água podem prejudicar suas plantas, por isso encontrar o equilíbrio certo é crucial.</p>
      
      <h2>Sinais de Excesso de Água</h2>
      <p>O excesso de água é, na verdade, uma das formas mais comuns de morte de plantas de interior. Aqui estão alguns sinais de que você pode estar dando água demais às suas plantas:</p>
      <ul>
        <li>Folhas amareladas por toda a planta</li>
        <li>Murchamento apesar do solo úmido</li>
        <li>Raízes marrons, moles ou mofadas (podridão radicular)</li>
        <li>Fungos ou mofo na superfície do solo</li>
        <li>Um cheiro desagradável vindo do solo</li>
      </ul>
      
      <h2>Sinais de Falta de Água</h2>
      <p>Por outro lado, não fornecer água suficiente também pode estressar suas plantas. Procure estes indicadores:</p>
      <ul>
        <li>Bordas ou pontas de folhas secas e crocantes</li>
        <li>Folhas murchas ou caídas</li>
        <li>Crescimento lento ou nenhum crescimento novo</li>
        <li>Solo se afastando das laterais do vaso</li>
        <li>Folhas caindo prematuramente</li>
      </ul>
      
      <h2>Melhores Práticas para Rega</h2>
      <p>Siga estas diretrizes para manter suas plantas adequadamente hidratadas:</p>
      <ol>
        <li><strong>Verifique o solo antes de regar</strong>: Insira seu dedo cerca de 2,5 cm no solo. Se estiver seco nessa profundidade, é hora de regar.</li>
        <li><strong>Regue abundantemente</strong>: Quando regar, faça-o até que a água escorra pelos orifícios de drenagem. Isso garante que todo o torrão de raízes receba umidade.</li>
        <li><strong>Esvazie os pratos de drenagem</strong>: Não deixe suas plantas sentadas em água parada, o que pode levar à podridão das raízes.</li>
        <li><strong>Considere as necessidades da sua planta</strong>: Diferentes plantas têm diferentes requisitos de água. Suculentas e cactos precisam de regas menos frequentes do que plantas tropicais.</li>
        <li><strong>Ajuste para as estações</strong>: A maioria das plantas precisa de menos água no inverno, quando o crescimento diminui.</li>
        <li><strong>Use água em temperatura ambiente</strong>: Água fria pode chocar as raízes das plantas.</li>
        <li><strong>Regue pela manhã</strong>: Isso dá às plantas tempo para absorver a umidade antes das temperaturas mais frias da noite.</li>
      </ol>
      
      <h2>Métodos de Rega</h2>
      <p>Existem várias maneiras eficazes de regar suas plantas:</p>
      <ul>
        <li><strong>Rega superior</strong>: O método mais comum, onde a água é aplicada na superfície do solo.</li>
        <li><strong>Rega inferior</strong>: Coloque o vaso em uma bandeja com água e deixe a planta absorver umidade através dos orifícios de drenagem. Isso estimula o crescimento mais profundo das raízes.</li>
        <li><strong>Sistemas de auto-rega</strong>: Estes podem ajudar a manter níveis consistentes de umidade, especialmente quando você estiver ausente.</li>
      </ul>
      
      <p>Lembre-se, é melhor regar menos do que em excesso. A maioria das plantas pode se recuperar do estresse da seca mais facilmente do que da podridão radicular causada por umidade excessiva.</p>
      
      <p>Prestando atenção às necessidades específicas das suas plantas e às condições ambientais em sua casa, você desenvolverá uma rotina de rega que mantém seu jardim interno próspero.</p>
    `,
  },
  {
    id: "2",
    title: "As Melhores Plantas para Ambientes com Pouca Luz",
    slug: "melhores-plantas-ambientes-pouca-luz",
    excerpt:
      "Descubra plantas bonitas que prosperam em condições de pouca luz, perfeitas para cantos mais escuros da sua casa.",
    date: "2023-03-15",
    readTime: "7 min de leitura",
    image: "/plantas-para-ambiente-com-pouca-luz.jpg?height=300&width=500",
    author: "João Santos",
    authorImage: "/placeholder.svg?height=100&width=100&text=JS",
    tags: ["Pouca Luz", "Plantas de Interior", "Seleção de Plantas"],
    content: `
      <p>Nem toda casa é abençoada com luz natural abundante, mas isso não significa que você não possa desfrutar de belas plantas de interior. Muitas espécies se adaptaram para crescer no sub-bosque sombreado de florestas e podem prosperar nas condições de pouca luz da sua casa.</p>
      
      <h2>Entendendo "Pouca Luz"</h2>
      <p>Antes de mergulharmos nas recomendações de plantas, é importante entender o que "pouca luz" realmente significa:</p>
      <ul>
        <li><strong>Pouca luz</strong>: Uma área que recebe luz indireta, mas ainda é clara o suficiente para ler um livro sem acender uma lâmpada. Janelas voltadas para o norte ou locais a vários metros de distância de janelas leste ou oeste geralmente fornecem pouca luz.</li>
        <li><strong>Sem luz natural</strong>: Áreas sem janelas ou muito distantes de janelas. A maioria das plantas não sobreviverá aqui sem luzes de cultivo suplementares.</li>
      </ul>
      
      <h2>Melhores Plantas Tolerantes a Pouca Luz</h2>
      
      <h3>1. Espada de São Jorge (Sansevieria)</h3>
      <p>Com suas folhas eretas impressionantes e forma arquitetônica, a espada de São Jorge é quase indestrutível. Tolera negligência, pouca luz e ar seco com facilidade.</p>
      
      <h3>2. Zamioculca (Zamioculcas zamiifolia)</h3>
      <p>A zamioculca tem folhas verde-escuras brilhantes e uma aparência distinta. É extremamente tolerante à seca e pode sobreviver em condições de muito pouca luz.</p>
      
      <h3>3. Jiboia (Epipremnum aureum)</h3>
      <p>Esta planta trepadeira com folhas em forma de coração vem em vários padrões e cores. É perfeita para cestas suspensas ou para escalar um suporte de musgo, mesmo em cantos com pouca iluminação.</p>
      
      <h3>4. Lírio da Paz (Spathiphyllum)</h3>
      <p>Uma das poucas plantas floríferas que tolera pouca luz, o lírio da paz produz elegantes flores brancas e tem folhagem verde brilhante.</p>
      
      <h3>5. Aglaonema (Aglaonema)</h3>
      <p>Disponível em vários padrões e cores, estas plantas são extremamente adaptáveis e podem prosperar em condições de pouca luz por anos.</p>
      
      <h2>Dicas de Cuidados para Plantas de Pouca Luz</h2>
      <p>Mesmo que essas plantas tolerem pouca luz, elas ainda precisam de cuidados adequados:</p>
      <ol>
        <li><strong>Evite o excesso de água</strong>: Plantas em ambientes com menos luz geralmente crescem mais lentamente e usam menos água.</li>
        <li><strong>Limpe as folhas regularmente</strong>: Folhas limpas podem absorver melhor a luz limitada disponível.</li>
        <li><strong>Gire as plantas ocasionalmente</strong>: Isso garante que todos os lados recebam exposição igual à luz.</li>
        <li><strong>Fique atento ao crescimento esticado</strong>: Se os caules ficarem alongados e esparsos, a planta pode precisar de mais luz.</li>
        <li><strong>Considere "férias de luz" ocasionais</strong>: Mover plantas para locais mais iluminados por algumas semanas pode ajudar a revitalizá-las.</li>
      </ol>
      
      <p>Lembre-se de que, embora essas plantas possam sobreviver com pouca luz, a maioria crescerá mais vigorosamente e terá melhor aparência com condições um pouco mais brilhantes. No entanto, são excelentes escolhas para aqueles locais desafiadores onde outras plantas falhariam em prosperar.</p>
    `,
  },
  {
    id: "3",
    title: "Como Replantar Suas Plantas: Um Guia Passo a Passo",
    slug: "como-replantar-plantas-guia-passo-a-passo",
    excerpt:
      "Siga nosso guia abrangente para replantar suas plantas com segurança e dar a elas espaço para crescer.",
    date: "2023-02-28",
    readTime: "4 min de leitura",
    image: "/como-replantar-plantas.webp?height=300&width=500",
    author: "Mariana Costa",
    authorImage: "/placeholder.svg?height=100&width=100&text=MC",
    tags: ["Replantio", "Cuidados com Plantas", "Solo"],
    content: `
      <p>O replantio é uma parte essencial do cuidado com plantas que proporciona solo fresco e espaço para crescer. Embora possa parecer intimidador no início, com a abordagem certa, o replantio pode ser um processo simples e gratificante.</p>
      
      <h2>Quando Replantar</h2>
      <p>Como saber quando é hora de replantar? Procure estes sinais:</p>
      <ul>
        <li>Raízes crescendo pelos orifícios de drenagem</li>
        <li>Raízes circulando ao redor do interior do vaso (enoveladas)</li>
        <li>Água passando direto pelo vaso sem ser absorvida</li>
        <li>Crescimento da planta diminuiu ou parou</li>
        <li>A planta está pesada na parte superior e tomba facilmente</li>
        <li>Passaram-se 2-3 anos desde o último replantio</li>
      </ul>
      
      <h2>O Que Você Vai Precisar</h2>
      <ul>
        <li>Um novo vaso 2-5 cm maior em diâmetro que o atual</li>
        <li>Substrato fresco apropriado para o tipo da sua planta</li>
        <li>Pequena pá ou colher</li>
        <li>Tesouras ou podadores (limpos e afiados)</li>
        <li>Luvas (opcional, mas recomendado)</li>
        <li>Regador</li>
        <li>Jornal ou lona para conter a sujeira</li>
      </ul>
      
      <h2>Guia de Replantio Passo a Passo</h2>
      
      <h3>1. Prepare Seus Materiais</h3>
      <p>Reúna todos os suprimentos antes de começar. Se estiver usando um vaso novo, certifique-se de que ele tenha orifícios de drenagem. Se estiver reutilizando um vaso, limpe-o completamente com uma solução de água com água sanitária na proporção de 1:10 para matar quaisquer patógenos.</p>
      
      <h3>2. Remova a Planta do Vaso Atual</h3>
      <p>Regue sua planta um dia antes do replantio para facilitar a remoção. Vire o vaso de lado, segure a planta suavemente pela base e bata no fundo do vaso até que a planta deslize para fora. Se estiver presa, passe uma faca ao redor da borda interna do vaso para soltar o torrão de raízes.</p>
      
      <h3>3. Examine e Prepare as Raízes</h3>
      <p>Solte suavemente as raízes, especialmente se estiverem densamente compactadas ou circulando. Apare quaisquer raízes que sejam excessivamente longas, danificadas ou mortas usando tesouras limpas. Para plantas severamente enoveladas, você pode fazer alguns cortes verticais no torrão de raízes para estimular o crescimento para fora.</p>
      
      <h3>4. Adicione Solo Fresco</h3>
      <p>Coloque uma camada de substrato fresco no fundo do novo vaso. Posicione a planta de modo que o topo do torrão de raízes fique cerca de 2,5 cm abaixo da borda do vaso.</p>
      
      <h3>5. Posicione a Planta e Preencha com Solo</h3>
      <p>Centralize a planta no novo vaso e adicione substrato ao redor das laterais, pressionando suavemente para eliminar bolsas de ar. Deixe espaço suficiente no topo para regar (cerca de 2,5 cm da borda).</p>
      
      <h3>6. Regue Abundantemente</h3>
      <p>Regue até que a água flua pelos orifícios de drenagem para ajudar a assentar o solo e hidratar a planta. Esta rega inicial é crucial para ajudar a planta a se estabelecer em seu novo lar.</p>
      
      <h3>7. Cuidados Posteriores</h3>
      <p>Coloque a planta recém-replantada em um local com luz apropriada, mas fora da luz solar direta por alguns dias. Evite fertilizar por cerca de um mês para permitir que a planta se ajuste e se recupere do estresse do replantio.</p>
      
      <h2>Considerações Especiais</h2>
      <ul>
        <li><strong>Suculentas e cactos</strong> precisam de solo bem drenado e devem ser deixados secos por alguns dias após o replantio.</li>
        <li><strong>Orquídeas</strong> requerem substrato especial para orquídeas em vez de solo comum.</li>
        <li><strong>A primavera</strong> é geralmente a melhor época para replantar a maioria das plantas, pois estão entrando em sua fase de crescimento ativo.</li>
      </ul>
      
      <p>Com estes passos, você dará às suas plantas a renovação de que precisam para continuar crescendo e prosperando sob seus cuidados.</p>
    `,
  },
  {
    id: "4",
    title: "Entendendo Fertilizantes para Plantas: Um Guia para Iniciantes",
    slug: "entendendo-fertilizantes-plantas-guia-iniciantes",
    excerpt:
      "Aprenda sobre diferentes tipos de fertilizantes e como usá-los efetivamente para plantas mais saudáveis.",
    date: "2023-02-15",
    readTime: "6 min de leitura",
    image: "/placeholder.svg?height=300&width=500",
    author: "Rafael Oliveira",
    authorImage: "/placeholder.svg?height=100&width=100&text=RO",
    tags: ["Fertilizante", "Cuidados com Plantas", "Nutrientes"],
    content: `
      <p>Assim como os humanos precisam de uma dieta equilibrada para prosperar, as plantas requerem vários nutrientes para crescer saudáveis e fortes. Embora o substrato forneça alguma nutrição, ele eventualmente se esgota. É aí que os fertilizantes entram – eles repõem nutrientes essenciais e ajudam suas plantas a atingir todo o seu potencial.</p>
      
      <h2>A Proporção NPK: O Que Significa</h2>
      <p>Ao comprar fertilizantes, você notará três números na embalagem (como 10-5-5). Isso representa a proporção NPK:</p>
      <ul>
        <li><strong>N (Nitrogênio)</strong>: Promove o crescimento de folhas e caules</li>
        <li><strong>P (Fósforo)</strong>: Apoia o desenvolvimento de raízes e floração</li>
        <li><strong>K (Potássio)</strong>: Melhora a saúde geral da planta e a resistência a doenças</li>
      </ul>
      <p>Diferentes plantas têm diferentes necessidades nutricionais. Por exemplo, plantas folhosas se beneficiam de mais nitrogênio, enquanto plantas floríferas precisam de mais fósforo.</p>
      
      <h2>Tipos de Fertilizantes</h2>
      
      <h3>Sintéticos vs. Orgânicos</h3>
      <p><strong>Fertilizantes sintéticos</strong> são produtos químicos manufaturados que fornecem nutrientes imediatamente. Eles funcionam rapidamente, mas podem acumular sais no solo ao longo do tempo.</p>
      <p><strong>Fertilizantes orgânicos</strong> são derivados de fontes naturais como composto, farinha de ossos ou emulsão de peixe. Eles liberam nutrientes lentamente à medida que se decompõem e melhoram a estrutura do solo.</p>
      
      <h3>Formas de Fertilizante</h3>
      <ul>
        <li><strong>Fertilizantes líquidos</strong>: De ação rápida e fáceis de aplicar durante a rega regular</li>
        <li><strong>Fertilizantes granulares</strong>: Opções de liberação lenta que são misturadas ao solo</li>
        <li><strong>Espetos ou tabletes de fertilizante</strong>: Doses pré-medidas convenientes que são empurradas para o solo</li>
        <li><strong>Sprays foliares</strong>: Aplicados diretamente nas folhas para absorção rápida de nutrientes</li>
      </ul>
      
      <h2>Como Fertilizar Plantas de Interior</h2>
      
      <h3>Quando Fertilizar</h3>
      <p>A maioria das plantas de interior se beneficia de fertilizante durante sua estação de crescimento ativo (primavera e verão) e precisa de pouco ou nenhum durante a dormência (outono e inverno). Uma boa regra é fertilizar mensalmente durante a estação de crescimento e a cada 6-8 semanas durante o inverno, se for o caso.</p>
      
      <h3>Dicas de Aplicação</h3>
      <ol>
        <li><strong>Sempre siga as instruções da embalagem</strong>. Mais não é melhor – o excesso de fertilizante pode queimar as raízes e danificar as plantas.</li>
        <li><strong>Aplique em solo úmido</strong>. Nunca fertilize uma planta seca, pois isso pode danificar as raízes.</li>
        <li><strong>Dilua fertilizantes líquidos</strong> para metade da força recomendada para plantas de interior.</li>
        <li><strong>Regue abundantemente</strong> após aplicar fertilizantes granulares para ajudar a dissolver e distribuir os nutrientes.</li>
      </ol>
      
      <h2>Sinais de Problemas com Fertilizantes</h2>
      
      <h3>Excesso de Fertilização</h3>
      <ul>
        <li>Pontas ou bordas de folhas marrons</li>
        <li>Murchamento apesar do solo úmido</li>
        <li>Crosta branca na superfície do solo (acúmulo de sal)</li>
        <li>Crescimento atrofiado</li>
      </ul>
      
      <h3>Falta de Fertilização</h3>
      <ul>
        <li>Folhas pálidas, amareladas (especialmente folhas mais velhas)</li>
        <li>Crescimento lento ou atrofiado</li>
        <li>Floração fraca</li>
        <li>Folhas novas pequenas</li>
      </ul>
      
      <h2>Considerações Especiais</h2>
      <ul>
        <li><strong>Plantas recém-replantadas</strong> não precisam de fertilizante por cerca de um mês.</li>
        <li><strong>Cactos e suculentas</strong> precisam de muito menos fertilizante do que plantas tropicais.</li>
        <li><strong>Plantas floríferas</strong> se beneficiam de fertilizantes ricos em fósforo quando os botões estão se formando.</li>
        <li><strong>Lavar o solo</strong> a cada poucos meses ajuda a prevenir o acúmulo de sais dos fertilizantes.</li>
      </ul>
      
      <p>Lembre-se de que o fertilizante é um suplemento, não uma cura para todos os males. Luz, rega e substrato adequados são as bases da saúde das plantas. Quando esses fundamentos estão em ordem, a fertilização apropriada pode ajudar suas plantas a realmente florescerem.</p>
    `,
  },
  {
    id: "5",
    title: "10 Plantas Purificadoras de Ar para uma Casa Mais Saudável",
    slug: "10-plantas-purificadoras-ar-casa-saudavel",
    excerpt:
      "Melhore a qualidade do ar interno com estas belas plantas que filtram naturalmente as toxinas.",
    date: "2023-01-20",
    readTime: "8 min de leitura",
    image: "/placeholder.svg?height=300&width=500",
    author: "Camila Ferreira",
    authorImage: "/placeholder.svg?height=100&width=100&text=CF",
    tags: ["Purificação do Ar", "Plantas de Interior", "Saúde"],
    content: `
      <p>Em nossas casas e escritórios cada vez mais vedados, a qualidade do ar interno tornou-se uma preocupação significativa de saúde. A boa notícia é que certas plantas de interior podem ajudar a purificar o ar removendo toxinas enquanto adicionam beleza ao seu espaço. O Estudo de Ar Limpo da NASA identificou várias plantas que filtram efetivamente poluentes internos comuns como formaldeído, benzeno e tricloroetileno.</p>
      
      <p>Aqui estão 10 excelentes plantas purificadoras de ar para considerar para sua casa:</p>
      
      <h2>1. Espada de São Jorge (Sansevieria trifasciata)</h2>
      <p><strong>Filtra:</strong> Formaldeído, benzeno, xileno, tolueno, tricloroetileno</p>
      <p><strong>Nível de cuidado:</strong> Muito fácil</p>
      <p>Também conhecida como Língua de Sogra, esta planta resistente é quase indestrutível. Prospera em pouca luz e requer rega mínima, tornando-a perfeita para iniciantes. O que a torna especial é sua capacidade de converter CO2 em oxigênio à noite, ao contrário da maioria das plantas que fazem isso durante o dia.</p>
      
      <h2>2. Lírio da Paz (Spathiphyllum)</h2>
      <p><strong>Filtra:</strong> Formaldeído, benzeno, tricloroetileno, amônia, xileno, tolueno</p>
      <p><strong>Nível de cuidado:</strong> Fácil</p>
      <p>Com suas elegantes flores brancas e folhas brilhantes, o lírio da paz é tanto bonito quanto funcional. Prospera em luz baixa a média e ajuda a reduzir esporos de mofo no ar, tornando-o excelente para banheiros.</p>
      
      <h2>3. Samambaia de Boston (Nephrolepis exaltata)</h2>
      <p><strong>Filtra:</strong> Formaldeído, xileno</p>
      <p><strong>Nível de cuidado:</strong> Moderado</p>
      <p>Esta samambaia clássica com frondes plumosas é uma das plantas mais eficazes para remover formaldeído. Prefere ambientes úmidos e luz indireta, tornando-a ideal para banheiros ou cozinhas.</p>
      
      <h2>4. Clorofito (Chlorophytum comosum)</h2>
      <p><strong>Filtra:</strong> Formaldeído, xileno, tolueno</p>
      <p><strong>Nível de cuidado:</strong> Muito fácil</p>
      <p>Com suas folhas arqueadas variegadas e "filhotes", esta planta é tanto decorativa quanto eficaz na limpeza do ar. É não-tóxica para animais de estimação e extremamente adaptável a diferentes condições.</p>
      
      <h2>5. Ficus-elástica (Ficus elastica)</h2>
      <p><strong>Filtra:</strong> Formaldeído</p>
      <p><strong>Nível de cuidado:</strong> Fácil</p>
      <p>Esta planta impressionante com folhas brilhantes e coriáceas é particularmente boa em eliminar formaldeído do ar. Pode crescer bastante, tornando-se uma peça de destaque impressionante que melhora significativamente a qualidade do ar.</p>
      
      <h2>6. Dracena (Dracaena)</h2>
      <p><strong>Filtra:</strong> Formaldeído, benzeno, tricloroetileno, xileno</p>
      <p><strong>Nível de cuidado:</strong> Fácil</p>
      <p>Com mais de 40 variedades, as plantas Dracaena oferecem opções para cada espaço. A Dracaena marginata de bordas vermelhas e a planta-milho (Dracaena fragrans) são purificadores de ar particularmente eficazes.</p>
      
      <h2>7. Babosa (Aloe vera)</h2>
      <p><strong>Filtra:</strong> Formaldeído, benzeno</p>
      <p><strong>Nível de cuidado:</strong> Fácil</p>
      <p>Além de suas habilidades purificadoras de ar, a babosa fornece gel medicinal para queimaduras leves e irritações na pele. Prefere luz brilhante e rega mínima, tornando-a perfeita para peitoris de janelas ensolarados.</p>
      
      <h2>8. Hera Inglesa (Hedera helix)</h2>
      <p><strong>Filtra:</strong> Formaldeído, benzeno, xileno, tolueno</p>
      <p><strong>Nível de cuidado:</strong> Moderado</p>
      <p>Esta planta trepadeira é particularmente eficaz na redução de partículas fecais transportadas pelo ar e tem se mostrado útil na redução de mofo em casa. É ideal para cestas suspensas onde suas vinhas trepadeiras podem cair em cascata.</p>
      
      <h2>9. Aglaonema (Aglaonema)</h2>
      <p><strong>Filtra:</strong> Benzeno, formaldeído</p>
      <p><strong>Nível de cuidado:</strong> Fácil</p>
      <p>Estas plantas atraentes com folhas padronizadas se tornam mais eficientes na remoção de poluentes quanto mais tempo você as tiver. Elas toleram pouca luz, tornando-as versáteis para diferentes espaços em sua casa.</p>
      
      <h2>10. Crisântemo (Chrysanthemum morifolium)</h2>
      <p><strong>Filtra:</strong> Formaldeído, benzeno, amônia, xileno, tolueno</p>
      <p><strong>Nível de cuidado:</strong> Moderado</p>
      <p>Quando em flor, estas flores coloridas são purificadoras de ar poderosas, removendo uma ampla variedade de toxinas. Elas precisam de luz brilhante e rega regular para prosperar em ambientes internos.</p>
      
      <h2>Dicas de Posicionamento para Máximo Benefício</h2>
      <ul>
        <li>Coloque plantas onde você passa mais tempo, como quartos e áreas de estar</li>
        <li>Use plantas em cômodos com muitos materiais sintéticos (móveis novos, carpetes, tinta)</li>
        <li>Para purificação de ar ideal, use 1-2 plantas médias a grandes por 10 metros quadrados</li>
        <li>Garanta uma boa circulação de ar ao redor das plantas</li>
      </ul>
      
      <p>Embora nenhuma planta possa purificar completamente o ar interno sozinha, incorporar vários desses filtros naturais de ar em toda a sua casa pode melhorar significativamente a qualidade do ar. Como benefício adicional, o aumento da umidade e oxigênio fornecido por essas plantas pode ajudar a reduzir problemas respiratórios e criar um ambiente de vida mais confortável.</p>
    `,
  },
  {
    id: "6",
    title: "Guia de Cuidados Sazonais: Preparando Suas Plantas para o Inverno",
    slug: "guia-cuidados-sazonais-preparando-plantas-inverno",
    excerpt:
      "Dicas essenciais para ajudar suas plantas de interior e exterior a sobreviverem e prosperarem durante os meses frios de inverno.",
    date: "2023-01-05",
    readTime: "9 min de leitura",
    image: "/placeholder.svg?height=300&width=500",
    author: "Lucas Mendes",
    authorImage: "/placeholder.svg?height=100&width=100&text=LM",
    tags: ["Cuidados Sazonais", "Inverno", "Proteção de Plantas"],
    content: `
      <p>À medida que as temperaturas caem e as horas de luz do dia diminuem, as plantas entram em uma fase diferente que requer ajustes em sua rotina de cuidados. Seja cuidando de plantas de interior ou perenes de jardim, a preparação adequada para o inverno pode fazer a diferença entre plantas que apenas sobrevivem e aquelas que prosperam quando a primavera retorna.</p>
      
      <h2>Cuidados com Plantas de Interior no Inverno</h2>
      
      <h3>Ajuste os Cronogramas de Rega</h3>
      <p>A maioria das plantas de interior cresce mais lentamente ou fica dormente no inverno, exigindo regas menos frequentes. Antes de regar, verifique se os 2-5 cm superiores do solo estão secos. O excesso de água durante o inverno é uma causa comum de podridão das raízes e morte das plantas.</p>
      
      <h3>Aumente a Umidade</h3>
      <p>Sistemas de aquecimento internos criam ar seco que pode estressar plantas tropicais. Considere estes métodos para aumentar a umidade:</p>
      <ul>
        <li>Agrupe plantas juntas para criar um microclima</li>
        <li>Coloque plantas em bandejas de pedras cheias de água (garantindo que os vasos não fiquem diretamente na água)</li>
        <li>Use um umidificador perto da sua coleção de plantas</li>
        <li>Borrife plantas ocasionalmente (embora isso forneça apenas alívio temporário)</li>
      </ul>
      
      <h3>Forneça Luz Adequada</h3>
      <p>Com dias mais curtos e luz solar menos intensa, muitas plantas precisam ser realocadas para locais mais iluminados durante o inverno:</p>
      <ul>
        <li>Limpe as folhas das plantas para maximizar a absorção de luz</li>
        <li>Mova as plantas para mais perto das janelas, idealmente voltadas para o sul ou oeste</li>
        <li>Gire as plantas regularmente para garantir crescimento uniforme</li>
        <li>Considere luzes de cultivo suplementares para plantas que mostram sinais de privação de luz</li>
      </ul>
      
      <h3>Mantenha Temperatura Apropriada</h3>
      <p>A maioria das plantas de interior prefere temperaturas entre 18-24°C durante o dia e não menos que 10°C à noite. Esteja atento a estas zonas de perigo de temperatura:</p>
      <ul>
        <li>Mantenha as plantas longe de correntes de ar frio perto de portas, janelas ou saídas de ar</li>
        <li>Evite colocar plantas perto de radiadores, aquecedores ou lareiras</li>
        <li>Use cortinas térmicas à noite para isolar janelas</li>
      </ul>
      
      <h3>Suspenda a Fertilização</h3>
      <p>A maioria das plantas não precisa de fertilizante durante a dormência de inverno. Retome a alimentação no final de fevereiro ou início de março, à medida que as horas de luz do dia aumentam e o novo crescimento começa a aparecer.</p>
      
      <h2>Preparação de Plantas Exteriores para o Inverno</h2>
      
      <h3>Limpe os Canteiros de Jardim</h3>
      <p>Remova material vegetal doente, mas considere deixar alguns caules perenes saudáveis e cabeças de sementes em pé—eles proporcionam interesse visual no inverno e habitat para insetos benéficos.</p>
      
      <h3>Aplique Cobertura Vegetal</h3>
      <p>Depois que o solo congelar, aplique 5-7 cm de cobertura vegetal ao redor de perenes, arbustos e árvores jovens. Isso isola as raízes, evita o levantamento por congelamento e reduz a perda de umidade. Materiais adequados incluem:</p>
      <ul>
        <li>Folhas trituradas</li>
        <li>Palha</li>
        <li>Agulhas de pinheiro</li>
        <li>Lascas de casca</li>
      </ul>
      
      <h3>Proteja Plantas em Vasos</h3>
      <p>Perenes em vasos são mais vulneráveis ao congelamento do que aquelas no solo. Opções para proteção incluem:</p>
      <ul>
        <li>Mover vasos para uma garagem ou galpão não aquecido</li>
        <li>Enterrar vasos no solo até suas bordas</li>
        <li>Envolver vasos em plástico bolha ou juta</li>
        <li>Agrupar recipientes juntos contra uma parede abrigada</li>
      </ul>
      
      <h3>Regue Antes de Congelamentos Fortes</h3>
      <p>Certifique-se de que as plantas, especialmente as perenes e espécimes recém-plantados, estejam bem regadas antes que o solo congele. Plantas hidratadas são mais resistentes à dessecação de inverno e danos pelo frio.</p>
      
      <h3>Proteja Plantas Vulneráveis</h3>
      <p>Algumas plantas se beneficiam de proteção adicional:</p>
      <ul>
        <li>Envolva juta ao redor de arbustos perenes para evitar queimaduras de inverno</li>
        <li>Aplique spray anti-dessecante em perenes de folhas largas</li>
        <li>Instale protetores de árvores em árvores jovens para evitar danos por roedores</li>
        <li>Crie barreiras contra o vento para plantas em locais expostos</li>
      </ul>
      
      <p>Com essas preparações, suas plantas estarão bem posicionadas para enfrentar os meses de inverno e emergir saudáveis quando as temperaturas mais quentes retornarem. Lembre-se de que o cuidado de inverno é em grande parte sobre proteção e manutenção, em vez de promover o crescimento ativo—dando às suas plantas o período de descanso que elas naturalmente requerem.</p>
    `,
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRecentBlogPosts(count: number): BlogPost[] {
  // Ordena por data (mais recente primeiro) e pega a quantidade especificada
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((post) =>
    post.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

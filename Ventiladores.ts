export interface FansProps {
    id: number
    helices: number
    potencia: number
    tamanho: number
    valor: number
    modelo: string
    title: string
    marca: string
    tipo: "Mesa" | "Coluna"
    cor: string
    descricao: string
    imagens: string[]
    banner?: string
}

export const Ventiladores: FansProps[] =
    [


        //Arno Mesa
        {
            id: 0,
            helices: 6,
            potencia: 127,
            tamanho: 40,
            valor: 249.99,

            title: "Ventilador de Mesa XForce 40cm Cinza com 3 Velocidades VEPX",
            marca: "Arno",
            tipo: "Mesa",
            modelo: "VEPX",
            cor: "Cinza",
            descricao: "O XForce40 é o mais forte da categoria!Combinação perfeita entre grade, motor e hélice, com 3 velocidades para diferentes necessidades, e uma oscilação horizontal de 80 graus, montagem fácil resumida a 4 cliques e nenhuma ferramenta.Com a garantia da marca número 1 e especialista há mais de 60 anos em ventilação, a linha XForce conta com a máxima tecnologia para levar eficiência, praticidade e economia para o seu dia a dia sempre com muita segurança e durabilidade.Você imagina, clic, a Arno faz.",
            imagens: [
                "../public/images/Ventiladores/Arno/Mesa/VEPX/0.jpg",
                "../public/images/Ventiladores/Arno/Mesa/VEPX/1.jpg",
                "../public/images/Ventiladores/Arno/Mesa/VEPX/2.jpg",
                "../public/images/Ventiladores/Arno/Mesa/VEPX/3.jpg",
                "../public/images/Ventiladores/Arno/Mesa/VEPX/4.jpg",
                "../public/images/Ventiladores/Arno/Mesa/VEPX/5.jpg"
            ],
             banner: "https://lojaarno.vtexassets.com/assets/vtex.file-manager-graphql/images/457805de-b2fd-495c-adef-a67eebff2b8f___d8d5108b86fa551779b81a847fc520c3.png"
        },
        {
            id: 1,
            helices: 6,
            potencia: 126,
            tamanho: 40,
            modelo: "VB40",
            valor: 289.99,

            title: "Ventilador Arno Xtreme Force Breeze Mesa 40cm VB40",
            marca: "Arno",
            tipo: "Mesa",
            cor: "Preto",
            descricao: "Deixe os ambientes da sua casa muito mais agradáveis, refrescantes e silenciosos com o novo Ventilador de Mesa desmontável! 4x Mais silencioso e ainda mais forte que os demais disponíveis no mercado Design sofisticado Totalmente desmontável, possibilitando fácil armazenamento Power Zone: uma área concentrada que garante o máximo de vento direcionado, oferecendo performance superior Função Eco Fresh que economiza até 20% de energia ajudando na redução do consumo e nos gastos com a conta de luz. Garantia da marca número 1 e especialista há mais de 60 anos em ventilação",
            imagens: [
                "../public/images/Ventiladores/Arno/Mesa/VB40/0.jpg",
                "../public/images/Ventiladores/Arno/Mesa/VB40/1.jpg",
                "../public/images/Ventiladores/Arno/Mesa/VB40/2.jpg",
                "../public/images/Ventiladores/Arno/Mesa/VB40/3.jpg",
                "../public/images/Ventiladores/Arno/Mesa/VB40/4.jpg",
                "../public/images/Ventiladores/Arno/Mesa/VB40/5.jpg"
            ], banner: "https://lojaarno.vtexassets.com/assets/vtex.file-manager-graphql/images/457805de-b2fd-495c-adef-a67eebff2b8f___d8d5108b86fa551779b81a847fc520c3.png"
        },

        {
            id: 2,
            helices: 6,
            potencia: 126,
            tamanho: 50,
            modelo: "VB50",
            valor: 349.99,

            title: "Ventilador Arno Xtreme Force Breeze Mesa 50cm VB50",
            marca: "Arno",
            tipo: "Mesa",
            cor: "Preto",
            descricao: "Deixe os ambientes da sua casa muito mais agradáveis, refrescantes e silenciosos com o novo Ventilador de Mesa desmontável! 4x Mais silencioso e ainda mais forte que os demais disponíveis no mercado Design sofisticado Totalmente desmontável, possibilitando fácil armazenamento Power Zone: uma área concentrada que garante o máximo de vento direcionado, oferecendo performance superior Função Eco Fresh que economiza até 20% de energia ajudando na redução do consumo e nos gastos com a conta de luz. Garantia da marca número 1 e especialista há mais de 60 anos em ventilação",
            imagens: [
                "../public/images/Ventiladores/Arno/Mesa/VB50/0.jpg",
                "../public/images/Ventiladores/Arno/Mesa/VB50/1.jpg",
                "../public/images/Ventiladores/Arno/Mesa/VB50/2.jpg",
                "../public/images/Ventiladores/Arno/Mesa/VB50/3.jpg",
                "../public/images/Ventiladores/Arno/Mesa/VB50/4.jpg",
                "../public/images/Ventiladores/Arno/Mesa/VB50/5.jpg"
            ], banner: "https://lojaarno.vtexassets.com/assets/vtex.file-manager-graphql/images/457805de-b2fd-495c-adef-a67eebff2b8f___d8d5108b86fa551779b81a847fc520c3.png"
        },
        {
            id: 3,
            helices: 6,
            potencia: 126,
            tamanho: 40,
            modelo: "VDBT",
            valor: 369.99,

            title: "Ventilador de Mesa Arno Ultra Silence Force Desmontável Bluetooth VDBT",
            marca: "Arno",
            tipo: "Mesa",
            cor: "Preto",
            descricao: "O mais forte e silencioso já feito com uso personalizado via APP. Primeiro com conexão Bluetooth®¹. ¹Primeiro ventilador de mesa com conexão Bluetooth®;",
            imagens: [
                "../public/images/Ventiladores/Arno/Mesa/VDBT/0.jpg",
                "../public/images/Ventiladores/Arno/Mesa/VDBT/1.jpg",
                "../public/images/Ventiladores/Arno/Mesa/VDBT/2.jpg",
                "../public/images/Ventiladores/Arno/Mesa/VDBT/3.jpg",
                "../public/images/Ventiladores/Arno/Mesa/VDBT/4.jpg",

            ], banner: "https://lojaarno.vtexassets.com/assets/vtex.file-manager-graphql/images/457805de-b2fd-495c-adef-a67eebff2b8f___d8d5108b86fa551779b81a847fc520c3.png"
        },
        {
            id: 4,
            helices: 6,
            potencia: 126,
            tamanho: 40,
            modelo: "VB55",
            valor: 349.99,

            title: "Ventilador Arno Xtreme Force Breeze Mesa Repelente 40cm VB55",
            marca: "Arno",
            tipo: "Mesa",
            cor: "Preto",
            descricao: "eixe os ambientes da sua casa muito mais agradáveis, refrescantes, silenciosos e protegidos contra mosquitos com o novo Ventilador de Mesa desmontável da Arno! 4x Mais silencioso e ainda mais forte que os demais disponíveis no mercado Design sofisticado Totalmente desmontável, possibilitando fácil armazenamento Power Zone: uma área concentrada que garante o máximo de vento direcionado, oferecendo performance superior Função Eco Fresh que economiza até 20% de energia ajudando na redução do consumo e nos gastos com a conta de luz. Garantia da marca número 1 e especialista há mais de 60 anos em ventilação",
            imagens: [
                "../public/images/Ventiladores/Arno/Mesa/VB55/0.jpg",
                "../public/images/Ventiladores/Arno/Mesa/VB55/1.jpg",
                "../public/images/Ventiladores/Arno/Mesa/VB55/2.jpg",
                "../public/images/Ventiladores/Arno/Mesa/VB55/3.jpg",
                "../public/images/Ventiladores/Arno/Mesa/VB55/4.jpg",

            ], banner: "https://lojaarno.vtexassets.com/assets/vtex.file-manager-graphql/images/457805de-b2fd-495c-adef-a67eebff2b8f___d8d5108b86fa551779b81a847fc520c3.png"
        },

        // Arno Coluna

        {
            id: 5,
            helices: 6,
            potencia: 126,
            tamanho: 50,
            modelo: "VB52",
            valor: 479.99,

            title: "Ventilador Arno Xtreme Force Breeze Coluna 50cm VB52",
            marca: "Arno",
            tipo: "Coluna",
            cor: "Preto",
            descricao: "Deixe os ambientes da sua casa muito mais agradáveis, refrescantes e silenciosos com o novo Ventilador de Mesa desmontável! 4x Mais silencioso e ainda mais forte que os demais disponíveis no mercado Design sofisticado Totalmente desmontável, possibilitando fácil armazenamento Power Zone: uma área concentrada que garante o máximo de vento direcionado, oferecendo performance superior Função Eco Fresh que economiza até 20% de energia ajudando na redução do consumo e nos gastos com a conta de luz. Garantia da marca número 1 e especialista há mais de 60 anos em ventilação",
            imagens: [
                "../public/images/Ventiladores/Arno/Coluna/VB52/0.jpg",
                "../public/images/Ventiladores/Arno/Coluna/VB52/1.jpg",
                "../public/images/Ventiladores/Arno/Coluna/VB52/2.jpg",
                "../public/images/Ventiladores/Arno/Coluna/VB52/3.jpg",
                "../public/images/Ventiladores/Arno/Coluna/VB52/4.jpg",

            ], banner: "https://lojaarno.vtexassets.com/assets/vtex.file-manager-graphql/images/457805de-b2fd-495c-adef-a67eebff2b8f___d8d5108b86fa551779b81a847fc520c3.png"
        },
        {
            id: 6,
            helices: 6,
            potencia: 126,
            tamanho: 40,
            modelo: "VFC4",
            valor: 319.99,

            title: "Ventilador de Coluna Arno Turbo Force 40cm VFC4",
            marca: "Arno",
            tipo: "Coluna",
            cor: "Preto",
            descricao: "Este produto é perfeito para qualquer tipo de ambiente pois possui 6 pás para um potente fluxo de ar, inclinação acionada por um botão lateral, grades aerodinâmicas e seguras para crianças, e uma oscilação horizontal de 80 graus para uma ótima distribuição de ar. Além disso, apresenta tecnologia Power Zone, uma área concentrada que garante o máximo de vento direcionado, oferecendo performance superior e controle para que você não se preocupe com mais nada e pare de sofrer com o calor.",
            imagens: [
                "../public/images/Ventiladores/Arno/Coluna/VFC4/0.jpg",
                "../public/images/Ventiladores/Arno/Coluna/VFC4/1.jpg",
                "../public/images/Ventiladores/Arno/Coluna/VFC4/2.jpg",
                "../public/images/Ventiladores/Arno/Coluna/VFC4/3.jpg",
                "../public/images/Ventiladores/Arno/Coluna/VFC4/4.jpg",

            ], banner: "https://lojaarno.vtexassets.com/assets/vtex.file-manager-graphql/images/457805de-b2fd-495c-adef-a67eebff2b8f___d8d5108b86fa551779b81a847fc520c3.png"
        },
        {
            id: 8,
            helices: 6,
            potencia: 126,
            tamanho: 40,
            valor: 399.99,
            modelo: "VD5C",
            title: "Ventilador de Coluna Arno Ultra Silence Force Desmontável Repelente 40cm VD5C",
            marca: "Arno",
            tipo: "Coluna",
            cor: "Preto",
            descricao: "Ventilador desmontável de Coluna com Repelente Líquido Arno Ultra Silence Force 40 cm - o MAIS FORTE E SILENCIOSO VENTILADOR JÁ FEITO*. Perfeito para qualquer tipo de ambiente e bastante versátil, que garante proteção para sua família contra insetos, mosquitos da Dengue, Chikungunya e Zika vírus*! O novo ventilador Arno Ultra Silence Force Repelente de Coluna é até 4x mais silencioso e ainda mais forte** Possui 3 velocidades regulares e 3 velocidades com repelente, e 40cm de diâmetro.",
            imagens: [
                "../public/images/Ventiladores/Arno/Coluna/VD5C/0.jpg",
                "../public/images/Ventiladores/Arno/Coluna/VD5C/1.jpg",
                "../public/images/Ventiladores/Arno/Coluna/VD5C/2.jpg",
                "../public/images/Ventiladores/Arno/Coluna/VD5C/3.jpg",
                "../public/images/Ventiladores/Arno/Coluna/VD5C/4.jpg",

            ], banner: "https://lojaarno.vtexassets.com/assets/vtex.file-manager-graphql/images/457805de-b2fd-495c-adef-a67eebff2b8f___d8d5108b86fa551779b81a847fc520c3.png"
        },

        //Britânia Mesa

        {
            id: 9,
            helices: 6,
            potencia: 60,
            tamanho: 30,
            valor: 129.99,
            modelo: "Protect-30-Six",
            title: "Ventilador Britânia Protect 30 Six 60W",
            marca: "Britânia",
            tipo: "Mesa",
            cor: "Vermelho",
            descricao: "O Ventilador Britânia Protect 30 Six 60W vai deixar aqueles dias de extremo calor, muito mais agradáveis.Com três velocidades diferentes: Mínima, média e máxima, seus problemas com o calor estão prestes a acabar. O Ventilador Britânia dispõe de uma hélice com 6 pás e diâmetro de 30cm, o que garante um desempenho excelente.Além disso, suas grades são plásticas removíveis, assim você consegue garantir que seu ventilador esteja sempre limpinho. Ele também possui a opção de inclinação vertical regulável para um melhor direcionamento do fluxo de ar.Muita praticidade para você, pois ele é facilmente ajustado em qualquer ambiente, sendo ideal para uso como Ventilador de chão, Ventilador de mesa ou parede. Você escolhe!Seu sistema de fusível térmico de segurança é mais um dos diferenciais do produto, pois essa função garante maior segurança e durabilidade para seu aparelho. Deste modo você vai ter o seu queridinho ao seu lado por muito tempo.Você não pode ficar de fora! Adquira já o seu Ventilador Britânia Protect e garanta que seus dias calorosos agora serão bem fresquinhos!",
            imagens: [
                "../public/images/Ventiladores/Britania/Mesa/Protect/0.png",
                "../public/images/Ventiladores/Britania/Mesa/Protect/1.png",
                "../public/images/Ventiladores/Britania/Mesa/Protect/2.png",
                "../public/images/Ventiladores/Britania/Mesa/Protect/3.png",
                "../public/images/Ventiladores/Britania/Mesa/Protect/4.png",

            ], banner: "http://philco.vteximg.com.br/arquivos/Topo%20Pg_nova%20medida.jpg"
        },

        {
            id: 10,
            helices: 10,
            potencia: 165,
            tamanho: 47,

            valor: 229.99,
            modelo: "BVT495PA",
            title: "Ventilador Britânia BVT495PA Super Ventus 10 Turbo 10 Pás",
            marca: "Britânia",
            tipo: "Mesa",
            cor: "Preto / Branco",
            descricao: "Ventilador Britânia BVT495PA Super Ventus 10 Turbo é moderno e muito eficiente, com 10 pás de tamanhos diferentes e intercaladas para que possa ventilar muito mais com menor barulho.São 10 Pás que produzem muito vento para refrescar o ambiente todo e deixar uma sensação muito mais confortável nesse verão. Tudo isso graças à Tecnologia Maxx Force 10 com hélice que garante um ventilador com excelente desempenho.São 3 velocidades para escolher a que melhor te atende: Suave, Moderada e Intenso. E sistema oscilante que permite ampla distribuição do ar no ambiente. São 3 opções de oscilação na vertical e oscilação horizontal automática. E inclinação vertical regulável para melhor direcionamento do fluxo de ar.",
            imagens: [
                "../public/images/Ventiladores/Britania/Mesa/BVT495PA/0.png",
                "../public/images/Ventiladores/Britania/Mesa/BVT495PA/1.png",
                "../public/images/Ventiladores/Britania/Mesa/BVT495PA/2.png",
                "../public/images/Ventiladores/Britania/Mesa/BVT495PA/3.png",
                "../public/images/Ventiladores/Britania/Mesa/BVT495PA/4.png",

            ], banner: "http://philco.vteximg.com.br/arquivos/Topo%20Pg_nova%20medida.jpg"
        },
        {
            id: 11,
            helices: 6,
            potencia: 160,
            tamanho: 47,

            valor: 249.99,
            modelo: "BVT410G",
            title: "Ventilador Britânia Turbo BVT410G",
            marca: "Britânia",
            tipo: "Mesa",
            cor: "Preto e Dourado",
            descricao: "Não sofra no calor do verão! O Ventilador Britânia BVT410G Turbo possui um visual elegante combinado com 160W de potência e 3 velocidades diferentes para refrescar no calor.O Ventilador Britânia conta com oscilação na horizontal e de inclinação vertical, com grande poder de ventilação graças as 6 pás de grade de 47 cm.Super silencioso, você vai aproveitar os melhores momentos sem se preocupar com o barulho do Ventilador. Paz, tranquilidade e ar fresco é com o Ventilador Britânia BVT410G.",
            imagens: [
                "../public/images/Ventiladores/Britania/Mesa/BVT410G/0.png",
                "../public/images/Ventiladores/Britania/Mesa/BVT410G/1.png",
                "../public/images/Ventiladores/Britania/Mesa/BVT410G/2.png",
                "../public/images/Ventiladores/Britania/Mesa/BVT410G/3.png",
                "../public/images/Ventiladores/Britania/Mesa/BVT410G/4.png",
                "../public/images/Ventiladores/Britania/Mesa/BVT410G/5.png",

            ], banner: "http://philco.vteximg.com.br/arquivos/Topo%20Pg_nova%20medida.jpg"
        },
        {
            id: 12,
            helices: 6,
            potencia: 160,
            tamanho: 40,

            valor: 189.99,
            modelo: " BVT405",
            title: "Ventilador Britânia Super Turbo BVT405",
            marca: "Britânia",
            tipo: "Mesa",
            cor: "Preto ",
            descricao: "O clima de qualquer ambiente fica muito mais agradável com o Ventilador Britânia Super Turbo BVT405.Sua hélice de 6 pás com diâmetro de 40cm garante um excelente desempenho de ventilação, além do sistema oscilante automático que permite ampla distribuição do ar no ambiente. O Ventilador Britânia conta com 3 velocidades, você escolhe! Mínima, média e máxima.E não para por aí! Seu porta fio e sua alça para transporte garantem fácil manuseio e acondicionamento. Ele pode ser utilizado tanto como ventilador de mesa quanto de chão. Adeque as suas necessidades!Não passe apuros com o calor, desfrute de um ambiente fresquinho com o Ventilador Britânia Super Turbo BVT405!",
            imagens: [
                "../public/images/Ventiladores/Britania/Mesa/BVT405/0.png",
                "../public/images/Ventiladores/Britania/Mesa/BVT405/1.png",
                "../public/images/Ventiladores/Britania/Mesa/BVT405/2.png",
                "../public/images/Ventiladores/Britania/Mesa/BVT405/3.png",
                "../public/images/Ventiladores/Britania/Mesa/BVT405/4.png",
            ], banner: "http://philco.vteximg.com.br/arquivos/Topo%20Pg_nova%20medida.jpg"
        },

        // Britânia Coluna

        {
            id: 13,
            helices: 6,
            potencia: 160,
            tamanho: 40,
            valor: 279.99,
            modelo: "BVC450",
            title: "Ventilador Britânia Coluna Turbo BVC450 160W",
            marca: "Britânia",
            tipo: "Coluna",
            cor: "Preto ",
            descricao: "O clima de qualquer ambiente fica muito mais agradável com o Ventilador Britânia Super Turbo BVT405.Sua hélice de 6 pás com diâmetro de 40cm garante um excelente desempenho de ventilação, além do sistema oscilante automático que permite ampla distribuição do ar no ambiente. O Ventilador Britânia conta com 3 velocidades, você escolhe! Mínima, média e máxima.E não para por aí! Seu porta fio e sua alça para transporte garantem fácil manuseio e acondicionamento. Ele pode ser utilizado tanto como ventilador de mesa quanto de chão. Adeque as suas necessidades!Não passe apuros com o calor, desfrute de um ambiente fresquinho com o Ventilador Britânia Super Turbo BVT405!",
            imagens: [
                "../public/images/Ventiladores/Britania/Coluna/BVC450/0.jpg",
                "../public/images/Ventiladores/Britania/Coluna/BVC450/1.jpg",
                "../public/images/Ventiladores/Britania/Coluna/BVC450/2.jpg",
                "../public/images/Ventiladores/Britania/Coluna/BVC450/3.jpg",
                "../public/images/Ventiladores/Britania/Coluna/BVC450/4.jpg",
            ], banner: "http://philco.vteximg.com.br/arquivos/Topo%20Pg_nova%20medida.jpg"
        },

        {
            id: 14,
            helices: 8,
            potencia: 205,
            tamanho: 50,
            valor: 349.90,
            modelo: "BVC680CM",
            title: "Ventilador Vertical Britânia BVC680CM Coluna Telescópica 8 Pás",
            marca: "Britânia",
            tipo: "Coluna",
            cor: "Preto ",
            descricao: "Está cansado de passar calor? Então o Ventilador Vertical Britânia BVC680CM Coluna Telescópica 8 Pás vieram para espantá-lo para longe de você!Ele conta com hélice com 8 pás e 3 velocidades, que não darão lugar para o ar quente ficar, além da coluna telescópica com altura ajustável, assim você poderá ajustar o ventilador na altura perfeita para acabar com seu calor.Sua grade é metálica e removível, o que torna muito prático manter o Ventilador higienizado. Além disso, seu sistema oscilante permite uma ampla distribuição do ar no ambiente.Conte com a máxima performance do Ventilador Vertical Britânia BVC680CM, seus dias mais agradáveis e seu ambiente mais fresquinho!",
            imagens: [
                "../public/images/Ventiladores/Britania/Coluna/BVC680CM/0.jpg",
                "../public/images/Ventiladores/Britania/Coluna/BVC680CM/1.jpg",
                "../public/images/Ventiladores/Britania/Coluna/BVC680CM/2.jpg",
                "../public/images/Ventiladores/Britania/Coluna/BVC680CM/3.jpg",
                "../public/images/Ventiladores/Britania/Coluna/BVC680CM/4.jpg",
                "../public/images/Ventiladores/Britania/Coluna/BVC680CM/5.jpg",
            ], banner: "http://philco.vteximg.com.br/arquivos/Topo%20Pg_nova%20medida.jpg"
        },

        {
            id: 15,
            helices: 6,
            potencia: 75,
            tamanho: 30,
            valor: 199.99,
            modelo: "Turbo-30",
            title: "Ventilador de Coluna Britânia Mega  Six 75W",
            marca: "Britânia",
            tipo: "Coluna",
            cor: "Preto ",
            descricao: "Naqueles dias de calor intenso, nada melhor do que entrar em um ambiente fresquinho. E para isso, você pode contar com o Ventilador de Coluna Britânia Mega Turbo 30 Six 75W!Conta com hélice com 6 pás e 3 velocidades que não darão lugar para o ar quente ficar. A sua coluna telescópica possui altura ajustável de até 14 cm, você poderá ajustar o ventilador na altura perfeita para acabar com seu calor.Possui também oscilação horizontal automática e inclinação vertical regulável, permitindo ampla distribuição do ar.E para sua maior segurança e a durabilidade do Ventilador, ele conta com fusível térmico de segurança e grade plástica removível, ficando muito fácil mantê-lo limpinho.Além disso, o Ventilador de Coluna Britânia conta com baixo nível de ruído, trazendo muito mais comodidade para você.E para quem quer economizar, isso não será um problema, pois esse ventilador possui baixo consumo de energia elétrica. Performance e economia no mesmo produto!Seus dias passando calor acabaram, adquira já o Ventilador de Coluna Britânia Mega Turbo 30 Six 75W!",
            imagens: [
                "../public/images/Ventiladores/Britania/Coluna/Turbo30/0.png",
                "../public/images/Ventiladores/Britania/Coluna/Turbo30/1.png",
                "../public/images/Ventiladores/Britania/Coluna/Turbo30/2.png",
                "../public/images/Ventiladores/Britania/Coluna/Turbo30/3.png",
                "../public/images/Ventiladores/Britania/Coluna/Turbo30/4.png",
                "../public/images/Ventiladores/Britania/Coluna/Turbo30/5.png",
            ], banner: "http://philco.vteximg.com.br/arquivos/Topo%20Pg_nova%20medida.jpg"
        },

        {
            id: 16,
            helices: 6,
            potencia: 160,
            tamanho: 45,
            valor: 359.99,
            modelo: "BVC550P",
            title: "Ventilador de Coluna Britânia BVC550P Maxx Force Turbo",
            marca: "Britânia",
            tipo: "Coluna",
            cor: "Preto ",
            descricao: "Passe o verão da melhor forma com o Ventilador de Coluna Britânia BVC550P Maxx Force Turbo. Ele conta com tecnologia Maxx Force para aumentar o poder de frescor no ambiente, além de ser um ventilador super silencioso para não atrapalhar conversas na sala ou o sono na hora de dormir.O Ventilador de Coluna Britânia, possibilita o máximo frescor no ambiente devido aos seus 160W de potência.Experencie dormir tranquilamente com um ventilador super silencioso. Tudo isso sem deixar a performance de lado, graças ao seu grande desempenho de ventilação, pois o Ventilador Britânia conta com a incrível tecnologia Maxx Force.Além disso tudo, o seu sistema oscilante vertical e horizontal, permite o maior direcionamento do fluxo de ar.E para a sua maior segurança e a durabilidade do Ventilador, a sua grade de proteção é removível, foi desenvolvida de acordo com as normas internacionais de segurança.Seus dias mais fresquinhos e seus ambientes mais agradáveis! Conte com a potência do Ventilador de Coluna Britânia BVC550P Maxx Force Turbo.",
            imagens: [
                "../public/images/Ventiladores/Britania/Coluna/BVC550P/0.jpg",
                "../public/images/Ventiladores/Britania/Coluna/BVC550P/1.jpg",
                "../public/images/Ventiladores/Britania/Coluna/BVC550P/2.jpg",
                "../public/images/Ventiladores/Britania/Coluna/BVC550P/3.jpg",
                "../public/images/Ventiladores/Britania/Coluna/BVC550P/4.jpg",
                "../public/images/Ventiladores/Britania/Coluna/BVC550P/5.jpg",
            ], banner: "http://philco.vteximg.com.br/arquivos/Topo%20Pg_nova%20medida.jpg"
        },


        // Mallory Mesa

        {
            id: 17,
            helices: 15,
            potencia: 140,
            tamanho: 40,
            valor: 200.20,
            modelo: "BVT405",
            title: "Ventilador Britânia Super Turbo BVT405",
            marca: "Mallory",
            tipo: "Mesa",
            cor: "Preto  e Azul",
            descricao: "",
            imagens: [
                "../public/images/Ventiladores/Mallory/Mesa/AirCareR/0.png",
                "../public/images/Ventiladores/Mallory/Mesa/AirCareR/1.png",
                "../public/images/Ventiladores/Mallory/Mesa/AirCareR/2.png",
                "../public/images/Ventiladores/Mallory/Mesa/AirCareR/3.png",
                "../public/images/Ventiladores/Mallory/Mesa/AirCareR/4.png",

            ], banner: "https://mallorygroup.vteximg.com.br/arquivos/ids/158888/banner-site-mallory.png?v=637952322507330000"
        },
        {
            id: 18,
            helices: 15,
            potencia: 140,
            tamanho: 40,
            valor: 324.89,
            modelo: "MaxControl",
            title: "Ventilador Mallory Max Control Preto Laranja com Controle 40 cm",
            marca: "Mallory",
            tipo: "Mesa",
            descricao: "Controle total na palma da sua mão!Além de ligar e desligar por controle remoto, o Ventilador de Mesa NEO AIR MAX TOTAL CONTROL possui o sistema Smart swing, que controla a velocidade de oscilação, independente da velocidade desejada no ventilador. Ou seja, você pode regular a intensidade e velocidade sem nem precisar sair do lugar.O único do mercado com exclusiva hélice 15 pás, ele possui uma potência de 140W, que garante maior eficiência. Conta ainda inclinação vertical, grade removível com novos clicks para fácil limpeza. Possui eficiência energética de categoria A nas 3 velocidades, o que gera mais economia na conta de energia, mesmo aproveitando ventos fortes.",
            cor: "Preto  e Laranja",
            imagens: [
                "../public/images/Ventiladores/Mallory/Mesa/MaxControl/0.png",
                "../public/images/Ventiladores/Mallory/Mesa/MaxControl/1.png",
                "../public/images/Ventiladores/Mallory/Mesa/MaxControl/2.png",
                "../public/images/Ventiladores/Mallory/Mesa/MaxControl/3.png",
                "../public/images/Ventiladores/Mallory/Mesa/MaxControl/4.png",
                "../public/images/Ventiladores/Mallory/Mesa/MaxControl/5.png",

            ], banner: "https://mallorygroup.vteximg.com.br/arquivos/ids/158888/banner-site-mallory.png?v=637952322507330000"
        },

        {
            id: 19,
            helices: 6,
            potencia: 140,
            tamanho: 40,
            valor: 227.99,
            modelo: "Ozonic",
            title: "Ventilador Mallory Ozonic TS 40 cm",
            marca: "Mallory",
            tipo: "Mesa",
            descricao: "Conforto, inovação e proteção! Além de ventilar o seu ambiente, O OZONIC TS auxilia no combate a vírus, fungos e bactérias. O seu exclusivo gerador de ozônio também repele os mosquitos sem o uso de química ou refil. Com o ventilador OZONIC TS, seu uso de repelente diminuirá bastante! Essa tecnologia exclusiva Mallory conta com uma potência de 126W, grade em sistema especial TS e hélice de 6 pás. Ainda possui eficiência energética A nas 3 velocidades, o que gera mais economia na conta de energia, mesmo aproveitando ventos fortes. O seu lar pode ficar mais ventilado e sua família mais protegida. Compre agora! CARACTERÍSTICAS • Potência 126W • Repele os mosquitos sem produtos químicos ou refil • Purifica o ar • Grade especial em sistema TS, máxima vazão e mínimo ruído • Silencioso • Hélice de 6 pás • Oscilação horizontal • Inclinação vertical • Alça para transporte • Vazão: 1,40m3/s",
            cor: "Preto  e Laranja",
            imagens: [
                "../public/images/Ventiladores/Mallory/Mesa/Ozonic/0.png",
                "../public/images/Ventiladores/Mallory/Mesa/Ozonic/1.png",
                "../public/images/Ventiladores/Mallory/Mesa/Ozonic/2.png",
                "../public/images/Ventiladores/Mallory/Mesa/Ozonic/3.png",
                "../public/images/Ventiladores/Mallory/Mesa/Ozonic/4.png",
                "../public/images/Ventiladores/Mallory/Mesa/Ozonic/5.png",

            ], banner: "https://mallorygroup.vteximg.com.br/arquivos/ids/158888/banner-site-mallory.png?v=637952322507330000"
        },
        {
            id: 20,
            helices: 15,
            potencia: 140,
            tamanho: 40,
            valor: 275.49,
            modelo: "Neo-Air-TS",
            title: "Ventilador Mallory Neo Air TS Dourado 40 cm",
            marca: "Mallory",
            tipo: "Mesa",
            cor: "Preto  e Dourado",
            descricao: "O Ventilador de Mesa Neo Air 15 oferece modernidade, praticidade, design e com potência de 140W.Grade em sistema especial TS e inovadora hélice de 15 pás.Possui eficiência energética nas 3 velocidades gerando maior economia.Conta com um novo botão de acionamento da oscilação horizontal proporcionando maior praticidade, inclinação vertical e grade removível para limpeza.A nova linha de ventiladores Mallory de 40cm oferece grande fluxo de ar, com um funcionamento muito silencioso.",
            imagens: [
                "../public/images/Ventiladores/Mallory/Mesa/NeoAirTS/0.png",
                "../public/images/Ventiladores/Mallory/Mesa/NeoAirTS/1.png",
                "../public/images/Ventiladores/Mallory/Mesa/NeoAirTS/2.png",
                "../public/images/Ventiladores/Mallory/Mesa/NeoAirTS/3.png",
                "../public/images/Ventiladores/Mallory/Mesa/NeoAirTS/4.png",
                "../public/images/Ventiladores/Mallory/Mesa/NeoAirTS/5.png",

            ], banner: "https://mallorygroup.vteximg.com.br/arquivos/ids/158888/banner-site-mallory.png?v=637952322507330000"
        },


        // Mallory Coluna

        {
            id: 21,
            helices: 15,
            potencia: 140,
            tamanho: 40,
            valor: 399.99,
            modelo: "NeoAirPlus",
            title: "Ventilador Mallory Neo Air Plus Grafite com Controle 40 cm",
            marca: "Mallory",
            tipo: "Coluna",
            cor: "Preto  e Prata",
            descricao: "O Ventilador de Coluna NEO AIR Air plus oferece o conforto e a praticidade de seu controle remoto.O único do mercado com exclusiva hélice 15 pás, além da função timer e velocidades para sua comodidade.Com Potência de 140W, grade em sistema especial TS.Possui eficiência energética nas 3 velocidades gerando maior economia.Conta ainda inclinação vertical, grade removível com novos clicks para fácil limpeza.A nova linha de ventiladores Mallory de 40cm oferece grande fluxo de ar, com um funcionamento muito silencioso.",
            imagens: [
                "../public/images/Ventiladores/Mallory/Coluna/NeoAirPlus/0.png",
                "../public/images/Ventiladores/Mallory/Coluna/NeoAirPlus/1.png",
                "../public/images/Ventiladores/Mallory/Coluna/NeoAirPlus/2.png",
                "../public/images/Ventiladores/Mallory/Coluna/NeoAirPlus/3.png",
                "../public/images/Ventiladores/Mallory/Coluna/NeoAirPlus/4.png",
                "../public/images/Ventiladores/Mallory/Coluna/NeoAirPlus/5.png",

            ], banner: "https://mallorygroup.vteximg.com.br/arquivos/ids/158888/banner-site-mallory.png?v=637952322507330000"
        }, {
            id: 22,
            helices: 6,
            potencia: 126,
            tamanho: 40,
            valor: 341.99,
            modelo: "NeoAirPlusDourado",

            title: "Ventilador Mallory Air Timer TS+ Preto Dourado com Controle 40 cm",
            marca: "Mallory",
            tipo: "Coluna",
            cor: "Preto  e Prata",
            descricao: "O Ventilador de Coluna NEO AIR Air plus oferece o conforto e a praticidade de seu controle remoto.O único do mercado com exclusiva hélice 15 pás, além da função timer e velocidades para sua comodidade.Com Potência de 140W, grade em sistema especial TS.Possui eficiência energética nas 3 velocidades gerando maior economia.Conta ainda inclinação vertical, grade removível com novos clicks para fácil limpeza.A nova linha de ventiladores Mallory de 40cm oferece grande fluxo de ar, com um funcionamento muito silencioso.",
            imagens: [
                "../public/images/Ventiladores/Mallory/Coluna/NeoAirPlusDourado/0.jpg",
                "../public/images/Ventiladores/Mallory/Coluna/NeoAirPlusDourado/1.jpg",
                "../public/images/Ventiladores/Mallory/Coluna/NeoAirPlusDourado/2.jpg",
                "../public/images/Ventiladores/Mallory/Coluna/NeoAirPlusDourado/3.jpg",
                "../public/images/Ventiladores/Mallory/Coluna/NeoAirPlusDourado/4.jpg",
                "../public/images/Ventiladores/Mallory/Coluna/NeoAirPlusDourado/5.jpg",

            ], banner: "https://mallorygroup.vteximg.com.br/arquivos/ids/158888/banner-site-mallory.png?v=637952322507330000"
        },

        {
            id: 23,
            helices: 15,
            potencia: 140,
            tamanho: 40,
            valor: 299.99,
            modelo: "NeoAirPlusAzul",

            title: "Ventilador Mallory Neo Air Plus Azul 40 cm",
            marca: "Mallory",
            tipo: "Coluna",
            cor: "Preto  e Azul",
            descricao: "O Ventilador de Coluna NEO AIR Air plus oferece o conforto e a praticidade de seu controle remoto.O único do mercado com exclusiva hélice 15 pás, além da função timer e velocidades para sua comodidade.Com Potência de 140W, grade em sistema especial TS.Possui eficiência energética nas 3 velocidades gerando maior economia.Conta ainda inclinação vertical, grade removível com novos clicks para fácil limpeza.A nova linha de ventiladores Mallory de 40cm oferece grande fluxo de ar, com um funcionamento muito silencioso.",
            imagens: [
                "../public/images/Ventiladores/Mallory/Coluna/NeoAirPlusAzul/0.jpg",
                "../public/images/Ventiladores/Mallory/Coluna/NeoAirPlusAzul/1.jpg",
                "../public/images/Ventiladores/Mallory/Coluna/NeoAirPlusAzul/2.jpg",
                "../public/images/Ventiladores/Mallory/Coluna/NeoAirPlusAzul/3.jpg",
                "../public/images/Ventiladores/Mallory/Coluna/NeoAirPlusAzul/4.jpg",
                "../public/images/Ventiladores/Mallory/Coluna/NeoAirPlusAzul/5.jpg",

            ], banner: "https://mallorygroup.vteximg.com.br/arquivos/ids/158888/banner-site-mallory.png?v=637952322507330000"
        },

        {
            id: 24,
            helices: 6,
            potencia: 126,
            tamanho: 40,
            valor: 341.99,
            modelo: "AirTimerGrafite",

            title: "Ventilador Mallory Air Timer TS+ Preto Grafite com Controle 40 cm",
            marca: "Mallory",
            tipo: "Coluna",
            cor: "Cinza ",
            descricao: "O ventilador Air Timer TS de coluna 40cm é perfeito para quem valoriza eficiência, conforto e beleza.Ele possui controle remoto e tem programação de desligamento automático, tudo para garantir mais praticidade para sua vida.Com potência de 126W, grade em sistema especial TS e hélice de 6 pás, ele garante uma melhor distribuição de ar, sem atrapalhar o seu sono ou concentração, pois seu funcionamento é bem silencioso.Suas cores e design exclusivos valorizam qualquer ambiente!Possui eficiência energética de categoria A nas 3 velocidades, o que gera mais economia na conta de energia, mesmo aproveitando ventos fortes.Tem ajuste de altura, oscilação horizontal, inclinação vertical e grade removível para limpeza.",
            imagens: [
                "../public/images/Ventiladores/Mallory/Coluna/AirTimerGrafite/0.jpg",
                "../public/images/Ventiladores/Mallory/Coluna/AirTimerGrafite/1.jpg",
                "../public/images/Ventiladores/Mallory/Coluna/AirTimerGrafite/2.jpg",
                "../public/images/Ventiladores/Mallory/Coluna/AirTimerGrafite/3.jpg",
                "../public/images/Ventiladores/Mallory/Coluna/AirTimerGrafite/4.jpg",


            ], banner: "https://mallorygroup.vteximg.com.br/arquivos/ids/158888/banner-site-mallory.png?v=637952322507330000"
        },



    ]


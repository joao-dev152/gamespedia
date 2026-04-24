let dados = [
    // Gêneros de Jogos
    {
        título : "jogos de rpg",
        descrição : "jogos de rpg (role-playing-game) transportam os jogadores para mundos imaginários, onde eles assumem o papel de personagens únicos com habilidades e histórias próprias.",
        link_Ex : "https://gx.games/pt-br/games/erq81p/grandia-rpg-clicker/jogos",
        tags : "rpg role playing game interpretação"
    },
    {
        título : "top down racing",
        descrição : "jogos de corrida top-down 2D nos transportam para uma era de pixel art e jogabilidade simples, mas viciante.",
        link_Ex : "https://gx.games/pt-br/games/b79jdi/the-race-factory-gx-edition/",
        tags : "corrida top down visão do topo visao do topo"
    },
    {
        título: "plataforma",
        descrição: "Jogos de plataforma desafiam os jogadores a guiar um personagem através de níveis repletos de obstáculos, pulando e evitando perigos.",
        link_Ex: "https://overboundn.itch.io/sonic-time-twisted",
        tags: "plataforma jump and run mario sonic pulo"
    },
    {
        título: "aventura",
        descrição: "Jogos de aventura oferecem uma narrativa rica, explorando mundos fantásticos e permitindo que o jogador tome decisões que afetam o desenrolar da história.",
        link_Ex: "https://konkord895.itch.io/kings-and-pigs",
        tags: "aventura história mundo aberto exploração"
    },
    {
        título: "puzzle",
        descrição: "Jogos de puzzle desafiam a mente do jogador com quebra-cabeças que exigem lógica e criatividade para serem resolvidos.",
        link_Ex: "https://sleepingpandagames.itch.io/flexible-frosty",
        tags: "puzzle enigma desafio lógica raciocínio"
    },
    {
        título: "fps - tiro em primeira pessoa",
        descrição: "Jogos de tiro em primeira pessoa focam no combate com armas através da perspectiva do protagonista, priorizando reflexos e precisão.",
        link_Ex: "https://krunker.io/",
        tags: "tiro fps shooter combate primeira pessoa"
    },
    {
        título: "horror / terror",
        descrição: "Jogos focados em causar medo e tensão no jogador, utilizando atmosfera, sustos (jump scares) ou elementos psicológicos.",
        link_Ex: "https://dreadxp.itch.io/the-mortuary-assistant",
        tags: "terror horror medo susto assustador"
    },
    {
        título: "moba",
        descrição: "Arena de Batalha Online Multijogador, onde equipes de jogadores controlam heróis únicos para destruir a base adversária.",
        link_Ex: "https://www.leagueoflegends.com/",
        tags: "moba estratégia equipe competitivo lol dota"
    },
    {
        título: "metroidvania",
        descrição: "Um subgênero de ação e aventura que foca em um grande mapa interconectado que exige novas habilidades para acessar áreas anteriormente bloqueadas.",
        link_Ex: "https://teamcherry.com.au/hollowknight/",
        tags: "metroidvania exploração progressão mapa plataforma"
    },

    // Motores de Jogo (Engines)
    {
        título: "godot",
        descrição: "godot engine é um motor de jogo lançado em 2014 com uma comunidade crescente que é muito prática de se aprender com suporte para c# e gdscript.",
        link_Ex: "https://godotengine.org/",
        tags: "godot 3d e 2d open source gdscript"
    },
    {
        título: "gamemaker",
        descrição: "gamemaker engine é um motor de jogo focado principalmente em 2D, com suporte para GML em código ou programação visual.",
        link_Ex: "https://gamemaker.io/pt-BR",
        tags: "gamemaker 2d gml indie"
    },
    {
        título: "unity",
        descrição: "unity é o motor de jogo com a maior comunidade, extremamente versátil para projetos mobile, PC e consoles com suporte para c#.",
        link_Ex: "https://unity.com/pt",
        tags: "unity 2d 3d mobile multi plataforma"
    },
    {
        título: "unreal",
        descrição: "unreal engine é líder em gráficos fotorrealistas e produções AAA, usando C++ e o sistema visual de Blueprints.",
        link_Ex: "https://www.unrealengine.com/pt-BR",
        tags: "unreal engine 3d gráficos avançados blueprints"
    },
    {
        título: "construct 3",
        descrição: "construct 3 é um motor de jogo baseado no navegador que usa programação visual por eventos, ideal para iniciantes.",
        link_Ex: "https://www.construct.net/en",
        tags: "construct 3 2d programação visual eventos sem código"
    },
    {
        título: "rpg maker",
        descrição: "Uma engine especializada na criação de JRPGs clássicos, permitindo criar jogos complexos com pouca ou nenhuma programação.",
        link_Ex: "https://www.rpgmakerweb.com/",
        tags: "rpg maker engine jrpg desenvolvimento simples"
    },
    {
        título: "bevy",
        descrição: "Uma engine focada em dados escrita em Rust, voltada para desenvolvedores que buscam alta performance e uma arquitetura moderna (ECS).",
        link_Ex: "https://bevyengine.org/",
        tags: "bevy rust ecs alta performance motor"
    },
    // Objeto representando a franquia The Legend of Zelda
    {
        título: "the legend of zelda",
        descrição: "Uma das franquias mais influentes da Nintendo, focada em exploração, puzzles e ação em um mundo fantástico chamado Hyrule.",
        link_Ex: "https://www.zelda.com/",
        tags: "zelda link nintendo aventura rpg clássico"
    },
    // Objeto representando a franquia Resident Evil
    {
        título: "resident evil",
        descrição: "A série que popularizou o gênero Survival Horror, misturando gerenciamento de recursos, combate contra zumbis e conspirações biológicas.",
        link_Ex: "https://www.residentevil.com/",
        tags: "resident evil horror terror survival capcom zumbis"
    },
    // Objeto representando a franquia Minecraft
    {
        título: "minecraft",
        descrição: "Um jogo de sandbox e sobrevivência que permite aos jogadores construir mundos inteiros usando blocos em um ambiente infinito.",
        link_Ex: "https://www.minecraft.net/",
        tags: "minecraft sandbox sobrevivência construção blocos"
    },
    // Objeto representando a franquia Final Fantasy
    {
        título: "final fantasy",
        descrição: "Uma lendária série de RPGs japoneses (JRPG) conhecida por suas narrativas épicas, sistemas de batalha inovadores e visuais deslumbrantes.",
        link_Ex: "https://finalfantasy.square-enix-games.com/",
        tags: "final fantasy rpg jrpg square enix fantasia"
    },
    // Objeto representando a franquia Grand Theft Auto (GTA)
    {
        título: "grand theft auto (gta)",
        descrição: "Série de mundo aberto famosa pela liberdade de ação, sátira social e uma mistura de gêneros como tiro e direção.",
        link_Ex: "https://www.rockstargames.com/gta-v",
        tags: "gta grand theft auto mundo aberto ação rockstar"
    },
    // Objeto representando a franquia Super Mario
    {
        título: "super mario",
        descrição: "O ícone máximo dos jogos de plataforma, focado em precisão de pulos, power-ups e design de níveis criativo.",
        link_Ex: "https://mario.nintendo.com/",
        tags: "mario nintendo plataforma clássico jump"
    },
    // Objeto representando a franquia Dark Souls
    {
        título: "dark souls",
        descrição: "Conhecida por sua dificuldade elevada e narrativa fragmentada, esta franquia definiu o subgênero 'Soulslike'.",
        link_Ex: "https://www.bandainamcoent.com/games/dark-souls-remastered",
        tags: "dark souls soulslike difícil rpg ação fromsoftware"
    },
    {
        título: "undertale",
        descrição: "Um RPG onde ninguém precisa morrer. Undertale revolucionou o gênero ao permitir que o jogador interaja pacificamente com monstros e sofra consequências reais por suas escolhas.",
        link_Ex: "https://undertale.com/",
        tags: "indie rpg escolhas criativo toby fox"
    },
    // Objeto representando Hollow Knight
    {
        título: "hollow knight",
        descrição: "Um metroidvania clássico em 2D com um mundo vasto e interconectado. É mestre em atmosfera, desafio e narrativa visual.",
        link_Ex: "https://www.hollowknight.com/",
        tags: "indie metroidvania difícil plataforma soulslike"
    },
    // Objeto representando Stardew Valley
    {
        título: "stardew valley",
        descrição: "Criado por uma única pessoa, este simulador de fazenda foca em comunidade, relaxamento e progressão constante.",
        link_Ex: "https://www.stardewvalley.net/",
        tags: "indie farm sim simulador fazenda relaxante"
    },
    // Objeto representando Celeste
    {
        título: "celeste",
        descrição: "Um jogo de plataforma super preciso que usa sua jogabilidade difícil como metáfora para lidar com saúde mental e superação.",
        link_Ex: "https://www.celestegame.com/",
        tags: "indie plataforma difícil precisão pixel art"
    },
    // Objeto representando Hades
    {
        título: "hades",
        descrição: "Um roguelike de ação que combina combate frenético com uma narrativa profunda baseada na mitologia grega.",
        link_Ex: "https://www.supergiantgames.com/games/hades/",
        tags: "indie roguelike ação deuses mitologia"
    },
    // Objeto representando Outer Wilds
    {
        título: "outer wilds",
        descrição: "Um mistério de mundo aberto sobre um sistema solar preso em um loop temporal. O progresso é guiado inteiramente pela curiosidade do jogador.",
        link_Ex: "https://www.mobiusdigitalgames.com/outer-wilds.html",
        tags: "indie exploração espaço mistério puzzle"
    },
    // Objeto representando Cuphead
    {
        título: "cuphead",
        descrição: "Inspirado nos desenhos animados dos anos 30, é um jogo de 'run and gun' focado em batalhas de chefes extremamente difíceis e arte feita à mão.",
        link_Ex: "https://www.cupheadgame.com/",
        tags: "indie boss rush difícil animação retrô"
    }
];

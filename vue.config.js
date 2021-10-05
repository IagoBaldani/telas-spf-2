module.exports= {
    pages: {
        'login': {
            entry: './src/views/login/main.js',
            template: 'public/index.html',
            title: 'SPF - Login',
            chunks: ['chunk-vendors', 'chunk-common', 'login']
        },
        'home': {
            entry: './src/views/home/main.js',
            template: 'public/index.html',
            title: 'Home - Painel Gerencial',
            chunks: ['chunk-vendors', 'chunk-common', 'home']
        },
        'informacoes-gerais-gerencial': {
            entry: './src/views/informacoes-gerais-gerencial/main.js',
            template: 'public/index.html',
            title: 'Informações Gerais - Painel Gerencial',
            chunks: ['chunk-vendors', 'chunk-common', 'informacoes-gerais-gerencial']
        },
        'dados-programa-visualizacao': {
            entry: './src/views/dados-programa-visualizacao/main.js',
            template: 'public/index.html',
            title: 'Programa de Formação - Visualização',
            chunks: ['chunk-vendors', 'chunk-common', 'dados-programa-visualizacao']
        },
        'dados-programa-busca': {
            entry: './src/views/dados-programa-busca/main.js',
            template: 'public/index.html',
            title: 'Programa de Formação - Busca',
            chunks: ['chunk-vendors', 'chunk-common', 'dados-programa-busca']
        },
        'dados-programa-cadastro_edicao': {
            entry: './src/views/dados-programa-cadastro_edicao/main.js',
            template: 'public/index.html',
            title: 'Programa de Formação - Cadastro e Edição',
            chunks: ['chunk-vendors', 'chunk-common', 'dados-programa-cadastro_edicao']
        },
        'dados-participante-visualizacao': {
            entry: './src/views/dados-participante-visualizacao/main.js',
            template: 'public/index.html',
            title: 'Participante - Visualização',
            chunks: ['chunk-vendors', 'chunk-common', 'dados-participante-visualizacao']
        },
        'dados-participante-busca': {
            entry: './src/views/dados-participante-busca/main.js',
            template: 'public/index.html',
            title: 'Participante - Busca',
            chunks: ['chunk-vendors', 'chunk-common', 'dados-participante-busca']
        },
        'dados-participante-cadastro_edicao': {
            entry: './src/views/dados-participante-cadastro_edicao/main.js',
            template: 'public/index.html',
            title: 'Participante - Cadastro e Edição',
            chunks: ['chunk-vendors', 'chunk-common', 'dados-participante-cadastro_edicao']
        },
        'dados-instrutor-visualizacao': {
            entry: './src/views/dados-instrutor-visualizacao/main.js',
            template: 'public/index.html',
            title: 'Instrutor - Visualização',
            chunks: ['chunk-vendors', 'chunk-common', 'dados-instrutor-visualizacao']
        },
        'dados-instrutor-busca': {
            entry: './src/views/dados-instrutor-busca/main.js',
            template: 'public/index.html',
            title: 'Instrutor - Busca',
            chunks: ['chunk-vendors', 'chunk-common', 'dados-instrutor-busca']
        },
        'dados-instrutor-cadastro_edicao': {
            entry: './src/views/dados-instrutor-cadastro_edicao/main.js',
            template: 'public/index.html',
            title: 'Instrutor - Cadastro e Edição',
            chunks: ['chunk-vendors', 'chunk-common', 'dados-instrutor-cadastro_edicao']
        }
    }
}
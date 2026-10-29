# Site - Gabriella Oliveira Pereira

Site profissional hospedado no GitHub Pages.

## Passos para colocar live

### 1. Clonar este repositório na máquina
```bash
git clone https://github.com/gabriellaopg/gabriellaopg.github.io.git
cd gabriellaopg.github.io
```

### 2. Fazer push dos arquivos
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 3. Configurar o domínio no Registro.br

Depois que fizer o push acima, vá ao painel do **Registro.br**:

1. Abra a página do seu domínio `gabriellapsicologasp.com`
2. Clique em **"Editar servidores DNS"** ou **"Adicionar servidores DNS"**
3. Adicione estes 4 registros:

| Tipo | Nome | Dados |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

E adicione também:
| CNAME | www | gabriellaopg.github.io |

Salve. A propagação DNS leva até 24h, mas geralmente é mais rápido (30 min - 2h).

### 4. Ativar HTTPS no GitHub Pages (automático)

Depois que o domínio estiver propagado, o GitHub ativa HTTPS automaticamente. Pode levar alguns minutos.

## Atualizar conteúdo depois

Pra atualizar texto, endereço ou qualquer coisa:

1. Edite o arquivo `index.html` localmente
2. Faça commit:
```bash
git add index.html
git commit -m "Atualizar [descrição da mudança]"
git push origin main
```

O site atualiza automaticamente em segundos.

## Estrutura

```
gabriellaop.github.io/
├── index.html      # Página principal (tudo está aqui)
├── CNAME           # Mapeia o domínio customizado
└── README.md       # Este arquivo
```

## Suporte

Qualquer dúvida sobre GitHub ou DNS, é só chamar.

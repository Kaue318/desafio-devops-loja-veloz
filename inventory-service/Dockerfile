# Estágio 1: Dependências e Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .

# Estágio 2: Imagem de Produção Enxuta
FROM node:18-alpine
WORKDIR /app

# 1. Copia os arquivos e instala as dependências de produção primeiro
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/src ./src
RUN npm install --omit=dev

# 2. Segurança: APÓS instalar, reduzimos os privilégios para o usuário não-root
USER node

EXPOSE 3000

CMD ["node", "src/index.js"]
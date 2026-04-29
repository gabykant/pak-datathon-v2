# ----------- STAGE 1 : Dependencies -----------
FROM node:20-alpine AS deps

WORKDIR /app

# Installer les dépendances système nécessaires à Prisma
RUN apk add --no-cache openssl

# Copier uniquement les fichiers nécessaires
COPY package.json package-lock.json* ./

# Installer les dépendances
RUN npm install

# ----------- STAGE 2 : Build -----------
FROM node:20-alpine AS builder

WORKDIR /app

RUN apk add --no-cache openssl

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Générer Prisma + build Next
RUN npx prisma generate
RUN npm run build

# ----------- STAGE 3 : Production -----------
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

RUN apk add --no-cache openssl

# Copier uniquement ce qui est nécessaire
COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "run", "start"]
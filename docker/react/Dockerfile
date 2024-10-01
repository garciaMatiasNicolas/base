# Usa una imagen base de Node.js para construir la aplicación
FROM node:16 as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Usa una imagen base de Nginx para servir la aplicación
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

# Copia el archivo de configuración de Nginx en el lugar correcto
COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]

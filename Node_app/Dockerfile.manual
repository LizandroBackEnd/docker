FROM ubuntu:22.04 

RUN apt update && apt install curl -y  
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - &&\
    apt-get install -y nodejs 
     
WORKDIR /app 
COPY app.js ./

EXPOSE 3000

# Shell form
#CMD node app.js 

# Exec form 
#CMD ["node", "app.js"]

# Entrypoint form
ENTRYPOINT [ "node" ]
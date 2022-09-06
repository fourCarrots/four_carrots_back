FROM node:16

# 앱 디렉터리 생성
WORKDIR /usr/src/app

# 앱 의존성 설치
COPY package*.json ./
RUN npm install

# 앱 소스코드 추가
COPY . .

# 매핑
EXPOSE 3000
CMD npm start
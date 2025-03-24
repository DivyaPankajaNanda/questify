# Questify

Questify - an AI enabled app that solves all your needs to create , distribute and attempt a questionnaire, survey, feedback form, assessment, quiz,etc.

## Steps to run the app using docker

**_git clone_**

```
git clone <repository_link>
```

**_Change directory_**

```
cd questify/
```

**_.env file setup for backend_**

```
cd backend
cp .env.sample .env
<!-- modify .env file accordingly -->
cd ..
```

**_Docker compose command_**

```
docker compose -f docker-compose.dev.yaml --env-file ./backend/.env up --build
```

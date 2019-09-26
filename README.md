## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

## Tutorial
Após inicializar a aplicação, enviar um post para gerar a notificação, conforme exemplo abaixo:

```
curl -X POST \
  https://fcm.googleapis.com/fcm/send \
  -H 'Authorization: key=AIzaSyCNKRG49Yk26Agk459Zo7HdlZwujQJL2MY' \
  -H 'Content-Type: application/json' \
  -d '{
    "to": "feqKa4LDYzI:APA91bHfE4Lx43hJJZE0bM9uXfEuqWY1mNDF3IGppWD9W8ctDXAoNIIVUkfJzx-G3XHz_OMd6Be_-GOmbOR_p3eJWDkByQAHX8ODgtz4rOe2cAqjpKF5Pv4-LF0zqc4KgfJj7_wmArVS",
    "data": {
        "notification": {
            "title": "PUSH-TESTE",
            "body": "Teste de mensagem PUSH",
            "icon": "/badge-icon.png"
        }
    }
}'
```
- Authorization(Header): key=(Legacy server key).
- Parâmetro “to” no body da request: Token gerado ao permitir exibir notificação no navegador.

O push será recebido como um alert.
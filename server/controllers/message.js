const Message = require("../models/message.js");


const saveMessage = (req, res) => {
    var params = req.body;
    var message = new Message();
    message.id = params.id;
    console.log(message);

    message
      .save()
      .then((messageStored) => {
        return res.status(200).send({
          status: "success",
          messageStored,
        });
      })
      .catch((error) => {
        return res.status(500).send({
          status: "Error",
          message: "No ha sido posible guardar el mensaje",
        });
      });
  }

  const getMessages =(req, res) => {
    Message.find({})
      .sort("-_id")
      .then((messages) => {
        if (!messages) {
          return res.status(404).send({
            status: "error",
            message: "No hay mensajes para mostrar",
          });
        }

        return res.status(200).send({
          status: "success",
          messages,
        });
      })
      .catch((error) => {
        return res.status(500).send({
          status: "error",
          message: "Error al extraer los datos",
        });
      });
  }

module.exports = {saveMessage,getMessages}

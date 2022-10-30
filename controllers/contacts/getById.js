const { Contact } = require("../../models");

const getById = async (req, res) => {
  const { contactId } = req.params;
    const contact = await Contact.findById(contactId);
  if (!contact) {
    const error = new Error(`contact with id=${contactId} not found`);
    error.status = 404;
    throw error;
  }
  res.json({
    status: "success",
    code: 200,
    data: { contact },
  });
};

module.exports = getById;

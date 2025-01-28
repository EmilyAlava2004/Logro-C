import Contacto from '../Models/ContactoModel.js';
import Etiqueta from '../Models/EtiquetaModel.js';

export const createContacto = async (req, res) => {

    try {
        const {nombre,telefono,correo,id_etiqueta } = req.body;
        const newContacto = await Contacto.create({
            nombre,
            telefono,
            correo,
            id_etiqueta
        });
        if (newContacto) {
            res.json({
                message: 'Contacto creado correctamente',
                data: newContacto
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error al crear contacto',
            error: error.message
        });
    }
}


export const getcontactos = async (req, res) => {
    try {
      const contacto = await Contacto.findAll({
        include: [{
          model: Etiqueta,
          attributes: ['nombreEtiqueta']
        }]
      });
      res.json({
        data: contacto
      });
    } catch (error) {
      res.status(500).json({
        message: 'Error getting contactos',
        data: {}
      });
    }
  };

  export const updateContacto = async (req, res) => {
    try {
      const { id } = req.params;
      const {nombre , telefono,correo,id_etiqueta } = req.body;
      const contacto = await Contacto.findByPk(id);
      if (contacto) {
        contacto.nombre = nombre;
        contacto.telefono = telefono;
        contacto.correo = correo;
        contacto.id_etiqueta = id_etiqueta;
        await contacto.save();
        res.json({
          message: 'contacto updated successfully',
          data: contacto
        });
      } else {
        res.status(404).json({
          message: 'contacto not found',
          data: {}
        });
      }
    } catch (error) {
      res.status(500).json({
        message: 'Error updating contacto',
        data: {}
      });
    }
  };

  export const deletecontacto = async (req, res) => {
    try {
      const { id } = req.params;
      const contacto = await Contacto.findByPk(id);
      if (contacto) {
        await contacto.destroy();
        res.json({
          message: 'contacto deleted successfully',
          data: contacto
        });
      } else {
        res.status(404).json({
          message: 'contacto not found',
          data: {}
        });
      }
    } catch (error) {
      res.status(500).json({
        message: 'Error deleting contacto',
        data: {}
      });
    }
  };

  export const getcontactoetiqueta = async (req, res) => {
    try {
      const { nometi } = req.params;
      const contacto = await Contacto.findAll({
        include: [{
          model: Etiqueta,
          where: { nombreEtiqueta: nometi },
          attributes: ['nombreEtiqueta']
        }]
      });
      res.json({
        data: contacto
      });
    } catch (error) {
      res.status(500).json({
        message: 'Error getting contacto by etiqueta',
        data: {}
      });
    }
  };
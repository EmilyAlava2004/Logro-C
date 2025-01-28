import Etiqueta from '../Models/EtiquetaModel.js';

export const createEtiqueta = async (req, res) => {
    try {
      const { nombreEtiqueta } = req.body;
      const newEtiqueta = await Etiqueta.create({
        nombreEtiqueta
  
      });
      if (newEtiqueta) {
        res.json({
          message: 'Etiqueta created successfully',
          data: newEtiqueta
        });
      }
    } catch (error) {
      res.status(500).json({
        message: 'Error creating etiqueta',
        data: {}
      });
    }
  };

  export const getEtiquetas = async (req, res) => {
    try {
      const newEtiqueta = await Etiqueta.findAll();
      res.json({
        data: newEtiqueta
      });
    } catch (error) {
      res.status(500).json({
        message: 'Error getting etiquetas',
        data: {}
      });
    }
  };
/**
 * Report.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	
  	lat: {
  		type: 'number',
  		// required: true,
  	},
  	lng: {
  		type: 'number',
  		// required: true,
  	},
  	numar_de_inmatriculare: {
  		type: 'string',
  		required: true,
  	},
  	optional_message: {
  		type: 'string',
  		required: false,
  	}

  },

  beforeValidate: (values, cb) => {
    values.lat = parseFloat(values.lat);
    values.lng = parseFloat(values.lng);
    cb();
  },
  
};


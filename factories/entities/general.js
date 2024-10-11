const omit = require('lodash/omit');

module.exports = class GeneralEntityFactory {
  static cleanMongooseData({data, extraFieldsToOmit = [], isAdmin}) {
    let fieldsToOmit = [
      '_id',
      '__v',
      'password',
      'updatedAt',
      ...extraFieldsToOmit,
    ];

    if (!isAdmin) fieldsToOmit = fieldsToOmit.concat(['createdAt']);

    const cleanObject = (obj) => {
      if (!obj) {
        return null;
      }

      const id = obj._id ? obj._id.toString() : null;
      const jsonData = obj.toJSON ? obj.toJSON() : obj;

      return {
        id,
        ...omit(jsonData, fieldsToOmit),
      };
    };

    return Array.isArray(data)
      ? data.map((item) => cleanObject(item))
      : cleanObject(data);
  }
};

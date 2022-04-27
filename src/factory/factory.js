const Laptop = require('./models/Laptop');
const Tablet = require('./models/Tablet');
const gadget = { Laptop, Tablet };

module.exports = {
    createDevice(type, attributes) {
        const DeviceType = gadget[type];
        if (!DeviceType) {
            throw new Error('Tipo de dispositivo inválido');
        }
        return new DeviceType(attributes);
    }
};

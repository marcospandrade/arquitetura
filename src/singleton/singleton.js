module.exports = (() => {
    let instance;

    function createDBConnectionInstance() {
        let object = new Object('I am connected to your Database, my friend');
        return object;
    }

    return {
        destroyConnection: () => {
            instance = null;
        },
        getInstance: () => {
            if (!instance) {
                instance = createDBConnectionInstance();
            }
            return instance;
        }
    };
})();

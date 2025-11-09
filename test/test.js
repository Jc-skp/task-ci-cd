const { helloWorld } = require('../index.js');

test('deve retornar a mensagem correta', () => {
    expect(helloWorld()).toBe("Hello, CI/CD World!");
});

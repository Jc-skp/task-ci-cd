function helloWorld() {
    return "Hello, CI/CD World!";
}

module.exports = { helloWorld };

// Execução direta
if (require.main === module) {
    console.log(helloWorld());
}

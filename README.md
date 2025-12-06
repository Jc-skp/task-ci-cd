# task-ci-cd
# Task CI/CD

Este repositório demonstra a implementação de um pipeline CI/CD usando GitHub Actions.

## 🚀 Funcionalidades do Pipeline

- **Build Automático**: Executa build da aplicação
- **Testes Automáticos**: Roda suite de testes com Jest
- **Verificação de Qualidade**: Análise de código
- **Deploy Simulado**: Simulação de deploy para produção

## 📁 Estrutura
- .github/workflows/ci-cd-pipeline.yml # Pipeline CI/CD
- package.json # Dependências do projeto
- index.js # Código principal
- test/test.js # Testes unitários

## 🔧 Como Funciona

1. **Push para main/master**: Dispara o pipeline completo
2. **Pull Request**: Executa apenas build e testes
3. **Stages**:
   - Build & Test
   - Code Quality Check
   - Deploy Preview
  
   - 

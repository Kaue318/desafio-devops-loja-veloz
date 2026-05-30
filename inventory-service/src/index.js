const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rota de Healthcheck (Essencial para o Kubernetes liveness/readiness probes)
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', service: 'inventory-service' });
});

// Simulação de rota para baixa de itens e auditoria de estoque
app.post('/api/inventory/audit', (req, res) => {
    const { itemId, quantity, storeCode } = req.body;
    console.log(`Auditoria: Ajustando estoque do item ${itemId} na loja ${storeCode}. Quantidade: ${quantity}`);
    res.status(200).json({ message: 'Estoque auditado e atualizado com sucesso.' });
});

// Simulação de rota para assistência entre lojas (transferência)
app.post('/api/inventory/transfer', (req, res) => {
    const { itemId, fromStore, toStore, quantity } = req.body;
    console.log(`Assistência entre lojas: Transferindo ${quantity}x do item ${itemId} da loja ${fromStore} para ${toStore}.`);
    res.status(200).json({ message: 'Transferência de estoque autorizada.' });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Inventory Service rodando na porta ${PORT}`);
});
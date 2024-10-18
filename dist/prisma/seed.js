"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const csvUtils_1 = require("../utils/csvUtils"); // Adjust the path based on your project structure
const prisma = new client_1.PrismaClient();
function sanitizeString(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '_').replace(/_+/g, '_');
}
function sanitizeObject(obj) {
    let sanitizedObj = {};
    Object.keys(obj).forEach(key => {
        // Sanitize key
        const sanitizedKey = sanitizeString(key.trim());
        const value = obj[key];
        sanitizedObj[sanitizedKey] = value;
    });
    return sanitizedObj;
}
async function populateDatabase() {
    const csvFilePath = 'prisma/seeder.csv'; // Adjust the path to your CSV file
    let i = 0;
    try {
        const data = await (0, csvUtils_1.parseCSV)(csvFilePath);
        for (const row of data) {
            const sanitizedRow = sanitizeObject(row);
            if (i === 0) {
                console.log(sanitizedRow);
            }
            i++;
            console.log(i);
            await prisma.cSVRecord.create({
                data: {
                    ID: sanitizedRow.ID,
                    Tipo: sanitizedRow.Tipo,
                    SKU: sanitizedRow.SKU,
                    Nome: sanitizedRow.Nome,
                    Publicado: sanitizedRow.Publicado,
                    Em_destaque: sanitizedRow.Em_destaque,
                    Visibilidade_no_catalogo: sanitizedRow.Visibilidade_no_catalogo,
                    Descricao_curta: sanitizedRow.Descricao_curta,
                    Descricao: sanitizedRow.Descricao,
                    Data_de_preco_promocional_comeca_em: sanitizedRow.Data_de_preco_promocional_comeca_em,
                    Data_de_preco_promocional_termina_em: sanitizedRow.Data_de_preco_promocional_termina_em,
                    Status_do_imposto: sanitizedRow.Status_do_imposto,
                    Classe_de_imposto: sanitizedRow.Classe_de_imposto,
                    Em_estoque: sanitizedRow.Em_estoque,
                    Estoque: sanitizedRow.Estoque,
                    Quantidade_baixa_de_estoque: sanitizedRow.Quantidade_baixa_de_estoque,
                    Sao_permitidas_encomendas: sanitizedRow.Sao_permitidas_encomendas,
                    Vendido_individualmente: sanitizedRow.Vendido_individualmente,
                    Peso_kg: sanitizedRow.Peso_kg,
                    Comprimento_cm: sanitizedRow.Comprimento_cm,
                    Largura_cm: sanitizedRow.Largura_cm,
                    Altura_cm: sanitizedRow.Altura_cm,
                    Permitir_avaliacoes_de_clientes: sanitizedRow.Permitir_avaliacoes_de_clientes,
                    Nota_de_compra: sanitizedRow.Nota_de_compra,
                    Preco_promocional: sanitizedRow.Preco_promocional,
                    Preco: sanitizedRow.Preco,
                    Categorias: sanitizedRow.Categorias,
                    Tags: sanitizedRow.Tags,
                    Classe_de_entrega: sanitizedRow.Classe_de_entrega,
                    Imagens: sanitizedRow.Imagens,
                    Limite_de_downloads: sanitizedRow.Limite_de_downloads,
                    Dias_para_expirar_o_download: sanitizedRow.Dias_para_expirar_o_download,
                    Ascendente: sanitizedRow.Ascendente,
                    Grupo_de_produtos: sanitizedRow.Grupo_de_produtos,
                    Upsells: sanitizedRow.Upsells,
                    Venda_cruzada: sanitizedRow.Venda_cruzada,
                    URL_externa: sanitizedRow.URL_externa,
                    Texto_do_botao: sanitizedRow.Texto_do_botao,
                    Posicao: sanitizedRow.Posicao,
                    Swatches_Attributes: sanitizedRow.Swatches_Attributes,
                    Nome_do_atributo_1: sanitizedRow.Nome_do_atributo_1,
                    Valores_do_atributo_1: sanitizedRow.Valores_do_atributo_1,
                    Visibilidade_do_atributo_1: sanitizedRow.Visibilidade_do_atributo_1,
                    Atributo_global_1: sanitizedRow.Atributo_global_1,
                },
            });
        }
        console.log('Database populated successfully!');
    }
    catch (error) {
        console.error('Error populating the database:', error);
    }
    finally {
        await prisma.$disconnect();
    }
}
populateDatabase();

import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import csvParser from "csv-parser";

const prisma = new PrismaClient();

async function main() {
  const results: any[] = [];

  fs.createReadStream("prisma/seeder.csv")
    .pipe(csvParser())
    .on("data", (data: any) => results.push(data))
    .on("end", async () => {
      for (const row of results) {
        try {
          await prisma.product.create({
            data: {
              tipo: row.Tipo,
              sku: row.SKU,
              name: row.Nome,
              published: row.Publicado === "1",
              featured: row["Em destaque?"] === "1",
              visible: row["Visibilidade no catálogo"],
              shortDesc: row["Descrição curta"],
              description: row.Descrição,
              promoStartDate: row["Data de preço promocional começa em"]
                ? new Date(row["Data de preço promocional começa em"])
                : null,
              promoEndDate: row["Data de preço promocional termina em"]
                ? new Date(row["Data de preço promocional termina em"])
                : null,
              taxStatus: row["Status do imposto"],
              taxClass: row["Classe de imposto"],
              inStock: row["Em estoque?"] === "1",
              stock: parseInt(row.Estoque, 10),
              lowStockThreshold: row["Quantidade baixa de estoque"]
                ? parseInt(row["Quantidade baixa de estoque"], 10)
                : null,
              backordersAllowed: row["São permitidas encomendas?"] === "1",
              soldIndividually: row["Vendido individualmente?"] === "1",
              weight: row["Peso (kg)"] ? parseFloat(row["Peso (kg)"]) : null,
              length: row["Comprimento (cm)"]
                ? parseFloat(row["Comprimento (cm)"])
                : null,
              width: row["Largura (cm)"]
                ? parseFloat(row["Largura (cm)"])
                : null,
              height: row["Altura (cm)"]
                ? parseFloat(row["Altura (cm)"])
                : null,
              allowCustomerReviews:
                row["Permitir avaliações de clientes?"] === "1",
              purchaseNote: row["Nota de compra"],
              promoPrice: row["Preço promocional"]
                ? parseFloat(row["Preço promocional"])
                : null,
              price: parseFloat(row.Preço),
              categories: row.Categorias,
              tags: row.Tags,
              deliveryClass: row["Classe de entrega"],
              images: row.Imagens
                ? row.Imagens.split(",").map((img: string) => img.trim())
                : [],
              downloadLimit: row["Limite de downloads"]
                ? parseInt(row["Limite de downloads"], 10)
                : null,
              downloadExpiryDays: row["Dias para expirar o download"]
                ? parseInt(row["Dias para expirar o download"], 10)
                : null,
              ascending: row.Ascendente ? parseInt(row.Ascendente, 10) : null,
              productGroup: row["Grupo de produtos"],
              upsells: row.Upsells,
              crossSells: row["Venda cruzada"],
              externalUrl: row["URL externa"],
              buttonText: row["Texto do botão"],
              position: row.Posicao ? parseInt(row.Posicao, 10) : null,
              swatchesAttributes: row["Swatches Attributes"]
                ? JSON.parse(row["Swatches Attributes"])
                : null,
              attributeName1: row["Nome do atributo 1"],
              attributeValues1: row["Valores do atributo 1"],
              attributeVisibility1: row["Visibilidade do atributo 1"] === "1",
              globalAttribute1: row["Atributo global 1"] === "1",
              yoastPrimaryProductCat:
                row["Metadado: _yoast_wpseo_primary_product_cat"],
              yoastContentScore: row["Metadado: _yoast_wpseo_content_score"]
                ? parseInt(row["Metadado: _yoast_wpseo_content_score"], 10)
                : null,
              allowOpenswatch: row["Metadado: _allow_openswatch"] === "1",
              openswatchAttributeGallery: row[
                "Metadado: _openswatch_attribute_gallery"
              ]
                ? JSON.parse(row["Metadado: _openswatch_attribute_gallery"])
                : null,
              wcpaExcludeGlobalForms:
                row["Metadado: wcpa_exclude_global_forms"] === "1",
              calor: row["Metadado: calor"],
              lace: row["Metadado: lace"],
              size: row["Metadado: tamanho"],
              lastEditorUsedJetpack: row["Metadado: _last_editor_used_jetpack"],
              fbProductGroupId: row["Metadado: fb_product_group_id"],
              wcFacebookCommerceEnabled:
                row["Metadado: _wc_facebook_commerce_enabled"] === "1",
              yoastReadingTime: row[
                "Metadado: _yoast_wpseo_estimated-reading-time-minutes"
              ]
                ? parseInt(
                    row[
                      "Metadado: _yoast_wpseo_estimated-reading-time-minutes"
                    ],
                    10
                  )
                : null,
              fbProductItemId: row["Metadado: fb_product_item_id"],
              wcFacebookSyncEnabled:
                row["Metadado: _wc_facebook_sync_enabled"] === "1",
              fbVisibility: row["Metadado: fb_visibility"],
              fbProductDescription: row["Metadado: fb_product_description"],
              wcFacebookProductImageSource:
                row["Metadado: _wc_facebook_product_image_source"],
              fbProductImage: row["Metadado: fb_product_image"],
              fbProductPrice: row["Metadado: fb_product_price"]
                ? parseFloat(row["Metadado: fb_product_price"])
                : null,
              yoastFocusKeyword: row["Metadado: _yoast_wpseo_focuskw"],
              yoastLinkdex: row["Metadado: _yoast_wpseo_linkdex"]
                ? parseInt(row["Metadado: _yoast_wpseo_linkdex"], 10)
                : null,
              inlineFeaturedImage: row["Metadado: inline_featured_image"],
              yoastPrimaryWooFeedBrand:
                row["Metadado: _yoast_wpseo_primary_woo-feed-brand"],
              yoastPrimaryFbProductSet:
                row["Metadado: _yoast_wpseo_primary_fb_product_set"],
              wpOldDate: row["Metadado: _wp_old_date"]
                ? new Date(row["Metadado: _wp_old_date"])
                : null,
              baCheetahMode: row["Metadado: ba_cheetah_mode"] === "1",
              wpPageTemplate: row["Metadado: _wp_page_template"],
              wpasDoneAll: row["Metadado: _wpas_done_all"] === "1",
            },
          });
        } catch (error) {
          console.error(`Error inserting row: ${row.SKU}`, error);
        }
      }

      console.log("Seeding finished.");
      await prisma.$disconnect();
    });
}

main().catch((e) => {
  console.error(e);
  prisma.$disconnect();
});
import { PrismaClient } from '@prisma/client';
import { parseCSV } from '../utils/csvUtils'; // Adjust the path based on your project structure

const prisma = new PrismaClient();

function sanitizeString(str: string) {
  return str.replace(/[^a-zA-Z0-9]/g, '_').replace(/_+/g, '_');
}

function sanitizeObject(obj: Record<string, any>): Record<string, any> {
  let sanitizedObj: Record<string, any> = {};

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
  let i = 0
  try {
    const data = await parseCSV(csvFilePath);

    for (const row of data) {
      const sanitizedRow = sanitizeObject(row);
      if(i === 0){
        console.log(sanitizedRow)
      }
      i++;
      console.log(i)
      await prisma.cSVRecord.create({
        data: {
          ID: sanitizedRow.ID, // Ensure 'ID' is included here
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
  } catch (error) {
    console.error('Error populating the database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

populateDatabase();

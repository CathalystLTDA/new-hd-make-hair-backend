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

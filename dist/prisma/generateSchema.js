"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// scripts/generateSchema.ts
const fs_1 = __importDefault(require("fs"));
const csv_parse_1 = require("csv-parse");
const csvFilePath = 'prisma/seeder.csv'; // Update the path to your CSV file
const prismaSchemaPath = 'prisma/schema.prisma';
const generateSchema = async () => {
    const headers = [];
    fs_1.default.createReadStream(csvFilePath)
        .pipe((0, csv_parse_1.parse)({
        delimiter: ',',
        from_line: 1,
        relax_column_count: true, // This option allows rows with different column counts
    }))
        .on('data', (row) => {
        if (headers.length === 0) {
            headers.push(...row);
        }
    })
        .on('end', () => {
        const fields = headers.map((header) => {
            return `  ${header.replace(/[^a-zA-Z0-9]/g, '_')}: String`;
        });
        const prismaModel = `
model CSVRecord {
  id Int @id @default(autoincrement())
${fields.join('\n')}
}
`;
        fs_1.default.appendFileSync(prismaSchemaPath, prismaModel);
        console.log('Prisma schema generated successfully.');
    })
        .on('error', (error) => {
        console.error('Error processing CSV:', error);
    });
};
generateSchema();

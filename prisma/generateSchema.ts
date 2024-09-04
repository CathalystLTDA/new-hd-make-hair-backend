// scripts/generateSchema.ts
import fs from 'fs';
import { parse } from 'csv-parse';

const csvFilePath = 'prisma/seeder.csv'; // Update the path to your CSV file
const prismaSchemaPath = 'prisma/schema.prisma';

const generateSchema = async () => {
  const headers: string[] = [];

  fs.createReadStream(csvFilePath)
    .pipe(
      parse({
        delimiter: ',',
        from_line: 1,
        relax_column_count: true, // This option allows rows with different column counts
      })
    )
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

      fs.appendFileSync(prismaSchemaPath, prismaModel);
      console.log('Prisma schema generated successfully.');
    })
    .on('error', (error) => {
      console.error('Error processing CSV:', error);
    });
};

generateSchema();
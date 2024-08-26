import * as fs from 'fs';
import * as csv from 'csv-parser';

export function readCSV(filePath: string): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const csvData: any[] = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row: any) => {
        csvData.push(row);
      })
      .on('end', () => {
        resolve(csvData);
      })
      .on('error', (error: any) => {
        reject(error);
      });
  });
}

export function writeCSV(filePath: string, data: any[]): Promise<void> {
  return new Promise((resolve, reject) => {
    const csvContent: string = data.map((row: any) => Object.values(row).join(',')).join('\n');
    fs.writeFile(filePath, csvContent, (error: any) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}
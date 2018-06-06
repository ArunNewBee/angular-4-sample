import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const prod = [
  { id: 11, name: 'T-Shirt', color:'Red', brand:'Nike', fabric:'Cotton', idealfor:'Men', packof:'1', size:'M', scolor:'Nil' },
  { id: 12, name: 'Shirt', color:'White', brand:'John Player', fabric:'Cotton', idealfor:'Men', packof:'1', size:'L', scolor:'Nil' },
  { id: 13, name: 'Trouser', color:'Black', brand:'Scullers', fabric:'Cotton', idealfor:'Men', packof:'1', size:'M', scolor:'Nil' },
  { id: 14, name: 'Jeans', color:'Blue', brand:'Denim', fabric:'Cotton', idealfor:'Men', packof:'1', size:'L', scolor:'Nil' },
  { id: 15, name: 'Skirt', color:'Yellow', brand:'Wrangler', fabric:'Cotton', idealfor:'Men', packof:'1', size:'L', scolor:'Nil' },
  { id: 16, name: 'T-Shirt', color:'Black', brand:'Adidas', fabric:'Cotton', idealfor:'Men', packof:'1', size:'L', scolor:'Nil' },
  { id: 17, name: 'Jeans', color:'Black', brand:'Adidas', fabric:'Cotton', idealfor:'Men', packof:'1', size:'L', scolor:'Nil' },
  { id: 18, name: 'Jeans', color:'Brown', brand:'Nike', fabric:'Cotton', idealfor:'Women', packof:'1', size:'L', scolor:'Nil' },
  { id: 19, name: 'Banyan', color:'Red', brand:'CR7', fabric:'Cotton', idealfor:'Men', packof:'1', size:'L', scolor:'Black' },
  { id: 20, name: 'Skirt', color:'White', brand:'Denim', fabric:'Cotton', idealfor:'Women', packof:'1', size:'M', scolor:'Nil' },
  { id: 21, name: 'Trouser', color:'Black', brand:'Scullers', fabric:'Cotton', idealfor:'Men', packof:'1', size:'L', scolor:'Nil' },
  { id: 22, name: 'Banyan', color:'Red', brand:'CR7', fabric:'Cotton', idealfor:'Men', packof:'3', size:'S', scolor:'Black' },
  { id: 23, name: 'Jeans', color:'Black', brand:'Adidas', fabric:'Cotton', idealfor:'Women', packof:'1', size:'L', scolor:'Nil' },
  { id: 24, name: 'Blue', color:'Black', brand:'Scullers', fabric:'Cotton', idealfor:'Men', packof:'1', size:'L', scolor:'Nil' },
  { id: 23, name: 'Shirt', color:'White', brand:'Basics', fabric:'Tera Cotton', idealfor:'Men', packof:'1', size:'M', scolor:'Nil' },
  { id: 24, name: 'Shirt', color:'White', brand:'Basics', fabric:'Tera Cotton', idealfor:'Men', packof:'1', size:'XL', scolor:'Nil' },
    ];
    return {prod};
  }
}
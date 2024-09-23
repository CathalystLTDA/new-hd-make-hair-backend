import type { Schema, Attribute } from '@strapi/strapi';

export interface MaterialConstrucao extends Schema.Component {
  collectionName: 'components_material_construcaos';
  info: {
    displayName: 'Construcao';
    icon: 'user';
  };
  attributes: {
    Imagem: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Tipo: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'material.construcao': MaterialConstrucao;
    }
  }
}

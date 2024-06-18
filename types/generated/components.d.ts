import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksHome extends Schema.Component {
  collectionName: 'components_blocks_homes';
  info: {
    displayName: 'Home';
    description: '';
  };
  attributes: {
    QuienesSomos: Attribute.Text;
    QueQueremosSer: Attribute.Text;
    videoLink: Attribute.String;
  };
}

export interface BlocksNormatividad extends Schema.Component {
  collectionName: 'components_blocks_normatividads';
  info: {
    displayName: 'Normatividad';
    description: '';
  };
  attributes: {
    normativa: Attribute.Component<'elements.normativa', true>;
    image: Attribute.Media<'images'>;
  };
}

export interface BlocksPreguntasFrecuentes extends Schema.Component {
  collectionName: 'components_blocks_preguntas_frecuentes';
  info: {
    displayName: 'Preguntas frecuentes';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    Preguntas: Attribute.Component<'elements.q-and-a', true>;
  };
}

export interface BlocksPyLa extends Schema.Component {
  collectionName: 'components_blocks_py_las';
  info: {
    displayName: 'PyLA';
    description: '';
  };
  attributes: {
    Componentes: Attribute.Component<
      'elements.pedagogia-y-lineas-de-accion-card',
      true
    >;
  };
}

export interface ElementsArchivo extends Schema.Component {
  collectionName: 'components_elements_archivos';
  info: {
    displayName: 'archivo';
    description: '';
  };
  attributes: {
    archivo: Attribute.Media<'files'>;
    title: Attribute.String;
    link: Attribute.String;
    imagen: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface ElementsNormativa extends Schema.Component {
  collectionName: 'components_elements_normativas';
  info: {
    displayName: 'normativa';
    description: '';
  };
  attributes: {
    file: Attribute.Media<'files'>;
    description: Attribute.Text;
    title: Attribute.String;
  };
}

export interface ElementsPageImage extends Schema.Component {
  collectionName: 'components_elements_page_images';
  info: {
    displayName: 'PageImage';
    description: '';
  };
  attributes: {
    Image: Attribute.Media<'images'>;
    page: Attribute.String;
  };
}

export interface ElementsPedagogiaYLineasDeAccionCard extends Schema.Component {
  collectionName: 'components_elements_pedagogia_y_lineas_de_accion_cards';
  info: {
    displayName: 'Pedagogia y Lineas de accion Card';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images'>;
    description: Attribute.RichText & Attribute.Required;
  };
}

export interface ElementsQAndA extends Schema.Component {
  collectionName: 'components_elements_q_and_as';
  info: {
    displayName: 'Q&A';
    description: '';
  };
  attributes: {
    Pregunta: Attribute.Text;
    Respuesta: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.home': BlocksHome;
      'blocks.normatividad': BlocksNormatividad;
      'blocks.preguntas-frecuentes': BlocksPreguntasFrecuentes;
      'blocks.py-la': BlocksPyLa;
      'elements.archivo': ElementsArchivo;
      'elements.normativa': ElementsNormativa;
      'elements.page-image': ElementsPageImage;
      'elements.pedagogia-y-lineas-de-accion-card': ElementsPedagogiaYLineasDeAccionCard;
      'elements.q-and-a': ElementsQAndA;
    }
  }
}

export interface PropsTags {
  id: number;
  name_tag: string;
}

export interface PropsProducts {
  id: number;
  name_product: string;
  plug_product: string;
  img_product: string;
  description_product: string;
  availble_product: number;
  price_original_product: number;
  price_offer_product: number
  tags: Array<PropsTags>;
}

export interface PropsPaginateProducts {
  current_page: number;
  data: Array<PropsProducts>;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Array<{
    url: string;
    label: string;
    active: boolean;
  }>;
  next_page_url: null;
  path: string;
  per_page: number;
  to: number;
  total: number;
}

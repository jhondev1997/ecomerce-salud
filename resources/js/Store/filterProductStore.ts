import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';
import { PropsTags } from '@/interfaces/PropsProducts';

interface PropsUseQueryFilterStore {
  addQuery: string;
  dataName: string;
  dataTags: PropsTags[];
  dataTagsAfterSubmit: PropsTags[];
  setAddQuery: ( value:string)=>void;
  setDataName: ( value: string)=>void;
  setDataTags: ( value: PropsTags[])=>void;
  setDataTagsAfterSubmit: ( value: PropsTags[])=>void;
}

export const useQueryFilterStore = createWithEqualityFn<PropsUseQueryFilterStore>((set)=>({
  addQuery: '',
  dataName: '',
  dataTags: [],
  dataTagsAfterSubmit: [],
  setAddQuery: (value)=> set(state=> ({
    ...state,
    addQuery: value
  })),
  setDataName: (value)=> set(state=> ({
    ...state,
    dataName: value
  })),
  setDataTags: ( value)=> set(state=> ({
    ...state,
    dataTags: [...value]
  })),
  setDataTagsAfterSubmit: ( value)=> set(state=> ({
    ...state,
    dataTagsAfterSubmit: [...value]
  })),
}), shallow)

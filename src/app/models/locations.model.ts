export interface IResponse {
  data: IData;
  error: any;
  status: string;
}

export interface IData {
  locations: Array<ILocation>;
}

export interface ILocation {
  branches: Array<IBranch>;
  dealers_id: string;
  name: string;
  opco: string;
}

export interface IBranch {
  branch_id: string;
  categories: Array<ICategory>;
  name: string;
}

export interface ICategory {
  name: string;
  image: string;
  subcategories: Array<ISubCategory>;
}

export interface ISubCategory {
  image: string;
  name: string;
}

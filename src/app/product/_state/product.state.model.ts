
import { Product } from "../_models/product.model";
import * as AppState  from "../../_state/app.state.model";

export interface State extends AppState.State {
    product: ProductStateModel;
}

export interface ProductStateModel {
    showProductCode: boolean;
    products: Product[];
    currentSelectedProduct?: Product;
}

export const initialState: ProductStateModel = {
    showProductCode: true,
    products: [],
    currentSelectedProduct: undefined 
}
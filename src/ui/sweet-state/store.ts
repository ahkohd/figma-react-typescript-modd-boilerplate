import { createStore, createHook, StoreActionApi } from 'react-sweet-state';
import {
  loader,
  loaderActions,
  LoaderState,
} from '@store/modules/loader.store';

export type State = { loader: LoaderState };
export type StoreApi = StoreActionApi<State>;
export type Actions = typeof actions;

const initialState = {
  loader,
};

const actions = {
  ...loaderActions,
};

const Store = createStore<State, Actions>({ initialState, actions });

const useStore = createHook(Store);

export default useStore;

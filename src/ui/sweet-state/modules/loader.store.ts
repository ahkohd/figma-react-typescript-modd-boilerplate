import { StoreApi } from '@store/store';

export type LoaderState = {
  loading: Array<string>;
};

export const loader: LoaderState = {
  loading: [],
};

export const loaderActions = {
  addLoading: (name: string) => ({ setState, getState }: StoreApi): void => {
    const loading = getState().loader.loading;

    if (!loading.includes(name)) {
      loading.push(name);

      setState({
        loader: {
          loading,
        },
      });
    }
  },

  removeLoading: (name: string) => ({ setState, getState }: StoreApi): void => {
    const loading = getState().loader.loading;
    const index = loading.indexOf(name);

    if (index !== -1) {
      loading.splice(index, 1);

      setState({
        loader: {
          loading,
        },
      });
    }
  },
};

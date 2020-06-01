import { createContext } from 'react';

export type DataState = Record<string, any>;

export type Step = {
  handle: string;
  path: string;
  exact: boolean;
  component: React.ComponentType;
};

interface StepsContext {
  formData: { [key: string]: any };
  currentStep: number;
  steps: Step[];

  invalidateStep: () => void;
  submit: (data: DataState) => void;
  clearFormStorage: () => void;
  nextPage: (data: DataState) => void;
  previousPage: (data?: DataState) => void;
}

export const StepsContext = createContext<StepsContext>({
  formData: {},
  currentStep: 1,
  steps: [],

  invalidateStep: () => {},
  submit: () => {},
  clearFormStorage: () => {},
  nextPage: () => {},
  previousPage: () => {},
});

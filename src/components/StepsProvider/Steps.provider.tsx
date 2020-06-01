import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { StepsContext, DataState, Step } from './context';

import Spinner from '../Spinner';
import StorageService from '../../services/StorageService';

export const FORM_STORAGE_KEY = 'kintoForm';
export const FORM_STEPS_COMPLETED_STORAGE_KEY = 'kintoFormCompletedSteps';

const initialData: DataState = StorageService.getItem(FORM_STORAGE_KEY);

export const numberOfCompletedSteps = () =>
  StorageService.getItem<number>(FORM_STEPS_COMPLETED_STORAGE_KEY) || 0;

type Props = {
  defaultData?: DataState;
  steps: Step[];
  children: React.ReactNode;
  onStepsCompleted?: (data: DataState) => void;
};

/**
 * StepsProvider
 * @description Context provider that keeps form data and current step state.
 * Data is also stored in `localStorage` and on page reload the form data is rehydrated from `localStorage`.
 * `localStorage` is updated on every field value update inside `FormProvider`.
 * `currentStep` is initialized from URL.
 * After initialization route is changing based on `currentStep` value.
 *
 */
export const StepsProvider = (props: Props): JSX.Element => {
  const { defaultData, steps, children, onStepsCompleted } = props;
  const [initialized, setInitialized] = useState(false);
  const [formData, setFormData] = useState<DataState>(
    initialData || defaultData
  );
  const [currentStep, setCurrentStep] = useState(0);
  const isSwitchingSteps = useRef(false);

  const match = useRouteMatch<{ stepName: string }>('/:stepName');
  const history = useHistory();

  const stepName = match?.params.stepName;

  const stepPaths = useMemo(() => steps.map((step) => step.path), [steps]);

  const clearFormStorage = useCallback(() => {
    StorageService.removeItem(FORM_STORAGE_KEY);
    StorageService.removeItem(FORM_STEPS_COMPLETED_STORAGE_KEY);
  }, []);

  const changeStep = useCallback((stepNumber: number, data?: DataState) => {
    isSwitchingSteps.current = true;
    setCurrentStep(stepNumber);
    if (data) {
      setFormData((old) => {
        const newData = { ...old, ...data };
        return newData;
      });
    }
  }, []);

  const submit = useCallback(
    async (additionalData: DataState) => {
      const data: Record<string, any> = await new Promise((resolve) =>
        setFormData(async (old) => {
          const newData = { ...old, ...additionalData };
          resolve(newData);
          return newData;
        })
      );
      onStepsCompleted!(data);
    },
    [onStepsCompleted]
  );

  const nextPage = useCallback(
    (data: DataState) => {
      if (currentStep > numberOfCompletedSteps()) {
        StorageService.setItem(FORM_STEPS_COMPLETED_STORAGE_KEY, currentStep);
      }
      if (currentStep < steps.length) changeStep(currentStep + 1, data);
      else submit(data);
    },
    [steps, submit, changeStep, currentStep]
  );

  const previousPage = useCallback(
    (data?: DataState) => {
      if (currentStep > 0) changeStep(currentStep - 1, data);
    },
    [changeStep, currentStep]
  );

  const invalidateStep = useCallback(() => {
    const notSwitchingSteps = !isSwitchingSteps.current;
    if (currentStep <= numberOfCompletedSteps() && notSwitchingSteps) {
      StorageService.setItem(FORM_STEPS_COMPLETED_STORAGE_KEY, currentStep - 1);
    }
  }, [currentStep]);

  useEffect(() => {
    if (!initialized) return;
    history.push(steps[currentStep - 1].path);
  }, [steps, initialized, history, currentStep]);

  useEffect(() => {
    /** determine step number based on current route path
     * this happens only the first time
     */
    if (!initialized) {
      setInitialized(true);
      const newStep = stepPaths.findIndex((sName) => sName === `/${stepName}`);

      const completedSteps = numberOfCompletedSteps();
      if (newStep > -1 && newStep <= completedSteps) {
        setCurrentStep(newStep + 1);
      } else {
        /** User tried to go to navigate to step that is not reachable yet */
        changeStep(completedSteps + 1);
      }
    } else {
      isSwitchingSteps.current = false;
    }
  }, [stepPaths, changeStep, stepName, initialized]);

  return (
    <StepsContext.Provider
      value={{
        formData,
        currentStep,
        steps,

        invalidateStep,
        clearFormStorage,
        submit,
        nextPage,
        previousPage,
      }}
    >
      {currentStep > 0 ? children : <Spinner />}
    </StepsContext.Provider>
  );
};

StepsProvider.defaultProps = {
  defaultData: {},
  onStepsCompleted: () => {},
};

export default StepsProvider;

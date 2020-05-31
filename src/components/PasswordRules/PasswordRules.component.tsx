import React from 'react';
import * as Styled from './PasswordRules.styles';
import { theme } from '../../config';
import Icon from '../Icon';
import Text from '../Text';
import validatorsRegexes from '../../helpers/validationRegexes';
import { pxToRem } from '../../styles/basics';

export const hasNumber = (password: string) =>
  validatorsRegexes.hasNumber.test(password);
export const hasLowerCaseLetter = (password: string) =>
  validatorsRegexes.passwordLowerCase.test(password);
export const hasUpperCaseLetter = (password: string) =>
  validatorsRegexes.passwordUpperCase.test(password);

/**
 * @name PasswordRules
 *
 * PasswordRules molecule renders error messages based on password string
 *
 * @returns {JSX}
 */

export type PasswordRulesProps = {
  password: string;
};

const PasswordRules: React.FC<PasswordRulesProps> = (
  props: PasswordRulesProps
): JSX.Element => {
  const { password } = props;
  const requiredLength = password.length >= 6;
  const hasLowAndUpperCase =
    hasLowerCaseLetter(password) && hasUpperCaseLetter(password);

  return (
    <Styled.Container className="password_rules">
      <div className="password_rules__rule">
        <div className="password_rules__rule__icon">
          {renderValidationStatus(requiredLength)}
        </div>
        <div>
          <Text.Body>Contains at least 6 characters</Text.Body>
        </div>
      </div>
      <div className="password_rules__rule">
        <div className="password_rules__rule__icon">
          {renderValidationStatus(hasNumber(password))}
        </div>
        <div className="password_rules_wrapper_password_rule_number--message">
          <Text.Body>Contains at least one number (0-9)</Text.Body>
        </div>
      </div>
      <div className="password_rules__rule">
        <div className="password_rules__rule__icon">
          {renderValidationStatus(hasLowAndUpperCase)}
        </div>
        <Text.Body>
          Contains both lower (a-z) and upper case letters (A-Z)
        </Text.Body>
      </div>
    </Styled.Container>
  );

  function renderValidationStatus(validStatus: boolean) {
    if (validStatus) {
      return (
        <Icon
          name="correct"
          color={theme.pallet.TURQUOISE}
          size={pxToRem('12px')}
        />
      );
    } else {
      return (
        <Icon
          name="incorrect"
          color={theme.pallet.ERROR}
          size={pxToRem('14px')}
        />
      );
    }
  }
};

export default PasswordRules as React.FC<PasswordRulesProps>;

import React from 'react';
import * as Styled from './PasswordRules.styles';
import { Icon } from 'components';
import { theme } from 'config';
import { Text } from 'components';
import validatorsRegexes from 'store/FormProvider/validationRegexes';

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
    <Styled.Container>
      <div className="password_rules_wrapper">
        <div className="password_rules_wrapper_password_rule_characters">
          <div className="password_rules_wrapper_password_rule_characters--icons">
            {renderValidationStatus(requiredLength)}
          </div>
          <div className="password_rules_wrapper_password_rule_characters--message">
            <Text.Body>Contains at least 6 characters</Text.Body>
          </div>
        </div>
        <div className="password_rules_wrapper_password_rule_number">
          <div className="password_rules_wrapper_password_rule_number--icons">
            {renderValidationStatus(hasNumber(password))}
          </div>
          <div className="password_rules_wrapper_password_rule_number--message">
            <Text.Body>Contains at least one number (0-9)</Text.Body>
          </div>
        </div>
        <div className="password_rules_wrapper_password_rule_letters">
          <div className="password_rules_wrapper_password_rule_letters--icons">
            {renderValidationStatus(hasLowAndUpperCase)}
          </div>
          <div className="password_rules_wrapper_password_rule_letters--message">
            <Text.Body>
              Contains both lower (a-z) and upper case letters (A-Z)
            </Text.Body>
          </div>
        </div>
      </div>
    </Styled.Container>
  );

  function renderValidationStatus(validStatus: boolean) {
    if (validStatus) {
      return <Icon name="correct" color={theme.pallet.TURQUOISE} />;
    } else {
      return <Icon name="incorrect" color={theme.pallet.ERROR} />;
    }
  }
};

export default PasswordRules as React.FC<PasswordRulesProps>;
